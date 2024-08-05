import React from 'react'
import './LandingPage.css'
import {useNavigate} from 'react-router-dom';
import Preloader from '../Components/Shared/Preloader/Preloader';
import { CiCircleCheck } from "react-icons/ci";
import Flores from '../assets/images/circleVioleta.png';
import Slider from "react-slick";
import Landing_logo from  '../assets/images/Flowers_landing.png'
import { MdAssignmentAdd } from "react-icons/md";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosClose } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Violeta from '../assets/images/Violeta2.png';
import Azul from '../assets/images/Azul22.png';
import Rojo from '../assets/images/Magenta22.png';
import Verde from '../assets/images/Verde2.png';
import Naranja from '../assets/images/Naranja2.png';
import Amarillo from '../assets/images/Amarillo2.png';
import Cafe from '../assets/images/Cafe22.png';
import Aguamarina from '../assets/images/AguaMarina2.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Swal from 'sweetalert2';
// IMAGENES PRUEBA SWIPER
import Imagen1 from '../assets/images/NewsImage1.jpg';
import Imagen2 from '../assets/images/NewsImage2.jpg';
import Imagen3 from '../assets/images/NewsImage3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetNews } from '../Services/News/News';
import { getModuls } from '../Services/Moduls/Moduls';

export default function LandingPage() {

    // PRELOADER

    let [preloader,setPreloader] =  React.useState(false);
    let [news,setNews] = React.useState([]);
    let [stories,setStories] = React.useState([]);
    let [moduls,setModuls]  = React.useState([]);
    let [selectModul,setSelectModul] = React.useState(null);
    // REACT USE EFFECT

    React.useEffect(()=>{
        // Cargamos los datos de las noticias
        LoadNews();
        LoadModuls();
    },[])


    const LoadModuls=async()=>{
        let result =  undefined;
        result =  await getModuls().catch((error)=>{
            console.log(error);
            setPreloader(false);
            Swal.fire({
                icon: 'info',
                title: 'Error al traer información de los módulos'
            })
        })
        if(result){
            console.log("Modulos: ",result.data);
            setModuls(result.data);
        }
    }

    const LoadNews=async()=>{

        // CARGAMOS LAS NOTICIAS
        setPreloader(true);
        let result =  undefined;
        result =  await GetNews().catch((error)=>{
            console.log(error);
            setPreloader(false);
            Swal.fire({
                icon: 'info',
                title: 'Problemas para cargar las noticias e historias'
            })
        })

        if(result){
            console.log("NEWS CARGADAS: ",result.data);
            setPreloader(false);
            setNews(result.data.filter((obj)=>obj.category == "Noticia"))
            setStories(result.data.filter((obj)=>obj.category == "Historia"))
        }
    }

    const [isVisible, setIsVisible] = React.useState(false);
    const navigate=useNavigate();

    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
    
            // Puedes ajustar el valor de 100 según tus necesidades
            if (scrollY > 100) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza del evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

    const notify = (text) => toast(text);

    const FilterModul=()=>{
        let filter_ =  moduls.filter((obj)=> obj.id  == selectModul);
        if(filter_.length !== 0){
            return filter_[0];
        }else{
            return null;
        }
    }


    return (
        <>
        {
                preloader ?
                <>
                <Preloader></Preloader>
                </>
                :

                <></>
        }
        <div className='body'>
        <div style={{width:'100%',minHeight:'100%',display:'flex',flexDirection:'column'}}>
                    <div className='carouselBody' >
                        <div className = 'landingInfoContainer'>
                            <div className={`landingTextContainer fade-in ${isVisible ? '' : 'visible'}`}>
                                    <p className='fontSemiBold textLanding' >Orquídeas un nuevo panorama</p>
                                    <p className='fontSemiBold textLandingV2' >Disfruta y aumenta tu conocimiento...</p>
                                    <div onClick={()=>navigate('/Auth/')}  className='buttonElement'>
                                            <span className='fontLight white'>Ingresar</span>
                                    </div>
                            </div>
                            <div className={`landingImageContainer fade-in ${isVisible ? '' : 'visible'}`}>
                                <img src={Landing_logo} width={'200'} height={'200'}></img>
                            </div>
                        </div>

                        <div className="icon-scroll" style={{position:'relative','top':'50px'}}></div>
                    </div>

                    <div className='containerIconV2'>
                                <div className='containerIconV2' style={{marginTop:'50px'}}>
                                <div className={`IconBlueContainer fade-in ${isVisible ? 'visible' : ''}`} >
                                    <MdAssignmentAdd size={40} color='white'></MdAssignmentAdd>
                                </div>
                                <span className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{'marginTop':'30px'}}>Módulos</span>
                                <span className={`lineColor fade-in ${isVisible ? 'visible' : ''}`} style={{marginBottom:'10px'}}></span>
                                <p className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{fontSize:'12px','maxWidth':'500px','textAlign':'center',marginBottom:'60px'}}>Transforma tus ideas y conoce los distintos apartados que te ofrecemos</p>
                                </div> 
                                <div  style={{width:'100%',maxWidth:'1150px','marginBottom':'60px',}}>
                                    <Slider {...settings}>
                                        <div key={1} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Violeta} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Violeta</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div onClick={()=>{
                                                    setSelectModul(8);
                                                    handleShow2()
                                                    }} className='divsContainer'>
                                                    <div  className='buttonElement'>
                                                        <span className='white fontLight'>Ver</span>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                        <div key={2} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Amarillo} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Amarillo</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(1);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={3} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Azul} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Azul</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(3);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={4} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Rojo} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Magenta</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(4);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={5} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Verde} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Verde</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(5);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={6} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Naranja} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Naranja</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(6);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={7} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Aguamarina} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Aguamarina</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div  onClick={()=>{
                                                    setSelectModul(7);
                                                    handleShow2()
                                                    }} className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={8} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Cafe} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Café</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(2);
                                                    handleShow2()
                                                    }} className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                    </Slider>
                                </div>
                                
                                
                                
                    </div>
                    <div className='dataModulContainerV2'>
                        <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>Noticias</p>
                        {/*  SWIPER NEWS */}
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                },
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                },
                                1440: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                                },
                            }}  
                            >
                            {news.map((obj,index)=>{
                                return(
                                    <SwiperSlide className='NewsSwiper'>
                                        <div className='SwiperImage'>
                                                <img src={obj?.image} className='ImageLanding'></img>
                                        </div>
                                        <div className='SwiperText'>
                                                <p className='TitleNews fontSemiBold color-purple'>
                                                    {obj?.title}
                                                </p>
                                                <p className='InfoNews fontLight'>
                                                    {obj?.content}
                                                </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            
                            
                        </Swiper>
                    </div>

                    <div className='dataModulContainerV3'>
                        <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>Historias</p>
                        {/*  SWIPER NEWS */}
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                },
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                                },
                                1440: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                                },
                            }}  
                            >
                            {stories.map((obj,index)=>{
                                return(
                                    <SwiperSlide className='NewsSwiper'>
                                        <div className='SwiperImage'>
                                                <img src={obj?.image} className='ImageLanding'></img>
                                        </div>
                                        <div className='SwiperText'>
                                                <p className='TitleNews fontSemiBold color-purple'>
                                                    {obj?.title}
                                                </p>
                                                <p className='InfoNews fontLight'>
                                                    {obj?.content}
                                                </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    
                    <div className='Footer'>
                        <div onClick={()=>notify('Comunicate al email pruebas@gmail.com')} className='SocialContainer'>
                                <BiLogoGmail size={25}></BiLogoGmail>
                        </div>
                        <div onClick={()=>notify('Contactame al 3162554803')} className='SocialContainer'>
                                <FaPhoneSquareAlt size={25}></FaPhoneSquareAlt>
                        </div>
                        <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"/>
                    </div>
                    
        </div>
            
        </div>
        <Offcanvas className="offcanvasBodyV2" show={show2} onHide={handleClose2}>
                <div className='offcanvas-header pb-4 padding-40-'>
                <h2 className='m-0 p-0 lh-sm fs-4-  fw-bold fontSemiBold color-purple'>Información del módulo</h2>
                <IoIosClose style={{'cursor':'pointer'}} onClick={handleClose2} size={30} className='fa icon-close'></IoIosClose>
                </div>
                <div className='offcanvas-body '>
                <div className='container-fluid pt-0 pb-0 padding-40-'>
                <div className='dataModulContainer'>
                <div className='DataInfoModulContainer' style={{'backgroundColor':FilterModul()?.color}}>
                        <div className='ContainerImageModul_2'>
                                                    {selectModul == 1 ?
                                                    <img src={Amarillo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 2 ?
                                                    <img src={Cafe} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 3 ?
                                                    <img src={Azul} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 4 ?
                                                    <img src={Rojo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 5 ?
                                                    <img src={Verde} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 6 ?
                                                    <img src={Naranja} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 7 ?
                                                    <img src={Aguamarina} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 8 ?
                                                    <img src={Violeta} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }
                        </div>
                        <div className='ContainerInfoModul'>
                                <span className='fontSemiBold color-purple' style={{'fontSize':'30px'}}>{FilterModul()?.title}</span>
                                <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>{''}</span>
                                <p className='fontLight description_moduls'>{FilterModul()?.description}</p>
                        </div>
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Temario</span>
                <div className='ClassesContainerFluid'>
                                                <div className='divClass_2 bs-2-'>

                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>

                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>

                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>

                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>
 
                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                                                <div className='divClass_2 bs-2-'>

                                                        <div className='TextContainerClass'>
                                                                <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                        </div>
                                                </div>
                </div>
        </div>
                </div>
                </div>
        </Offcanvas>
        </>
        
    )
}
