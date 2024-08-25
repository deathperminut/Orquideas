import React from 'react';
import './SelectModul.css';
import Flores from '../../../assets/images/circleVioleta.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../Context';
// IMPORTAMOS LAS IMAGENES DE LOS MODULOS
import Violeta from '../../../assets/images/Violeta2.png';
import Azul from '../../../assets/images/Azul22.png';
import Rojo from '../../../assets/images/Magenta22.png';
import Verde from '../../../assets/images/Verde2.png';
import Naranja from '../../../assets/images/Naranja2.png';
import Amarillo from '../../../assets/images/Amarillo2.png';
import Cafe from '../../../assets/images/Cafe22.png';
import Aguamarina from '../../../assets/images/AguaMarina2.png';
import { CiBookmark } from "react-icons/ci";
import Preloader from '../../../Components/Shared/Preloader/Preloader';
import { loadActivitiesUsers } from '../../../Services/Moduls/Moduls';
import Swal from 'sweetalert2';

export default function SelectModul() {
        const navigate=useNavigate();

        // useState
        let [preloader,setPreloader] = React.useState(false);
        // React.useContext
        let {modulHistorial,setModulHistorial,setUserModulActivitiesLink,selectActivityType,setSelectActivityType,userModulActivities,setUserModulActivities,userData,setUserData,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul,selectActivityIndex,setSelectActivityIndex,selectActivity,setSelectActivity} =  React.useContext(AppContext);
        

        React.useEffect(()=>{
                GetDataModuls();
        },[])

        const GetDataModuls=async()=>{

                let result =  undefined;
                setPreloader(true);
                result  = await loadActivitiesUsers().catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                icon: 'info',
                title: 'Problemas al cargar información'
                })
                })
                if(result){
                console.log("ACTIVIDADES MODULO: ",result.data);
                setPreloader(false);
                setModulHistorial(result.data.filter((obj,index)=> obj?.module_name == userModulActivities?.module_name));
                }

        }

        const convertDate=(fechaISO)=>{
                // Convertir la cadena a un objeto Date
        const fecha = new Date(fechaISO);

        // Crear un array con los nombres de los meses
        const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        // Obtener el día, el mes y el año de la fecha
        const dia = fecha.getUTCDate();
        const mes = meses[fecha.getUTCMonth()]; // getUTCMonth() devuelve el mes (0-11)
        const año = fecha.getUTCFullYear();

        // Formatear la fecha en el formato deseado
        const fechaFormateada = `Publicado el ${dia} de ${mes} de ${año}`;

        return fechaFormateada

        }
        return (
        <div className='dataModulContainer'>
                {
                        preloader ?
                        <>
                        <Preloader></Preloader>
                        </>
                        :

                        <></>
                }
                <div className='DataInfoModulContainer' style={{'backgroundColor':selectModul?.color}}>
                        <div className='ContainerImageModul_2' >
                                {selectModul?.id == 3 ?
                                <img src={Amarillo} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 4 ?
                                <img src={Cafe} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 1 ?
                                <img src={Azul} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 5 ?
                                <img src={Rojo} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 7 ?
                                <img src={Verde} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 6 ?
                                <img src={Naranja} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 2 ?
                                <img src={Aguamarina} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 8 ?
                                <img src={Violeta} className='card-img' alt="" />
                                :
                                <></>
                                }
                                
                        </div>
                        <div className='ContainerInfoModul'>
                                <span className='fontSemiBold ' style={{'fontSize':'30px'}}>{selectModul?.module_name}</span>
                                <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>{convertDate(selectModul?.created_at)}</span>
                                <p className='fontLight description_moduls' dangerouslySetInnerHTML={{ __html: selectModul?.description.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />
                        </div>
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Objetivos especificos</span>
                <div className='listInstitucions' style={{'marginTop':'30px'}}>
                                      {selectModul?.specific_objectives.map((obj,index)=>{
                                        return(
                                          <div key={index} className='ListData'>
                                                <div className='col-auto'>
                                                <CiBookmark />
                                                </div>
                                                <span className='fontLight'>{obj?.description}</span>
                                          </div>
                                        )
                                      })
                                      }
                                      
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Skills (Habilidades)</span>
                <div className='listInstitucions' style={{'marginTop':'30px'}}>
                                      {selectModul?.skills_and_learnings.map((obj,index)=>{
                                        return(
                                          <div key={index} className='ListData'>
                                                <div className='col-auto'>
                                                <CiBookmark />
                                                </div>
                                                <span className='fontLight'>{obj?.description}</span>
                                          </div>
                                        )
                                      })
                                      }
                                      
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Temario</span>
                <div className='ClassesContainerFluid'>
                                {userModulActivities?.activity_module_editable?.foundations.map((obj,index)=>{
                                        return(
                                                <div key={index} onClick={()=>{
                                                        // Guardamos el indice de la actividad
                                                        setSelectActivityIndex(index);
                                                        setSelectActivityType('foundations');
                                                        // Guardamos la actividad especifica
                                                        setSelectActivity(obj);
                                                        navigate('/Lobby/SelectClass')
                                                        }} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                {obj?.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos  video orquídeas'}</span> : <></>}
                                                                {obj?.hasOwnProperty("image") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos  imagen reflexiva'}</span> : <></>}
                                                                {obj?.hasOwnProperty("forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos  participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("cloud_forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos  participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos momento de discusión'}</span> : <></>}
                                                                {obj?.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos adjunta tu respuesta'}</span> : <></>}
                                                                {obj?.hasOwnProperty("lecture") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos momento de lectura'}</span> : <></>}
                                                                {obj?.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos corta redacción'}</span> : <></>}
                                                                {obj?.hasOwnProperty("selection_multiple_questionary") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Cimientos selección multiple'}</span> : <></>}
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>{convertDate(selectModul?.created_at)}</span>
                                                        </div>
                                                </div>
                                        )
                                })
                                }
                                {userModulActivities?.activity_module_editable?.engage.map((obj,index)=>{
                                        return(
                                                <div key={index} onClick={()=>{
                                                        // Guardamos el indice de la actividad
                                                        setSelectActivityIndex(index);
                                                        setSelectActivityType('engage');
                                                        // Guardamos la actividad especifica
                                                        setSelectActivity(obj);
                                                        navigate('/Lobby/SelectClass')
                                                        }} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                {obj?.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso Video orquídeas'}</span> : <></>}
                                                                {obj?.hasOwnProperty("image") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso  imagen reflexiva'}</span> : <></>}
                                                                {obj?.hasOwnProperty("forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("cloud_forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso  momento de discusión'}</span> : <></>}
                                                                {obj?.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso adjunta tu respuesta'}</span> : <></>}
                                                                {obj?.hasOwnProperty("lecture") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso momento de lectura'}</span> : <></>}
                                                                {obj?.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso corta redacción'}</span> : <></>}
                                                                {obj?.hasOwnProperty("selection_multiple_questionary") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Compromiso selección multiple'}</span> : <></>}
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>{convertDate(selectModul?.created_at)}</span>
                                                        </div>
                                                </div>
                                        )
                                })
                                }
                                {userModulActivities?.activity_module_editable?.co_create.map((obj,index)=>{
                                        return(
                                                <div key={index} onClick={()=>{
                                                        // Guardamos el indice de la actividad
                                                        setSelectActivityIndex(index);
                                                        setSelectActivityType('co_create');
                                                        // Guardamos la actividad especifica
                                                        setSelectActivity(obj);
                                                        navigate('/Lobby/SelectClass')
                                                        }} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                {obj?.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo colaborativo video orquídeas'}</span> : <></>}
                                                                {obj?.hasOwnProperty("image") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo  imagen reflexiva'}</span> : <></>}
                                                                {obj?.hasOwnProperty("forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("cloud_forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo colaborativo momento de discusión'}</span> : <></>}
                                                                {obj?.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo colaborativo adjunta tu respuesta'}</span> : <></>}
                                                                {obj?.hasOwnProperty("lecture") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo momento de lectura'}</span> : <></>}
                                                                {obj?.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo colaborativo corta redacción'}</span> : <></>}
                                                                {obj?.hasOwnProperty("selection_multiple_questionary") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Trabajo selección multiple'}</span> : <></>}
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>{convertDate(selectModul?.created_at)}</span>
                                                        </div>
                                                </div>
                                        )
                                })
                                }
                                {userModulActivities?.activity_module_editable.reflection.map((obj,index)=>{
                                        return(
                                                <div key={index} onClick={()=>{
                                                        // Guardamos el indice de la actividad
                                                        setSelectActivityIndex(index);
                                                        // Guardamos la actividad especifica
                                                        setSelectActivityType('reflection');
                                                        setSelectActivity(obj);
                                                        navigate('/Lobby/SelectClass')
                                                        }} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                {obj?.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión video orquídeas'}</span> : <></>}
                                                                {obj?.hasOwnProperty("image") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión  imagen reflexiva'}</span> : <></>}
                                                                {obj?.hasOwnProperty("forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("cloud_forum_participation") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión participa en el foro'}</span> : <></>}
                                                                {obj?.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión momento de discusión'}</span> : <></>}
                                                                {obj?.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión adjunta tu respuesta'}</span> : <></>}
                                                                {obj?.hasOwnProperty("lecture") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión momento de lectura'}</span> : <></>}
                                                                {obj?.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión corta redacción'}</span> : <></>}
                                                                {obj?.hasOwnProperty("selection_multiple_questionary") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Reflexión selección multiple'}</span> : <></>}
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>{convertDate(selectModul?.created_at)}</span>
                                                        </div>
                                                </div>
                                        )
                                })
                                }
                                                
                </div>
        </div>
    )
}
