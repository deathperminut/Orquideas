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



export default function SelectModul() {
        const navigate=useNavigate();

        // React.useContext
        let {userData,setUserData,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul} =  React.useContext(AppContext);
        
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
                <div className='DataInfoModulContainer' style={{'backgroundColor':selectModul?.color}}>
                        <div className='ContainerImageModul_2' >
                                {selectModul?.id == 1 ?
                                <img src={Amarillo} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 2 ?
                                <img src={Cafe} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 3 ?
                                <img src={Azul} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 4 ?
                                <img src={Rojo} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 5 ?
                                <img src={Verde} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 6 ?
                                <img src={Naranja} className='card-img' alt="" />
                                :
                                <></>
                                }

                                {selectModul?.id == 7 ?
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
                                <span className='fontSemiBold ' style={{'fontSize':'30px'}}>{selectModul?.title}</span>
                                <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>{convertDate(selectModul?.created_at)}</span>
                                <p className='fontLight description_moduls'>{selectModul?.description}</p>
                        </div>
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Temario</span>
                <div className='ClassesContainerFluid'>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div onClick={()=>navigate('/Lobby/SelectClass')} className='divClass_2 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                </div>
        </div>
    )
}
