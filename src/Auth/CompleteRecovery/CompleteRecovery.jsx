import React from 'react'
import './CompleteRecovery.css'
import { useNavigate } from 'react-router-dom';

export default function CompleteRecovery() {

    const navigate=useNavigate();


    return (
        <div className='FormContainer'>
                <span className='fontSemiBold title' >Validar contraseña</span>
                <form action='' className='Form'>
                        <div    className='ContainerButton'>
                            <p className='fs-10- fontLight textStyle-3' >Digita la nueva contraseña para validar el cambio</p>
                        </div>
                        <span className='fs-10- fontLight'>Nueva contraseña</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- right-addon-'>
                                <input type="password" className='form-control' id='password' placeholder="Ingrese su contraseña" />
                                </div>
                            </div>
                        </div>
                        <span className='fs-10- fontLight'>Repetir contraseña</span>
                        <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- right-addon-'>
                                <input type="password" className='form-control' id='password' placeholder="Ingrese su contraseña" />
                                </div>
                            </div>
                        </div>
                        <div className='ContainerButton'>
                        <div  className='Button_2' style={{'marginTop':'20px'}}>
                                    <span className='text_button_2'>Cambiar</span>
                        </div>
                        </div>
                        <div   onClick={()=>navigate('/Auth/AuthLogin')} className='ContainerButton'>
                            <span className='fs-10- fontLight textStyle-1' >Volver</span>
                        </div>
                </form>
    </div>
    )
}
