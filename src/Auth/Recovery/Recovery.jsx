import React from 'react'
import './Recovery.css'
import { useNavigate } from 'react-router-dom';

export default function Recovery() {

  const navigate=useNavigate();


  return (
    <div className='FormContainer'>
              <span className='fontSemiBold title' >Recuperar contraseña</span>
              <form action='' className='Form'>
                    <div    className='ContainerButton'>
                        <p className='fs-10- fontLight textStyle-3' >Digita el email asociado a la cuenta para enviar un correo de recuperación</p>
                    </div>
                    <span className='fs-10- fontLight' >Email</span>
                    <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                      <div className='col-12'>
                        <div className='form-floating inner-addon- left-addon-'>
                          <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                        </div>
                      </div>
                    </div>
                    
                    <div className='ContainerButton'>
                      <div onClick={()=>navigate('/Auth/AuthCompleteRecovery')} className='Button_2' style={{'marginTop':'20px'}}>
                                  <span className='text_button_2'>Enviar</span>
                      </div>
                    </div>
                    <div   onClick={()=>navigate('/Auth/AuthLogin')} className='ContainerButton'>
                        <span className='fs-10- fontLight textStyle-1' >Volver</span>
                    </div>
                  </form>
    </div>
  )
}
