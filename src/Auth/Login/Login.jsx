import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetUserInfo, LoginUser } from '../../Services/Users/Users';
import Preloader from '../../Components/Shared/Preloader/Preloader';
import Register from '../Register/Register';
import { AppContext } from '../../Context';

export default function Login() {

  const navigate=useNavigate();

  let {setUserData} =  React.useContext(AppContext);

  // USE STATES
  let [userInfo,setUserInfo] = React.useState({
    'username':'',
    'password':''
  })

  let [preloader,setPreloader] = React.useState(false);

  let ReadInput=(event,target)=>{

    setUserInfo({...userInfo,[target]:event.target.value})

  }

  const Login=async()=>{

    if(userInfo['username'] == "" || userInfo['password'] == ""){

      Swal.fire({
        icon: 'info',
        title: 'Completa todos los campos para realizar iniciar sesión'
      })

    }else{
      
      setPreloader(true);
      let result =  undefined;
      result =  await LoginUser(userInfo).catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
          icon: 'info',
          title: 'Se presento una falla al iniciar sesión comprueba tus credenciales o verifique la activación de su usuario'
        })
      })
      if(result){
        setPreloader(false);
        Swal.fire({
          icon: 'success',
          title: 'Sesión iniciada correctamente'
        })
        setUserData({...result.data});
        navigate('/Lobby');
        
      }
    }

  }
  


  return (
    <div className='FormContainer'>
              {
                          preloader ?
                          <>
                          <Preloader></Preloader>
                          </>
                          :

                          <></>
              }
              <span className='fontSemiBold title' >Inicia Sesión</span>
              <form action='' className='Form'>
                    <span className='fs-10- fontLight' >Correo</span>
                    <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                      <div className='col-12'>
                        <div className='form-floating inner-addon- left-addon-'>
                          <input value={userInfo['username']} onChange={(event)=>ReadInput(event,'username')} type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                        </div>
                      </div>
                    </div>
                    <span className='fs-10- fontLight'>Contraseña</span>
                    <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                      <div className='col-12'>
                        <div className='form-floating inner-addon- right-addon-'>
                          <input value={userInfo['password']} onChange={(event)=>ReadInput(event,'password')} type="password" className='form-control' id='password' placeholder="Ingrese su contraseña" />
                        </div>
                      </div>
                    </div>
                    <div className='ContainerButton'>
                      <div className='Button_1' onClick={Login}>
                                  <span className='text_button_1'>Ingresar</span>
                      </div>
                      <div onClick={()=>navigate('/Auth/AuthRegister')} className='Button_2' style={{'marginTop':'20px'}}>
                                  <span className='text_button_2'>Registrarse</span>
                      </div>
                    </div>
                    {/* <div   onClick={()=>navigate('/Auth/AuthRecovery')} className='ContainerButton'>
                        <span className='fs-10- fontLight textStyle-1' >Olvide mi contraseña</span>
                    </div> */}
                    <div   onClick={()=>navigate('/LandingPage')} className='ContainerButton'>
                        <span className='fs-10- fontLight textStyle-1' >Lobby</span>
                    </div>
                  </form>
    </div>
  )
}
