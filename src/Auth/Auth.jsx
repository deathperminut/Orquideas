import React from 'react'
import './Auth.css'
import background from '../assets/images/backgroundLogin.png'
import backgroundRegister from '../assets/images/backgroundRegister.png'
// ROUTERS
import {Navigate,Route,Routes,useNavigate} from 'react-router-dom';
// COMPONENTS
import Login from './Login/Login';
import Register from './Register/Register';
import CompleteRecovery from './CompleteRecovery/CompleteRecovery';
import Recovery from './Recovery/Recovery';

export default function Auth() {
    return (
        <div className='Body flex-column align-center bg-purple'>
                <div className='ContainerAuth bg-purple_light'>
                    <div className='DecorationContainer'>
                            <Routes>
                                <Route path='' element = {<Navigate to='AuthLogin'></Navigate>}></Route>
                                <Route path='AuthLogin/*' element={<img src={backgroundRegister} width={'100%'} height={'100%'}></img>}></Route>
                                <Route path='AuthRegister/*' element={<img src={backgroundRegister} width={'100%'} height={'100%'}></img>}></Route>
                                <Route path='AuthRecovery/*' element={<img src={backgroundRegister} width={'100%'} height={'100%'}></img>}></Route>
                                <Route path='AuthCompleteRecovery/*' element={<img src={backgroundRegister} width={'100%'} height={'100%'}></img>}></Route>
                            </Routes>
                            
                    </div>
                    <div className='LoginContainer'>
                            {/* DEFINIMOS LAS RUTAS PARA MOSTRAR */}
                            <Routes>
                                <Route path='' element = {<Navigate to='AuthLogin'></Navigate>}></Route>
                                <Route path='AuthLogin/*' element={<Login></Login>}></Route>
                                <Route path='AuthRegister/*' element={<Register></Register>}></Route>
                                <Route path='AuthRecovery/*' element={<Recovery></Recovery>}></Route>
                                <Route path='AuthCompleteRecovery/*' element={<CompleteRecovery></CompleteRecovery>}></Route>
                            </Routes>
                    </div>
                </div>
                
        </div>
    )
}
