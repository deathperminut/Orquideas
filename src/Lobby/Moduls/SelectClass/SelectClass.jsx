import React from 'react';
import './SelectClass.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdSkipNext } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import Flores from '../../../assets/images/circleVioleta.png';
import Swal from 'sweetalert2';
import Preloader from '../../../Components/Shared/Preloader/Preloader';
import ReactPlayer from 'react-player'


import { AppContext } from '../../../Context';
import { set } from 'date-fns';

export default function SelectClass() {

    // React.useContext
    let {userData,setUserData,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul,selectActivityIndex,setSelectActivityIndex,selectActivity,setSelectActivity} =  React.useContext(AppContext);

    /* use effect */
    let [state,setState] = React.useState(1);

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
            <div className='navBarClass'>
                    <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginRight':'10px'}}>{selectModul?.title}</span>
                    <div className='progressContainer'>
                        <ProgressBar variant="info"  label={`${'60'}%`} now={60} />
                    </div>
                    <div className='classNumber bs-2-'>
                        <span className='fontLight'>{selectActivityIndex+1}</span>
                    </div>
                    <div className='classNumber bs-2-'>
                        <MdSkipNext className='fontLight'></MdSkipNext>
                    </div>
            </div>
            <div className='CourseContainer '>
                    <div className='activityCourseContainer bs-2-'>
                            <div className='activityV2'>
                                {/*dependiendo de la actividad colocamos*/}
                            {selectActivity?.hasOwnProperty("video") ?   
                            <ReactPlayer width={'100%'} height={'100%'} url={selectActivity?.video?.video_link} /> 
                            : 
                            <></>
                            }
                            {selectActivity?.hasOwnProperty("format_text") ?  
                            <div className='format_textActivity'>
                                    <span style={{'fontSize':'20px'}} className='fontSemiBold'>{'Instrucciones'}</span>
                                    <p style={{'textAlign':'center','fontSize':'20px'}} className='fontLight'>{selectActivity?.format_text?.text}</p>
                            </div>  
                            :
                            <></>
                            }
                            {selectActivity?.hasOwnProperty("evidence") ?   
                            <div className='format_textActivity'>
                                    <span style={{'fontSize':'20px'}} className='fontSemiBold'>{'Instrucciones'}</span>
                                    <p style={{'textAlign':'center','fontSize':'20px'}} className='fontLight'>{selectActivity?.evidence?.description}</p>
                                    <div class="custom-input-file col-md-6 col-sm-6 col-xs-6">
                                            <input  type="file" id="fichero-tarifas" accept="image/*" class="input-file" value=""></input>
                                            <span className='fontSemiBold'>Subir archivo</span>
                                    </div>
                            </div>
                            :
                            <></>}
                            {selectActivity?.hasOwnProperty("redaction") ?   
                            <div className='format_textActivity'>
                                    <span style={{'fontSize':'20px'}} className='fontSemiBold'>{'Instrucciones'}</span>
                                    <p style={{'textAlign':'center','fontSize':'20px'}} className='fontLight'>{selectActivity?.redaction?.description}</p>
                                    <span className='fontSemiBold color-purple'>Contenido</span>
                                    <div style={{'height':'300px'}} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                                        <textarea  style={{'height':'300px'}} className='form-control fontLight heightImportant' rows="4" placeholder='Ingrese el comentario deseado'></textarea>
                                    </div>
                                    <div  className='Button_2'>
                                                    <span className='text_button_2'>Guardar</span>
                                    </div>

                            </div>
                            :
                            <></>
                            }
                            </div>
                            {selectActivity?.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'paddingLeft':'10px'}}>{'Actividad '+(parseInt(selectActivityIndex)+1)+' Video orquídeas'}</span> : <></>}
                            {selectActivity?.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'paddingLeft':'10px'}}>{'Actividad '+(parseInt(selectActivityIndex)+1)+' Momento de discusión'}</span> : <></>}
                            {selectActivity?.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'paddingLeft':'10px'}}>{'Actividad '+(parseInt(selectActivityIndex)+1)+' Adjunta tu respuesta'}</span> : <></>}
                            {selectActivity?.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'paddingLeft':'10px'}}>{'Actividad '+(parseInt(selectActivityIndex)+1)+' Corta redacción'}</span> : <></>}
                            <span className='fontLight' style={{'paddingLeft':'10px'}}>{convertDate(selectModul?.created_at)}</span>
                            {/*Definimos las opciones*/}
                            <div className='card-header border-0 rounded-3'>
                                <div className='row'>
                                    <div className='col-12'>
                                    <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                                        <li className='nav-item' role="presentation">
                                        <button onClick={()=>setState(1)} className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="product-tab1" data-bs-toggle="pill" data-bs-target="#pills-product1" type="button" role="tab" aria-controls="pills-product1" aria-selected="true"> <span className='fontLight me-2'>Contexto</span></button>
                                        </li>
                                        {/* <li className='nav-item' role="presentation">
                                        <button onClick={()=>setState(2)} className='nav-link rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="product-tab2" data-bs-toggle="pill" data-bs-target="#pills-product2" type="button" role="tab" aria-controls="pills-product2" aria-selected="true"> <span className='fontLight me-2'>Recursos</span></button>
                                        </li> */}
                                        <li className='nav-item' role="presentation">
                                        <button onClick={()=>setState(3)} className='nav-link  rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="product-tab3" data-bs-toggle="pill" data-bs-target="#pills-product3" type="button" role="tab" aria-controls="pills-product3" aria-selected="false"> <span className='fontLight me-2'>Temario</span></button>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            {/* DEFINIMOS LAS AREAS A UTILIZAR */}
                            {state == 1 ? 
                                <div className='tab-pane fade show' id='pills-product2' role="tabpanel" aria-labelledby="product-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='d-grid gap-2 pt-1' style={{'padding':'10px'}}>
                                            <p className='fontSemiBold'>¿Qué vamos a realizar?</p>
                                            {selectActivity?.hasOwnProperty("video") ?   <p className='fontLight'>{selectActivity?.video?.description}</p> : <></>}
                                            {selectActivity?.hasOwnProperty("format_text") ?   <p className='fontLight'>{'Sigue las instrucciones del apartado superior'}</p> : <></>}
                                            {selectActivity?.hasOwnProperty("evidence") ?   <p className='fontLight'>{selectActivity?.evidence?.description}</p> : <></>}
                                            {selectActivity?.hasOwnProperty("redaction") ?   <p className='fontLight'>{selectActivity?.redaction?.description}</p> : <></>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                            }
                            {/* {state == 2 ? 
                            <div className='tab-pane fade show' id='pills-product2' role="tabpanel" aria-labelledby="product-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='d-grid gap-2 pt-1' style={{'padding':'10px'}}>
                                            <div className='linkContainer'>
                                                    <div className='iconContainer'>
                                                                <IoLinkSharp  size={25}/>
                                                    </div>
                                                    <span className='fontLight'>https://platzi.com/diseño</span>
                                            </div>
                                            <div className='linkContainer'>
                                                    <div className='iconContainer'>
                                                                <IoLinkSharp  size={25}/>
                                                    </div>
                                                    <span className='fontLight'>https://platzi.com/diseño</span>
                                            </div>
                                            <div className='linkContainer'>
                                                    <div className='iconContainer'>
                                                                <IoLinkSharp  size={25}/>
                                                    </div>
                                                    <span className='fontLight'>https://platzi.com/diseño</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                            } */}
                            {state == 3 ? 
                            <div className='tab-pane fade show' id='pills-product3' role="tabpanel" aria-labelledby="product-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='d-grid gap-2 pt-1'>
                                        {selectModul?.foundations.map((obj,index)=>{
                                        return(
                                                <div key={index} onClick={()=>{
                                                        // Guardamos el indice de la actividad
                                                        setSelectActivityIndex(index);
                                                        // Guardamos la actividad especifica
                                                        setSelectActivity(obj);
                                                        setState(1);
                                                        }} className='divClass_3 bs-2-'>
                                                        <div className='TextContainerClass'>
                                                                {obj.hasOwnProperty("video") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Actividad '+(parseInt(index)+1)+' Video orquídeas'}</span> : <></>}
                                                                {obj.hasOwnProperty("format_text") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Actividad '+(parseInt(index)+1)+' Momento de discusión'}</span> : <></>}
                                                                {obj.hasOwnProperty("evidence") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Actividad '+(parseInt(index)+1)+' Adjunta tu respuesta'}</span> : <></>}
                                                                {obj.hasOwnProperty("redaction") ?   <span className='fontSemiBold' style={{'textAlign':'center'}}>{'Actividad '+(parseInt(index)+1)+' Corta redacción'}</span> : <></>}
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>{convertDate(selectModul?.created_at)}</span>
                                                        </div>
                                                </div>
                                        )
                                })
                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                            }
                            
                    </div>
                    <div className='chatCourseContainer bs-2-'>
                        <span className='fontSemiBold color-purple'>Foro</span>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <textarea className='form-control fontLight ' rows="4" placeholder='Ingrese el comentario deseado'></textarea>
                        </div>
                        <div className='ButtonSend bs-2-'>
                                <IoMdSend></IoMdSend>
                        </div>
                        <div className='comentaryContainer'>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                            <div className='Comentario bs-2-'>
                                    <span className='Name fontSemiBold color-purple' >Juan Sebastian Mendez</span>
                                    <p className='Comment fontLight'>Alguien sabe como valido el curso?</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}
