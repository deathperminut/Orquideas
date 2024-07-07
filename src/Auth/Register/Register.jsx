import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate=useNavigate();


    return (
            <div className='FormContainer'>
                <span className='fontSemiBold title_2' >CrearCuenta</span>
                <form action='' className='Form'>
                        <span className='fs-10- fontLight' >Email</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                        <div className='col-12'>
                            <div className='form-floating inner-addon- left-addon-'>
                            <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                            </div>
                        </div>
                        </div>
                        <span className='fs-10- fontLight' >Nombre</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- left-addon-'>
                                <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                                </div>
                            </div>
                        </div>
                        <span className='fs-10- fontLight' >Identificación</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- left-addon-'>
                                <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                                </div>
                            </div>
                        </div>
                        <span className='fs-10- fontLight' >Institución</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- left-addon-'>
                                <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                                </div>
                            </div>
                        </div>
                        <span className='fs-10- fontLight'>Contraseña</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                        <div className='col-12'>
                            <div className='form-floating inner-addon- right-addon-'>
                            <input type="password" className='form-control' id='password' placeholder="Ingrese su contraseña" />
                            </div>
                        </div>
                        </div>
                        <div className='ContainerButton_2'>
                            <div className='Button_2' style={{'marginTop':'20px'}}>
                                        <span className='text_button_2'>Registrar</span>
                            </div>
                            <span onClick={()=>navigate('/Auth/AuthLogin')} className='fs-10- fontLight textStyle-2' >Volver</span>
                        </div>
                    </form>
        </div>
    )
}
