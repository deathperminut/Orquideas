import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import './Profile.css';
import $ from 'jquery';
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from "react-multi-date-picker"
import Flores from '../../../assets/images/circleVioleta.png';
import { AppContext } from '../../../Context';
import Swal from 'sweetalert2';
import Preloader from '../../../Components/Shared/Preloader/Preloader';
import { UpdateUser } from '../../../Services/Users/Users';
import Violeta from '../../../assets/images/Violeta2.png';
import Azul from '../../../assets/images/Azul22.png';
import Rojo from '../../../assets/images/Magenta22.png';
import Verde from '../../../assets/images/Verde2.png';
import Naranja from '../../../assets/images/Naranja2.png';
import Amarillo from '../../../assets/images/Amarillo2.png';
import Cafe from '../../../assets/images/Cafe22.png';
import Aguamarina from '../../../assets/images/AguaMarina2.png';

/**
 * MENSAJES PERSONALIZADOS AL BUSCAR O CARGAR OPCIONES EN REACT SELECT
 */

const { NoOptionsMessage } = components;

const customNoOptionsMessage = props => (
  <NoOptionsMessage {...props} className="custom-no-options-message-auth-form-">No registrado</NoOptionsMessage>
);

const { LoadingMessage } = components;

const customLoadingMessage = props => (
  <LoadingMessage {...props} className="custom-loading-message-auth-form-">Cargando</LoadingMessage>
);

/**
 * ANIMATE DELETE MULTISELECT
 */

const animatedComponents = makeAnimated();

/**
 * Se genera componente nuevo para soportar el placeholder animado del input 
 */

const { ValueContainer, Placeholder } = components;

const CustomValueContainer = ({ children, ...props }) => {
  const { inputId, placeholder } = props.selectProps;
  return (
    <ValueContainer {...props}>
      <Placeholder htmlFor={inputId} {...props}>
        {placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};


const selectStyles = {
    /**
     * Estilos del icono del dropdown del select
     * Estilos del separador del select
     * Estilos del icono de cerrar del select
     */
    dropdownIndicator: (styles) => ({ ...styles, 
      color: "#000", 
      padding: 0, 
      paddingTop: '0.14rem !important', 
      paddingRight: '0.4rem !important',
      width: '25px',
      height: '25px',
      "&:hover": {
        color: "#000",
      }  
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    clearIndicator: (styles) => ({ ...styles, 
      color: "#000", 
      padding: 0, 
      paddingTop: '0.05rem !important',
      width: '15px',
      height: '15px',
      "&:hover": {
        color: "#000",
      } 
    }),
    /**
     * Estilos del input global
     */
    control: () => ({
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      alignSelf: "start",
      justifyContent: "start",
      height: 'auto',
      minHeight: 50,
      maxHeight: 150,
      borderBottom: "1px solid #E2E2E2",
      paddingLeft: '2.1rem',
      paddingTop: '0.3rem',
      width: "100%",
      borderRadius: 0,
      
    }),
    /**
    * EESTILOS DEL INPUT
    */
    input: (provided) => ({
    ...provided,
    color: "#000",
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'Light',
    }),
    /**
     * Estilos del menu desplegable del select
     */
    menu: (styles) => ({
      ...styles,
      border: 'none',
      backgroundColor: '#E2E2E2',
      boxShadow: 'var(--box-shadow-6-)',
      borderRadius: '0.8rem',
      padding: 0,
      marginTop: 8,
      marginBottom: 0,
      height: 'auto',
      minHeight: 'auto',
      maxHeight: 300,
      overflow: "hidden",
      color: '#000',
      fontSize: 12,
      textTransform: 'uppercase',
      fontFamily: 'Light',
    }),
    menuList: () => ({
      paddingTop: 0,
      paddingBottom: 0,
      height: 'auto',
      minHeight: 'auto',
      maxHeight: 300,
      overflow: "auto",
      "::-webkit-scrollbar": {
        width: "0px !important",
        height: "0px !important",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent !important"
      },
      "::-webkit-scrollbar-thumb": {
        background: "transparent !important"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "transparent !important"
      }
    }),
    /**
     * Estilos de las opciones desplegables
     */
    option: (provided, state) => ({
      ...provided,
      fontSize: 11,
      backgroundColor: state.isSelected ? "#37145278" : "#E2E2E2",
      fontFamily: 'Light',
      padding: '0.5rem 0.8rem 0.5rem 0.8rem',
      borderRadius: '0.8rem',
      ":hover": {
        background: "#37145278",
        color: 'var(--color-white-)',
      }
    }),
    /**
     * Estilos del contenedor
     */
    container: (provided, state) => ({
      ...provided,
      marginTop: 0,
      width: '100%',
      position: 'relative',
      flex: '1 1 auto'
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      overflow: "visible"
    }),
    /**
     * Estilos placeholder del input
     */
    placeholder: (provided, state) => ({
      ...provided,
      width: '100%',
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? -15 : "32%",
      left: state.hasValue || state.selectProps.inputValue ? -32 : "0%",
      transition: "top 0.1s, font-size 0.1s",
      color:'#000',
      fontSize: state.hasValue || state.selectProps.inputValue ? 13 : "14px",
      lineHeight: 1.25,
      fontFamily: 'Light',
      opacity:'0',
      overflow: 'hidden',
      textAlign: 'start',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }),
    /**
     * Estilos texto en el input
     */
    singleValue: (styles) => ({ 
      ...styles, 
      fontSize: 12,
      color: "#000", 
      fontFamily: 'Light', 
      paddingTop: '0.3rem',
      marginLeft: 0,
      marginRight: 0
    }),
    multiValue: (styles) => ({ 
      ...styles, 
      backgroundColor: 'var(--color-secondary-white-rgba-)',
      boxShadow: 'var(--box-shadow-2-)',
      borderRadius: '0.5rem',
      alignItems: 'center',
      alignSelf: 'center',
    }),
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      fontFamily: 'Light',
      fontSize: 12,
      textTransform: 'uppercase',
      color: 'var(--color-quaternary-gray-)',
      paddingLeft: '0.5rem',
      paddingRight: '0.6rem',
      paddingBottom: '0.3rem'
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      borderRadius: '6rem',
      paddingLeft: '6px',
      width: '26px',
      height: '26px',
      color: 'var(--color-black-)',
      backgroundColor: 'var(--color-secondary-gray-)',
      ':hover': {
        color: 'var(--color-white-)',
        backgroundColor: 'var(--color-secondary-purple-)',
      }
    })
  }

const options = [
{ value: "Institucion 1", label: "Institucion 1" },
{ value: "Institucion 2", label: "Institucion 2" },
{ value: "Institucion 3", label: "Institucion 3" },
{ value: "Institucion 4", label: "Institucion 4" }
];

export default function Profile() {
    
    // AppContext
    let {userData,setUserData,roles,setRoles,moduls,setModuls,institution,setInstitution,cleanContext} =  React.useContext(AppContext);
    // use States
    let [preloader,setPreloader] = React.useState(false);
    let [data,setData] = React.useState({
      'email':userData.email,
      'first_name':userData.first_name,
      'last_name':userData.last_name,
      'role':userData?.role,
      'password':userData?.password
    });

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
    
    const ReadInput=(event,target)=>{
      setData({...data,[target]:event.target.value});
    }

    const GetIns=()=>{
      let filter_ = institution.filter((obj)=> obj.users.includes(userData?.id))
      return filter_[0]
    }

    const UpdateAccount=async()=>{
      // update Account
      // verificamos que no haya campos vacios
      if(data?.email == "" || data?.first_name == "" || data?.last_name == "" || data?.password ==""){
        Swal.fire({
          icon: 'info',
          title: 'No puedes dejar ningun campo vacio'
        })
      }else{ 
        
        let result = undefined;
        setPreloader(true);
        result =  await UpdateUser(data,userData?.id).catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
            icon: 'info',
            title: 'Problemas para actualizar el usuario'
          })
        })
        if(result){
          setPreloader(false);
          console.log("datos usuario: ",result.data);
          // seteamos la variable de userData
          setUserData({...userData,['email']:result.data.email,['first_name']:result.data.first_name,['last_name']:result.data.last_name})
          Swal.fire({
            icon: 'success',
            title: 'Actualizado con éxito'
          })
        }
      }
    }

    const ObtainModulInstitution=()=>{

      let insti =  GetIns();
      console.log("INSTITUCIÓN SELECCIONADA: ",insti)
      let moduls_ = insti.allowed_modules
      console.log("ALLOWED SELECCIONADA: ",moduls_)
      if(moduls_.length !== 0){

        let modulId =  moduls_[0];

        console.log("ALLOWED dSELECCIONADA: ",moduls,)
        return moduls.filter((obj)=> obj.id == modulId)[0];

      }else{
        return null
      }
      

    }

    return (
        <React.Fragment>
          {
                          preloader ?
                          <>
                          <Preloader></Preloader>
                          </>
                          :

                          <></>
          }
          <div className='container-fluid overflow-x-hidden'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='m-0 p-0 lh-sm fs-3- fontSemiBold color-purple'>Perfil</h2>
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
              <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                  <div className='container-fluid overflow-x-hidden p-0'>
                    <div className='row g-4 mt-3'>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4'>
                        <div id="card-appointment" className='card border-0 rounded-3 w-100 position-relative bs-2-'>
                          <div className='card-header border-0 rounded-3'>
                            <div className='row'>
                              <div className='col-12'>
                                <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                                  <li className='nav-item' role="presentation">
                                    <button className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="requests-tab" data-bs-toggle="pill" data-bs-target="#requests" type="button" role="tab" aria-controls="requests" aria-selected="true"> <span className='fontSemiBold color-purple me-2'>Editar</span></button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='ContainerFormProfile'>
                            <form action='' className='Form'>
                                <span className='fs-10- fontLight' >Email</span>
                                <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                                <div className='col-12'>
                                    <div className='form-floating inner-addon- left-addon-'>
                                    <input type="text" value={data?.email} onChange={(event)=>ReadInput(event,'email')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                                    </div>
                                </div>
                                </div>
                                <span className='fs-10- fontLight' >Nombre</span>
                                <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                                    <div className='col-12'>
                                        <div className='form-floating inner-addon- left-addon-'>
                                        <input type="text" value={data?.last_name} onChange={(event)=>ReadInput(event,'last_name')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                                        </div>
                                    </div>
                                </div>
                                <span className='fs-10- fontLight' >Identificación</span>
                                <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                                    <div className='col-12'>
                                        <div className='form-floating inner-addon- left-addon-'>
                                        <input type="text" value={data?.first_name} onChange={(event)=>ReadInput(event,'first_name')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <span className='fs-10- fontLight' >Institución</span>
                                <div className='inner-addon- left-addon-'>
                                    <Select isDisabled={true} options={[]} value={{'value':GetIns().name,label:GetIns()?.name}}  components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="" styles={selectStyles}/>
                                </div>
                                <div  className='ContainerButton_2'>
                                    <div onClick={UpdateAccount} className='Button_2' style={{'marginTop':'20px'}}>
                                                <span className='text_button_2'>Actualizar</span>
                                    </div>
                                </div>
                            </form>
                          </div>
                        </div>
                      </div>


                      <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8'>
                        <div id="card-view" className='card border-0 rounded-3 w-100 bs-2-'>
                          <div className='card-body w-100 min-h-'>
                            <div className='container-fluid'>
                              <div className='row mt-4 mb-4'>
                                <div className='col-12'>
                                        <div className='lastModuleContainer'>
                                                  <div className='ContainerImageModul'>
                                                    {ObtainModulInstitution()?.id == 1 ?
                                                    <img src={Amarillo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 2 ?
                                                    <img src={Cafe} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 3 ?
                                                    <img src={Azul} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 4 ?
                                                    <img src={Rojo} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 5 ?
                                                    <img src={Verde} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 6 ?
                                                    <img src={Naranja} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 7 ?
                                                    <img src={Aguamarina} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }

                                                    {ObtainModulInstitution()?.id == 8 ?
                                                    <img src={Violeta} className='card-img' alt="" />
                                                    :
                                                    <></>
                                                    }
                                                  </div>
                                                  <div className='ContainerInfoModul'>
                                                          <span className='fontSemiBold' style={{'fontSize':'30px'}}>{ObtainModulInstitution()?.title}</span>
                                                          <p className='fontLight description_moduls'>{ObtainModulInstitution()?.description}</p>
                                                  </div>
                                        </div>
                                        <div className='classroomContainer'>
                                                  {/* <div className='divClass bs-2-'>
                                                            <div className='TextContainerClass'>
                                                                    <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Bienvenido al inicio del módulo!</span>
                                                                    <span className='fontLight dateClass' style={{'textAlign':'center'}}>Publicado el 11 de marzo de 2024</span>
                                                            </div>
                                                  </div> */}
                                                  <div className='ContainerButton' >
                                                    <div className='Button_1' >
                                                                <span className='text_button_1'>Ver</span>
                                                    </div>
                                                  </div>
                                                  
                                        </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}
