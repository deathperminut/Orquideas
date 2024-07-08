import React from 'react';
import './SelectClass.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdSkipNext } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import Flores from '../../../assets/images/flores.png';

export default function SelectClass() {

    /* use effect */
    let [state,setState] = React.useState(1)

    return (
        <div className='dataModulContainer'>
            <div className='navBarClass'>
                    <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginRight':'10px'}}>Módulo violeta</span>
                    <div className='progressContainer'>
                        <ProgressBar variant="info"  label={`${'60'}%`} now={60} />
                    </div>
                    <div className='classNumber bs-2-'>
                        <span className='fontLight'>1</span>
                    </div>
                    <div className='classNumber bs-2-'>
                        <MdSkipNext className='fontLight'>1</MdSkipNext>
                    </div>
            </div>
            <div className='CourseContainer '>
                    <div className='activityCourseContainer bs-2-'>
                            <div className='activity'>
                                
                            </div>
                            <span className='fontSemiBold' style={{'paddingLeft':'10px'}}>¡Bienvenido al inicio del módulo!</span>
                            <span className='fontLight' style={{'paddingLeft':'10px'}}>Publicado el 11 de marzo de 2024</span>
                            {/*Definimos las opciones*/}
                            <div className='card-header border-0 rounded-3'>
                                <div className='row'>
                                    <div className='col-12'>
                                    <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                                        <li className='nav-item' role="presentation">
                                        <button onClick={()=>setState(1)} className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="product-tab1" data-bs-toggle="pill" data-bs-target="#pills-product1" type="button" role="tab" aria-controls="pills-product1" aria-selected="true"> <span className='fontLight me-2'>Contexto</span></button>
                                        </li>
                                        <li className='nav-item' role="presentation">
                                        <button onClick={()=>setState(2)} className='nav-link rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="product-tab2" data-bs-toggle="pill" data-bs-target="#pills-product2" type="button" role="tab" aria-controls="pills-product2" aria-selected="true"> <span className='fontLight me-2'>Recursos</span></button>
                                        </li>
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
                                            <p className='fontLight'>En esta clase vamos a aprender el contexto regional, si tienes conocimientos avanzados sobre este tema, te recomendamos explorar otros cursos</p>
                                            <p className='fontSemiBold'>¿Qué vamos a realizar?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <></>
                            }
                            {state == 2 ? 
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
                            }
                            {state == 3 ? 
                            <div className='tab-pane fade show' id='pills-product3' role="tabpanel" aria-labelledby="product-tab" tabIndex="0">
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='d-grid gap-2 pt-1'>
                                                <div  className='divClass_3 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div  className='divClass_3 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div  className='divClass_3 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div  className='divClass_3 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div  className='divClass_3 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
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
                            <textarea className='form-control fontLight' rows="4" placeholder='Ingrese el comentario deseado'></textarea>
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
