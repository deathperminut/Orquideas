import React, { useState, useEffect } from 'react';
import './Admin.css';
import { Navigate, NavLink, useLocation, Route, Routes } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import Swiper, { Pagination, Manipulation, FreeMode } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from 'jquery';
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import circleAmarillo from '../../../assets/images/circleAmarillo.png';
import circleRojo from '../../../assets/images/circleRed.png';
import circleVerde from '../../../assets/images/greenCircle.png';
import circleAzul from '../../../assets/images/circleBlue.png';
import circleAguaMarina from '../../../assets/images/circleAguaMarina.png';
import circleNaranja from '../../../assets/images/circleNaranja.png';
import circleCafe from '../../../assets/images/circleCafe.png';
import circleVioleta from '../../../assets/images/circleVioleta.png';
import Users from './Users/Users';
import IndexModuls from './IndexModuls/IndexModuls';
import NewsModul from './NewsModul/NewsModul';
import Violeta from '../../../assets/images/Violeta2.png';
import Azul from '../../../assets/images/Azul22.png';
import Rojo from '../../../assets/images/Magenta22.png';
import Verde from '../../../assets/images/Verde2.png';
import Naranja from '../../../assets/images/Naranja2.png';
import Amarillo from '../../../assets/images/Amarillo2.png';
import Cafe from '../../../assets/images/Cafe22.png';
import Aguamarina from '../../../assets/images/AguaMarina2.png';


export default function Admin() {

    useEffect(() => {
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
    
      useEffect(() => {
        new Swiper('.swiper-container-indicators', {
          modules: [Manipulation, FreeMode, Pagination],
          slidesPerView: 'auto',
          spaceBetween: 20,
          grabCursor: true,
          breakpoints: {
            320: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            576: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            992: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
          }
        });
    
      }, []);
    
      /**
      * MESES Y DIAS EN ESPAÑOL PARA EL DATEPICKER
      */
    
      const months = [
        ["Ene", "Ene"],
        ["Feb", "Feb"],
        ["Mar", "Mar"],
        ["Abr", "Abr"],
        ["May", "May"],
        ["Jun", "Jun"],
        ["Jul", "Jul"],
        ["Agos", "Ago"],
        ["Sep", "Sep"],
        ["Oct", "Oct"],
        ["Nov", "Nov"],
        ["Dic", "Dic"],
      ]
      const weekDays = [
        ["Lun", "Lu"],
        ["Mar", "Ma"],
        ["Mie", "Mi"],
        ["Jue", "Ju"],
        ["Vie", "Vi"],
        ["Sab", "Sa"],
        ["Dom", "Do"],
      ]
    
      const [selectedDates, setSelectedDates] = useState([]);
      const minDate = new Date(2021, 0, 1); // 1 de enero de 2021
      const maxDate = new Date(2023, 11, 31); // 31 de diciembre de 2023
    
      const location = useLocation();

      let [state,setState] = React.useState(1);


    
    return (
        <div className='container-fluid overflow-x-hidden'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='m-0 p-0 lh-sm fs-3- fontSemiBold fw-bold color-purple'>Panel de administración</h2>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='d-flex flex-row justify-content-start align-items-center align-self-center'>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black- dayOfWeek'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black- dayOfMonth'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black- monthOfYear'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black- year'></p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black-'>/</p>
              &nbsp;
              <p className='m-0 p-0 lh-1 fs-5- fontSemiBold tx-black- hour'></p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className="swiper swiper-container-indicators">
              <div className="swiper-wrapper">
                <div onClick={()=>setState(1)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                      <NavLink className='nav-link card-img-overlay d-flex flex-column justify-content-center align-items-center align-self-center'>
                        <div className={`d-flex flex-row justify-content-center align-items-center align-self-center position-absolute top-0 start-50 translate-middle-x mt-4 rounded-circle ${
                          'wrapper-icon-indicator-adverse-events-'}`}>
                            <HiOutlineUsers  color='#FFF' size={50}/>
                        </div>
                        <p className='fs-4- fontSemiBold fw-bold lh-1 position-absolute bottom-0 start-50 translate-middle-x mb-5 text-center'>Usuarios</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(3)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                      <NavLink className='nav-link card-img-overlay d-flex flex-column justify-content-center align-items-center align-self-center'>
                        <div className={`d-flex flex-row justify-content-center align-items-center align-self-center position-absolute top-0 start-50 translate-middle-x mt-4 rounded-circle ${
                          'wrapper-icon-indicator-adverse-events-'}`}>
                           <HiOutlineNewspaper  color='#FFF' size={50}/>
                        </div>
                        <p className='fs-4- fontSemiBold fw-bold lh-1 position-absolute bottom-0 start-50 translate-middle-x mb-5 text-center'>Noticias</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Violeta} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Azul} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Rojo} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Verde} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Naranja} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Amarillo} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                          <img src={Cafe} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
                <div onClick={()=>setState(2)} className='swiper-slide d-flex flex-row justify-content-center align-items-center align-self-center mt-4'>
                  <div id="card-indicator" className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center cursor-'>
                    <div className='card border-0 overflow-hidden bs-3-'>
                        <img src={Aguamarina} className='card-img' alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-black d-none"></div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                {state == 1 ?  
                <Users></Users>
                :
                <></>
                }
                {state == 2 ? 
                <IndexModuls></IndexModuls>
                :
                <></>
                }
                {state == 3 ? 
                <NewsModul></NewsModul>
                :
                <></>
                }
          </div>
        </div>
      </div>
    )
}
