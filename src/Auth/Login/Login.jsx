import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate=useNavigate();


  return (
    <div className='FormContainer'>
              <span className='fontSemiBold title' >Inicia Sesión</span>
              <form action='' className='Form'>
                    <span className='fs-10- fontLight' >Email</span>
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
                    <div className='ContainerButton'>
                      <div className='Button_1' onClick={()=>navigate('/Lobby')}>
                                  <span className='text_button_1'>Ingresar</span>
                      </div>
                      <div onClick={()=>navigate('/Auth/AuthRegister')} className='Button_2' style={{'marginTop':'20px'}}>
                                  <span className='text_button_2'>Registrarse</span>
                      </div>
                    </div>
                    <div   onClick={()=>navigate('/Auth/AuthRecovery')} className='ContainerButton'>
                        <span className='fs-10- fontLight textStyle-1' >Olvide mi contraseña</span>
                    </div>
                    <div   onClick={()=>navigate('/LandingPage')} className='ContainerButton'>
                        <span className='fs-10- fontLight textStyle-1' >Lobby</span>
                    </div>
                  </form>
    </div>
  )
}
