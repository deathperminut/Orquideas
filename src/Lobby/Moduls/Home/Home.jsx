import React from 'react';
import './Home.css';
import Swiper, { Pagination, Manipulation, FreeMode } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Violeta from '../../../assets/images/Violeta2.png';
import Azul from '../../../assets/images/Azul22.png';
import Rojo from '../../../assets/images/Magenta22.png';
import Verde from '../../../assets/images/Verde2.png';
import Preloader from '../../../Components/Shared/Preloader/Preloader';
import Naranja from '../../../assets/images/Naranja2.png';
import Amarillo from '../../../assets/images/Amarillo2.png';
import Cafe from '../../../assets/images/Cafe22.png';
import Aguamarina from '../../../assets/images/AguaMarina2.png';
import { AppContext } from '../../../Context';
import Swal from 'sweetalert2';
import { GetSpecificUser } from '../../../Services/Users/Users';
import { createUserModule, getUserModulActivities } from '../../../Services/Moduls/Moduls';

export default function Home() {

    let {setUserModulActivitiesLink,userModulActivities,setUserModulActivities,userData,setUserData,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul} = React.useContext(AppContext);



    const navigate=useNavigate();
    React.useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
          const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          const dayOfWeek = daysOfWeek[date.getDay()];
          const dayOfMonth = date.getDate();
          const monthOfYear = monthsOfYear[date.getMonth()];
          const year = date.getFullYear();
          const hour = date.getHours().toString().padStart(2, '0');
          const minute = date.getMinutes().toString().padStart(2, '0');
          const second = date.getSeconds().toString().padStart(2, '0');
          const time = hour + ":" + minute + ":" + second;
    
          $('.dayOfWeek').text(dayOfWeek);
          $('.dayOfMonth').text(dayOfMonth);
          $('.monthOfYear').text(monthOfYear);
          $('.year').text(year);
          $('.hour').text(time);
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

      React.useEffect(() => {
        new Swiper('.swiper-container-portfolio', {
          modules: [Manipulation, FreeMode, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 25,
          grabCursor: true,
          centeredSlides: true,
          loop: true,
        });
      }, []);

      let [preloader,setPreloader] = React.useState(false);

      const verifyModul=async(idModul)=>{
        // obtenemos el objeto del modulo especifico
        let specificModul =  moduls.filter((obj)=> obj.id == idModul)[0]
        // MIRAMOS SI LA INSTITUCIÓN INCLUYE EL ID RESPECTIVO
        let filter_ = institution.filter((obj)=> obj.users.includes(userData?.id))
        console.log("institución filtrada",filter_,userData,specificModul);
        if(filter_.length !== 0){
              if(filter_[0].allowed_modules.includes(idModul)){
                // MIRAMOS SI EL USUARIO TIENE ACCESO A LAS ACTIVIDADES
                let result =  undefined;
                setPreloader(true);
                result =  await GetSpecificUser(userData?.id).catch((error)=>{
                      console.log(error);
                      setPreloader(false);
                      Swal.fire({
                        icon: 'info',
                        title: 'Problemas para validar permisos del usuario'
                      })
                })
                if(result){
                      setPreloader(false);
                      console.log("INFORMACIÓN USUARIO: ",result.data);
                      let info_user = result.data;
                      let modulo_usuario = result.data.usermodule_set.filter((obj)=>obj.module_name == specificModul.module_name);
                      
                      if(modulo_usuario.length !== 0){
                        console.log("VALIDACIONES USUARIO: ",modulo_usuario,result.data,specificModul);
                        // guardamos el modulo seleccionado
                        setPreloader(true);
                        setUserModulActivitiesLink(modulo_usuario[0].endpoint);
                        let resultV1 =  await getUserModulActivities(modulo_usuario[0].endpoint).catch((error)=>{
                          console.log(error);
                          setPreloader(false);
                          Swal.fire({
                            icon: 'info',
                            title: 'Problemas para traer información de actividades'
                          })
                        })
                        if(resultV1){
                          setPreloader(false);
                          console.log("ACTIVIDADES MODULO: ",resultV1.data);
                          setUserModulActivities(resultV1.data);
                          setSelectModul(moduls.filter((obj)=>obj.id == idModul)[0]);
                          // ADECUAMOS LOS MODULOS
                          navigate('/Lobby/SelectModul')
                        }
                        
                      }else{
                        // debemos crear las actividades para el usuario
                        let result =  undefined;
                        setPreloader(true);
                        console.log("CREAR ELEMENTOS: ",{'user':info_user?.id,'activity_module_master':specificModul?.id})
                        result  = await createUserModule({'user':info_user?.id,'activity_module_master':specificModul?.id}).catch((error)=>{
                          console.log(error);
                          setPreloader(false);
                          Swal.fire({
                            icon: 'info',
                            title: 'Problemas para validar actividades del usuario'
                          })
                        })
                        if(result){
                          // 
                          result =  undefined;
                          result =  await GetSpecificUser(userData?.id).catch((error)=>{
                            console.log(error);
                            setPreloader(false);
                            Swal.fire({
                              icon: 'info',
                              title: 'Problemas para validar permisos del usuario'
                            })
                          })
                          if(result){
                            setPreloader(false);
                            console.log("INFORMACIÓN USUARIO: ",result.data);
                            let info_user = result.data;
                            let modulo_usuario = result.data.usermodule_set.filter((obj)=>obj.module_name == specificModul.module_name);
                            setPreloader(true);
                            setUserModulActivitiesLink(modulo_usuario[0].endpoint);
                            let resultV1 =  await getUserModulActivities(modulo_usuario[0].endpoint).catch((error)=>{
                              console.log(error);
                              setPreloader(false);
                              Swal.fire({
                                icon: 'info',
                                title: 'Problemas para traer información de actividades'
                              })
                            })
                            if(resultV1){
                              setPreloader(false);
                              console.log("ACTIVIDADES MODULO: ",resultV1.data);
                              setUserModulActivities(resultV1.data);
                              setSelectModul(moduls.filter((obj)=>obj.id == idModul)[0]);
                              // ADECUAMOS LOS MODULOS
                              navigate('/Lobby/SelectModul')
                            }
                          }
                        }
                        
                      }
                      
                }
                
              }else{
                Swal.fire({
                  icon: 'info',
                  title: 'Tu institución no tiene acceso al módulo respectivo'
                })
              }
        }
      }



    return (
        <div className='container-fluid'>
        {
                          preloader ?
                          <>
                          
                          <Preloader></Preloader>
                          </>
                          :

                          <></>
          }
        <div className='row gx-4 d-flex flex-wrap flex-row justify-content-between align-items-start align-self-start align-self-xxl-center'>
          <div className='col-auto'>
            <h2 className='m-0 p-0 lh-sm fs-3- fontSemiBold color-purple'>Lobby</h2>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='d-flex flex-row justify-content-start align-items-center align-self-center'>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold dayOfWeek'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold dayOfMonth'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold monthOfYear'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold year'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold'>/</p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold hour'></p>
            </div>
          </div>
        </div>
        <div className='row row-cols-auto d-flex flex-wrap justify-content-center align-items-center align-self-center justify-content-sm-center align-items-sm-center align-self-sm-center justify-content-md-center align-items-md-center align-self-md-center justify-content-lg-start align-items-lg-center align-self-lg-center justify-content-xl-start align-items-xl-center align-self-xl-center justify-content-xxl-start align-items-xxl-center align-self-xxl-center g-4 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex mt-2'>
          <div className='col' onClick={()=>verifyModul(3)}>
            <div id="card-portfolio" className='w-100 cursor-' >
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Amarillo} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(4)}>
            <div id="card-portfolio" className='w-100 cursor-' >
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Cafe} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(1)}>
            <div id="card-portfolio" className='w-100 cursor-' >
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Azul} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(5)}>
            <div id="card-portfolio" className='w-100 cursor-' >
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Rojo} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(7)}>
            <div id="card-portfolio" className='w-100 cursor-'>
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Verde} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(6)}>
            <div id="card-portfolio" className='w-100 cursor-'>
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Naranja} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(2)}>
            <div id="card-portfolio" className='w-100 cursor-'>
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Aguamarina} className='card-img' alt="" />
              </div>
            </div>
          </div>
          <div className='col' onClick={()=>verifyModul(8)}>
            <div id="card-portfolio" className='w-100 cursor-'>
              <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                <img src={Violeta}  className='card-img' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='row d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'>
          <div className='col-12'>
            <div className="swiper swiper-container-portfolio">
              <div className="swiper-wrapper">
                <div onClick={()=>verifyModul(3)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Amarillo} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(4)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Cafe} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(1)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Azul} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(5)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Rojo} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(7)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Verde} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(6)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Naranja} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Aguamarina} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>verifyModul(8)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4 mb-5'>
                  <div id="card-portfolio" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 box-shadow-card-aplications overflow-hidden'>
                      <img src={Violeta} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black d-none"></div>
            </div>
          </div>
        </div>
      </div>
    )
}
