import React from 'react'
import './LandingPage.css'
import {useNavigate} from 'react-router-dom';
import Preloader from '../Components/Shared/Preloader/Preloader';
import { CiCircleCheck } from "react-icons/ci";
import Flores from '../assets/images/circleVioleta.png';
import Slider from "react-slick";
import Landing_logo from  '../assets/images/Flowers_landing.png'
import { MdAssignmentAdd } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { PiFlowerLotusThin } from "react-icons/pi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosClose } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Violeta from '../assets/images/Violeta4.png';
import Azul from '../assets/images/Azul4.png';
import Rojo from '../assets/images/Magenta4.png';
import Verde from '../assets/images/Verde4.png';
import Naranja from '../assets/images/Naranja4.png';
import Amarillo from '../assets/images/Amarillo4.png';
import Cafe from '../assets/images/Cafe4.png';
import Aguamarina from '../assets/images/AguaMarina4.png';


import Violeta2 from '../assets/images/Violeta2.png';
import Azul2 from '../assets/images/Azul22.png';
import Rojo2 from '../assets/images/Magenta22.png';
import Verde2 from '../assets/images/Verde2.png';
import Naranja2 from '../assets/images/Naranja2.png';
import Amarillo2 from '../assets/images/Amarillo2.png';
import Cafe2 from '../assets/images/Cafe22.png';
import Aguamarina2 from '../assets/images/AguaMarina2.png';

import LandingBook from '../assets/images/LandingBook.png';
import LandingFlow from '../assets/images/LandingFlow.png';

import { MdDeleteOutline } from "react-icons/md";
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


/* CREAMOS UN OBJETO GENERAL PARA MANEJAR LA INFORMACIÓN DEL MODULO */

var DataModuls=[
    {
    id:1,
    name:'GESTIÓN DE EMOCIONES',
    name_presencial:'Taller presencial (Tejido vital, mapeando las emociones)',
    description_presencial:'se trata de una apropiación de la narrativa corporal a través de la poética, el proceso metodológico incluye el reconocimiento de puntos cardinales para una concienciación y resignificación emocional de las y los participantes.',
    name_virtual:'Taller virtual ( ¿Y usted, ¿Quién Es? )',
    description_virtual:'este taller sobre sobre inteligencia emocional, propone un viaje introspectivo y práctico hacia el autodescubrimiento y el desarrollo emocional. Diseñado para participantes que buscan fortalecer sus habilidades emocionales en el contexto personal y profesional, este taller ofrece una experiencia interactiva y enriquecedora.',
    name_trans:'',
    description_trans:''
    },
    {
    id:2,
    name:'Bienestar para la construcción de espacios armónicos en las organizaciones',
    name_presencial:'Taller presencial (Maniquíes)',
    description_presencial:'El taller "Maniquíes" es una experiencia innovadora diseñada para fortalecer el bienestar organizacional a través de una serie de actividades dinámicas y reflexivas. Este taller se compone de diversos módulos interconectados, cada uno centrado en aspectos clave para la armonía del grupo del cual se hace parte. Uno de los objetivos principales es promover la importancia del trabajo en equipo, reconociendo que el éxito de una organización depende en gran medida de la colaboración y la comunicación efectiva entre sus integrantes , Además, el taller busca cultivar el sentido de pertenencia dentro de la organización, es por ello que los y las participantes se involucrarán en actividades diseñadas para fortalecer el sentimiento de identidad, la conexión grupal y explorarán la importancia de actuar con integridad y responsabilidad en todas sus interacciones. Para lograr estos objetivos, se utilizarán metáforas y símbolos, como los cordones de los zapatos y el maniquí. Estos elementos visuales y corporales servirán como herramientas poderosas para transmitir conceptos abstractos de una manera tangible y memorable, facilitando así el proceso de aprendizaje y reflexión. De esta manera, el taller "Maniquíes" se presenta como una oportunidad para fortalecer el bienestar organizacional. Al enfocarse en aspectos clave como el trabajo en equipo, la ética organizacional y el sentido de pertenencia, de tal manera que se cultive un ambiente en el cual las personas se sientan valoradas, motivadas y comprometidas. ',
    name_virtual:'Taller virtual (Habito, me limito, renazco)',
    description_virtual:'Este taller se centra en la exploración profunda del bienestar personal y su relación con las motivaciones individuales en un contexto organizacional. A través de una serie de actividades diseñadas para fomentar la reflexión y el autoconocimiento, los y las participantes tendrán la oportunidad de investigar cómo sus motivaciones personales influyen en su bienestar general y en su desempeño en el trabajo. Durante el taller, se explorarán introspectivamente las motivaciones, valores y aspiraciones individuales. Se utilizarán técnicas de autoreflexión, expresión corporal y diálogo para profundizar en la comprensión de sí mismos y de cómo estas percepciones impactan la vida laboral. Uno de los aspectos clave del taller es el enfoque en la Corpografía motivacional, donde se empleará la poesía para explorar las conexiones entre el cuerpo, la mente y las emociones. Estas actividades permitirán a quienes participan expresar de manera creativa sus pensamientos y sentimientos, así como identificar patrones de comportamiento relacionados con sus motivaciones personales. Al finalizar el taller, se espera que los y las participantes hayan adquirido una mayor conciencia sobre sus propias motivaciones y su impacto en su bienestar. Esta comprensión más profunda no solo beneficiará a quienes participan individualmente, sino que también puede contribuir a mejorar el clima y la cultura organizacional en su conjunto',
    name_trans:'',
    description_trans:''
    },
    {
    id:3,
    name:'HABLEMOS DE CORRUPCIÓN',
    name_presencial:'Taller presencial ( Somos un cuerpo colectivo )',
    description_presencial:'El taller propone explorar y cuestionar la relación que se tiene entre cuerpo y mente, invitando a las personas participantes a comprender el cuerpo como un organismo complejo e inasible. Se pretende fomentar una reflexión profunda sobre la importancia de la ética aplicada en entornos de grupos, destacando su relevancia en la prevención de la corrupción y la promoción de buenas prácticas en el ámbito organizacional.',
    name_virtual:'Taller virtual ( El Anillo )',
    description_virtual:'El taller "El Anillo” desde una perspectiva teleológica, busca resignificar la justicia y la injusticia a través del análisis del texto narrativo de naturaleza filosófica "El anillo de Giges" de Platón. Se quiere que, partiendo de la metáfora del anillo del poder, la ética aplicada a los contextos y entornos organizacionales se vea reflejada en todos los marcos de la vida cotidiana',
    name_trans:'',
    description_trans:''
    },
    {
    id:4,
    name:'DILEMAS ÉTICOS',
    name_presencial:'Taller presencial ( El Café del Mundo )',
    description_presencial:'La actividad central, denominada "El Café del Mundo", constituye una metodología participativa diseñada para la co-construcción de consideraciones éticas colectivas y el desarrollo de nuevas políticas de afecto en el tratamiento de dilemas en entornos de grupo. Inspirada en la riqueza de perspectivas y experiencias individuales, esta dinámica busca fomentar un diálogo abierto y reflexivo que permita abordar dilemas éticos desde un enfoque colaborativo. En "El Café del Mundo", los y las participantes se sumergen en una experiencia única donde se crea un espacio de intercambio de ideas, experiencias y valores. Inspirado en la diversidad cultural, este café simbólico representa la multiplicidad de perspectivas que convergen en la dinámica de los grupos. Las personas participan en roles diversos relacionados con gerencia, finanzas, talento humano, comunicaciones y otros que en la organización existan, se reúnen en mesas temáticas que representan diferentes "países" o dimensiones éticas. La metodología fomenta el diálogo reflexivo y la empatía, permitiendo que las distintas perspectivas se entrelacen en una construcción colectiva de nuevas políticas de afecto. Al final de la actividad, se espera que las personas hayan contribuido a la formulación de enfoques éticos más robustos y al fortalecimiento de la cohesión organizativa a través de la consideración de diversas voces y la construcción de soluciones éticas compartidas.',
    name_virtual:'Taller virtual ( Coraje )',
    description_virtual:'este taller tiene el propósito de situar a las y los participantes en diversas situaciones que, si bien parecen tener una solución práctica, fácil y sencilla, se ven envueltos en tomar una decisión pertinente, asertiva, adecuada y/o apta para la mayor cantidad de personas beneficiadas, aunque algunas personas o así sea solo una se vea afectada negativamente. Es un viaje de coraje y carácter alrededor de dilemas, donde se ve envuelto la ética personal y profesional en su campo laboral.',
    name_trans:'',
    description_trans:''
    },
    {
    id:5,
    name:'LIDERAZGO AL SERVICIO DEL TALENTO',
    name_presencial:'Taller presencial ( Los superpoderes del liderazgo ético )',
    description_presencial:'Reconocer el liderazgo como un pilar fundamental en la creación de un ambiente laboral ético, es crucial para entender que los y las líderes de las organizaciones tienen una alta responsabilidad en la transmisión de una cultura coherente, en la que los valores, la visión y las prioridades de la organización son personificados por sujetos que apoyan a los equipos y refuerzan la credibilidad de la dirección estratégica. El taller se basa en 5 capacidades fundamentales que una persona líder necesita gestionar y desarrollar para tener una influencia positiva sobre la cultura organizacional, su equipo y los resultados.  El desarrollo del tema y los contenidos fomentan el análisis y entendimiento profundo de los aspectos que construyen el comportamiento de las y los líderes y que los posicionan como referentes en su equipo más allá del conocimiento técnico y experiencia.',
    name_virtual:'Taller virtual ( Carta de navegación hacia el liderazgo ético )',
    description_virtual:'El taller virtual busca llevar a las personas a través de un viaje interno y externo. Incluye un test de personalidad y la creación de un mural colectivo.  Durante la experiencia se utiliza la prueba “16 personalidades” en dónde cada persona podrá identificar sus características, sesgos y preferencias. Posteriormente, los y las participantes tendrán la oportunidad de compartir en un Mural colectivo sus personalidades y características que les llamó la atención. Todo el proceso busca fortalecer el auto-conocimiento y también el entendimiento de las preferencias de las demás personas; fomentando la apertura a los diferentes estilos de personalidad y facilitando las relaciones en el interior de las organizaciones y también con aliados externos.',
    name_trans:'',
    description_trans:''
    },
    {
    id:6,
    name:'CONSTRUCCIÓN DE PAZ',
    name_presencial:'Taller presencial ( Las 5C )',
    description_presencial:'En un ambiente colaborativo, se inicia la actividad con una reflexión sobre la misión y los valores organizacionales, invitando a los y las participantes a compartir sus opiniones y experiencias relacionadas con estos aspectos fundamentales. Posteriormente, se presenta un video que ejemplifica la importancia de la coordinación y el trabajo en equipo para alcanzar objetivos comunes. A través de ejemplos concretos, se resalta cómo la colaboración efectiva entre integrantes de equipos diversos conduce al éxito y al logro de metas compartidas. Después de la proyección del video, se facilita una discusión guiada para reflexionar sobre cómo aplicar los principios de coordinación y colaboración en entornos colectivos. Se alienta a compartir ideas y sugerencias sobre cómo mejorar la coordinación dentro del equipo. Finalmente, se dedica un momento para concienciar sobre la importancia de las "5 C" (Cooperación, Coordinación, Compromiso, Confianza y Comunicación). Se destaca cómo estas cualidades son esenciales para promover una cultura de paz, colaboración y éxito en el trabajo diario.',
    name_virtual:'Taller virtual ( Viaje al centro de mi mundo )',
    description_virtual:'El taller está diseñado para explorar y comprender la complejidad del ser humano en un contexto colectivo. A través de una serie de actividades introspectivas y dinámicas grupales, los y las participantes tendrán la oportunidad de analizar sus limitaciones y habilidades personales, así como reflexionar sobre su impacto en la dinámica organizacional. Este taller busca promover un espacio de autoconocimiento y autoexploración en el que las personas puedan comprender mejor su papel dentro de la organización y maximizar su contribución al logro de los objetivos colectivos.',
    name_trans:'',
    description_trans:''
    },
    {
    id:7,
    name:'PERSPECTIVA AMBIENTAL',
    name_presencial:'Taller presencial ( ¿Qué hay detrás de nuestro consumo? )',
    description_presencial:'El presente taller contempla un enfoque participativo y vivencial, pues su metodología permite profundizar sobre los aspectos individuales que el ser humano tiende a reproducir y habitar con las prácticas de consumo y/o consumismo a nivel social y ambiental, permitiendo analizar y comprender la huella ecológica que se genera en el planeta. A partir de una observación de imágenes y lectura crítica de experiencias se visualiza la problemática ambiental en la que constantemente el ser humano reproduce bajo unos patrones económicos, culturales y sociales.  Para ello se reflexiona que todo lo individual pasa a ser colectivo y político, por lo tanto, es importante proponer desde las organizaciones la construcción de espacios de conciencia ambiental, desde las acciones cotidianas que enmarcan grandes cambios a nivel social. Finalmente, esta metodología permite construir alternativas ante la contaminación ambiental, con hábitos de consumo desacelerados y conscientes como la aplicación de Las R de la sostenibilidad; fomentar la economía circular y local o incluso, adentrarnos a visualizar una coexistencia con otros seres vivos de manera respetuosa y armoniosa (animales, plantas).',
    name_virtual:'Taller virtual ( Evaluó mi huella ecológica )',
    description_virtual:'Medir la huella ecológica es una estrategia que diversas organizaciones ambientales a nivel mundial han implementado para dimensionar la huella de carbono, consumo y demás prácticas que inciden en el equilibrio de la tierra, por lo tanto, en este taller virtual en primera medida se realiza una lectura reflexiva, para tener la motivación y consciencia sobre los pequeños- grandes cambios que el ser humano puede ejercer, y seguidamente se invita a medir la huella ecológica a nivel individual para reconocer los aspectos negativos y positivos que el ser humano produce con sus acciones al planeta desde el uso del transporte, el consumo o la alimentación, etc.',
    name_trans:'',
    description_trans:''
    },
    {
    id:8,
    name:'PERSPECTIVA DE GÉNERO',
    name_presencial:'Taller presencial ( Me pongo las gafas para el reconocimiento de la diversidad )',
    description_presencial:'Este taller surge como una herramienta didáctica para comprender conceptos básicos en torno al género, así como algunas disposiciones normativas para su protección con la finalidad de aportar a la comprensión de las violencias basadas en el género y con ello promover el derecho a una vida libre de violencias. Para su elaboración se revisaron fuentes institucionales, conceptos de autoras feministas latinoamericanas, así como el trabajo de diferentes colectivas de mujeres y diversidades sexuales que investigan este tipo de violencias y medios de comunicación digitales feministas. Debido a que es un taller con un amplio componente conceptual–reflexivo, se han unido los momentos de fundamentación conceptual y los aspectos metodológicos, de tal manera que los momentos de romper el hielo, enganchar y co-crear se vayan desarrollando a medida que se va abordando el tema. Por lo tanto, las actividades propuestas estarán apoyadas por los temas que se encuentran en la conceptualización',
    name_virtual:'Taller virtual ( Mi lente violeta a través del arte )',
    description_virtual:'Este taller surge como una herramienta didáctica que permita comprender conceptos básicos en torno al género, así como algunas disposiciones normativas para su protección con la finalidad de aportar a la comprensión de las violencias basadas en el género y con ello promover el derecho a una vida libre de violencias. Para su elaboración se revisaron fuentes institucionales, conceptos de autoras feministas latinoamericanas, así como el trabajo de diferentes colectivas de mujeres y diversidades sexuales que investigan este tipo de violencias y medios de comunicación digitales feministas.',
    name_trans:'Taller presencial - transversal ( Gestión Menstrual )',
    description_trans:'Este taller es un espacio para difundir educación integral sobre la menstruación, que permita una comprensión sobre lo que históricamente ha sido un tema rodeado de silencio y tabúes. La educación abierta y precisa durante la sesión busca construir un espacio seguro para desmitificar y reducir el estigma asociado al ciclo menstrual, promoviendo el autoconocimiento y la autonomía de las personas menstruantes sobre sus cuerpos. Permitiéndoles tomar decisiones informadas sobre su salud y bienestar. Esto incluye el conocimiento sobre productos menstruales, higiene adecuada y la comprensión de lo que es normal y lo que no durante el ciclo menstrual. Si bien el taller está enfocado más hacia las personas menstruantes, es pertinente involucrar a quienes se interesen independientemente de su género, con el fin de sensibilizar sobre la importancia de la equidad de género y promover una comprensión inclusiva y solidaria de las experiencias menstruales.'
    }
]



export default function LandingPage() {

    // PRELOADER

    let [preloader,setPreloader] =  React.useState(false);
    let [news,setNews] = React.useState([]);
    let [stories,setStories] = React.useState([]);
    let [moduls,setModuls]  = React.useState([]);
    let [selectModul,setSelectModul] = React.useState(null);
    let [partners,setPartners] = React.useState([]);
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
            setPartners(result.data.filter((obj)=>obj.category == "Partner"))
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
                    {/* Start */}
                    <div className='carouselBody' >
                        <div className = 'landingInfoContainer'>
                            <div className={`landingTextContainer fade-in ${isVisible ? '' : 'visible'}`}>
                                    <p className='fontSemiBold textLanding' >Programa de formación orquídeas</p>
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
                    {/* StartModuls */}
                    <div className='dataModulContainerV4'>
                            <div className={`landingImageContainer fade-in ${isVisible ? 'visible' : ''}`}>
                                <img src={LandingBook} width={'350'} height={'350'}></img>
                            </div>
                            <span className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{'marginBottom':'30px',fontSize:'20px','color':'#85558c'}}>¡Bienvenid@s!</span>
                            <div className={`IconBlueContainer fade-in ${isVisible ? 'visible' : ''}`} >
                                    <PiFlowerLotusThin size={40} color='white'></PiFlowerLotusThin>
                            </div>
                            
                            <span className={`lineColor fade-in ${isVisible ? 'visible' : ''}`} style={{marginBottom:'10px'}}></span>
                            <p className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{fontSize:'12px','maxWidth':'500px','textAlign':'center',marginBottom:'60px'}}>El Programa de Formación Orquídeas –PFO– surge como una iniciativa pedagógica que busca reducir comportamientos nocivos en el ámbito organizacional mediante el desarrollo de habilidades y conocimientos en ética.</p>
                            <div className='datainfoContainer' style={{'marginTop':'60px'}}>
                                    
                                    <div className='imageInfoContainer'>
                                        <div className={`landingImageContainer fade-in ${isVisible ? 'visible' : ''}`}>
                                            <img src={LandingFlow} className='imageLanding' width={'200'} height={'200'}></img>
                                        </div>
                                    </div>
                                    <div className='textInfoContainer'>
                                        <span className='fontSemiBold' style={{'color':'#85558c','fontSize':'25px','textAlign':'center'}}>Disfruta e innova en conocimiento</span>
                                        <p className='fontSemiBold' style={{'textAlign':'center','fontSize':'14px'}}>Esta apuesta formativa está diseñada para brindar a comunidades, organizaciones e individuos las herramientas necesarias para enfrentar problemáticas y crisis en entornos colaborativos.  </p>
                                    </div>

                            </div>
                    </div>
                    {/* Relaciones */}
                    <div className='NoticeContainer'>
                        {partners?.length !== 0 ? 
                        <span className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{'marginTop':'30px','color':'#85558c'}}>Conoce algunos de nuestros casos de éxito</span>
                        :
                        <></>
                        }
                        
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            breakpoints={{
                                320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                640: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                                },
                                1440: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                                },
                            }}  
                            >
                            {partners.map((obj,index)=>{
                                return(
                                    <SwiperSlide className='NewsSwiper2'>
                                        <div className='NewsSwiper2'>
                                            <div className='SwiperImage2'>
                                                    <img src={obj?.image} className='ImageLanding'></img>
                                            </div>
                                            <div className='SwiperText'>
                                                    <p className='TitleNews fontSemiBold color-purple'>
                                                        {obj?.title}
                                                    </p>
                                            </div>
                                        </div>
                                        
                                    </SwiperSlide>
                                )
                            })}
                            
                        </Swiper>
                    </div>
                    {/* Moduls */}
                    <div className='containerIconV2'>
                                <div className='containerIconV2' style={{marginTop:'50px'}}>
                                <div className={`IconBlueContainer fade-in ${isVisible ? 'visible' : ''}`} >
                                    <MdAssignmentAdd size={40} color='white'></MdAssignmentAdd>
                                </div>
                                <span className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{'marginTop':'30px'}}>Módulos</span>
                                <span className={`lineColor fade-in ${isVisible ? 'visible' : ''}`} style={{marginBottom:'10px'}}></span>
                                <p className={`fontSemiBold fade-in ${isVisible ? 'visible' : ''}`} style={{fontSize:'12px','maxWidth':'600px','textAlign':'center',marginBottom:'60px'}}>El PFO contempla 8 módulos que abordan temáticas como la corrupción, la gestión de emociones, el reconocimiento de dilemas éticos, el liderazgo al servicio del talento, la perspectiva ambiental, la cultura de la paz, el bienestar para la construcción de espacios armónicos y la perspectiva de género para la eliminación de violencias cotidianas.</p>
                                </div> 
                                <div  style={{width:'100%',maxWidth:'1150px','marginBottom':'60px',}}>
                                    <Slider {...settings}>
                                        <div key={1} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Violeta2} width={'120'} height={'120'}></img>
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
                                                        <img src={Amarillo2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Amarillo</p>
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
                                        <div key={3} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Azul2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Azul</p>
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
                                        <div key={4} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Rojo2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Magenta</p>
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
                                        <div key={5} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Verde2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Verde</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div onClick={()=>{
                                                    setSelectModul(7);
                                                    handleShow2()
                                                    }}  className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={6} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Naranja2} width={'120'} height={'120'}></img>
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
                                                        <img src={Aguamarina2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Aguamarina</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                <div  onClick={()=>{
                                                    setSelectModul(2);
                                                    handleShow2()
                                                    }} className='buttonElement'>
                                                    <span className='white fontLight'>Ver</span>
                                                </div>
                                                </div>
                                            
                                        </div>
                                        <div key={8} className={`LandingModule`}>
                                                <div className={`IconBlueContainerV2 fade-in ${isVisible ? 'visible' : ''}`} >
                                                    <div className='ContainerImage'>
                                                        <img src={Cafe2} width={'120'} height={'120'}></img>
                                                    </div>
                                                </div>
                                                <div className ='DataLandingModule' >
                                                <p className='fontSemiBold' style={{marginTop:'20px'}}>Módulo Café</p>
                                                        <span className='lineColor' style={{marginBottom:'20px'}}></span>
                                                <p className='fontSemiBold' style={{fontSize:'12px','maxWidth':'500px','textAlign':'center'}}>Mira el mundo con nuevos ojos revisa el enfoque del módulo</p>
                                                </div>
                                                <div className='divsContainer'>
                                                    <div onClick={()=>{
                                                        setSelectModul(4);
                                                        handleShow2()
                                                        }} className='buttonElement'>
                                                        <span className='white fontLight'>Ver</span>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </Slider>
                                </div>
                    </div>
                    {/* News */}
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
                                    <SwiperSlide >
                                        <div className='NewsSwiper'>
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
                                            <div className='divsContainer'>
                                                    <div onClick={()=>{
                                                        window.open(obj?.LINK, '_blank');
                                                    }}  className='buttonElement'>
                                                        <span className='white fontLight'> Ver mas</span>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                    </SwiperSlide>
                                )
                            })}
                            
                            
                        </Swiper>
                    </div>
                    {/* Stories */}
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
                                        <div className='NewsSwiper'>
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
                                            <div className='divsContainer'>
                                                    <div onClick={()=>{
                                                        window.open(obj?.LINK, '_blank');
                                                    }}  className='buttonElement'>
                                                        <span className='white fontLight'> Ver mas</span>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    {/* Footer */}
                    <div className='Footer'>
                        <div onClick={()=>notify('Comunicate al email contact@formacionorquideas.com')} className='SocialContainer'>
                                <BiLogoGmail size={25}></BiLogoGmail>
                        </div>
                        <div onClick={()=>notify('Contactanos al 3014435952')} className='SocialContainer'>
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
                <div className='container-fluid pt-0 pb-0'>
                <div className='dataModulContainer'>
                <div className='DataInfoModulContainer' style={{'backgroundColor':FilterModul()?.color}}>
                        <div className='ContainerImageModul_2'>
                                                    {selectModul == 1 ?
                                                    <img src={Azul} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 2 ?
                                                    <img src={Aguamarina} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 3 ?
                                                    <img src={Amarillo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 4 ?
                                                    <img src={Cafe} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 5 ?
                                                    <img src={Rojo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 6 ?
                                                    <img src={Naranja} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 7 ?
                                                    <img src={Verde} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {selectModul == 8 ?
                                                    <img src={Violeta} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }
                        </div>
                        <div className='ContainerInfoModul2'>
                                <span className='fontSemiBold color-purple' style={{'fontSize':'30px'}}>{'Objetivo General'}</span>
                                <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>{''}</span>
                                <p className='fontLight description_moduls' dangerouslySetInnerHTML={{ __html: FilterModul()?.general_objective.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />
                        </div>
                </div>
                
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Objetivos especificos</span>
                <div className='listInstitucions' style={{'marginTop':'30px'}}>
                                      {FilterModul()?.specific_objectives.map((obj,index)=>{
                                        return(
                                          <div key={index} className='ListData'>
                                                <div className='col-auto'>
                                                <CiBookmark />
                                                </div>
                                                <span className='fontLight'>{obj?.description}</span>
                                          </div>
                                        )
                                      })
                                      }
                                      
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Skills (Habilidades)</span>
                <div className='listInstitucions' style={{'marginTop':'30px'}}>
                                      {FilterModul()?.skills_and_learnings.map((obj,index)=>{
                                        return(
                                          <div key={index} className='ListData'>
                                                <div className='col-auto'>
                                                <CiBookmark />
                                                </div>
                                                <span className='fontLight'>{obj?.description}</span>
                                          </div>
                                        )
                                      })
                                      }
                                      
                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>{DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.name_presencial}</span>
                <div className=''>
                    
                    <p style={{'marginTop':'20px','backgroundColor':FilterModul()?.color,'padding':'5px'}} className='fontLight description_moduls' dangerouslySetInnerHTML={{ __html: DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.description_presencial.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />

                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>{DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.name_virtual}</span>
                <div className=''>
                    
                    <p style={{'marginTop':'20px','backgroundColor':FilterModul()?.color,'padding':'5px'}} className='fontLight description_moduls' dangerouslySetInnerHTML={{ __html: DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.description_virtual.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />

                </div>
                <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>{DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.name_trans}</span>
                <div className=''>
                    
                    <p style={{'marginTop':'20px','backgroundColor':FilterModul()?.color,'padding':'5px'}} className='fontLight description_moduls' dangerouslySetInnerHTML={{ __html: DataModuls.filter((obj)=> obj?.id == FilterModul()?.id)[0]?.description_trans.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />

                </div>
        </div>
                </div>
                </div>
        </Offcanvas>
        </>
        
    )
}
