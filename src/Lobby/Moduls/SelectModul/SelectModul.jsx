import React from 'react';
import './SelectModul.css';
import Amarillo from '../../../assets/images/modulImage.png';
import Flores from '../../../assets/images/flores.png';


export default function SelectModul() {
    return (
        <div className='dataModulContainer'>
                <div className='DataInfoModulContainer'>
                        <div className='ContainerImageModul_2'>
                            <img src={Amarillo} className='card-img' alt="" />
                        </div>
                        <div className='ContainerInfoModul'>
                                <span className='fontSemiBold color-purple' style={{'fontSize':'30px'}}>Módulo violeta</span>
                                <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>Publicado el 11 de marzo de 2024</span>
                                <p className='fontLight description_moduls'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula vene,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula vene,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula vene,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula vene,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula vene,</p>
                        </div>
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Temario</span>
                <div className='ClassesContainerFluid'>
                                                <div className='divClass_2 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
                                                        <div className='ImageContainerClass'>
                                                            <img src={Flores} className='card-img' alt="" />
                                                        </div>
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
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
    )
}
