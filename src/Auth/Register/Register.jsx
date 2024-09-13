import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated';
import DatePicker from "react-multi-date-picker";
import Swal from 'sweetalert2';
import Preloader from '../../Components/Shared/Preloader/Preloader';
import { GetInstitutions, UpdateInstitution } from '../../Services/Institutions/Institutions';
import { RegisterUser } from '../../Services/Users/Users';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

/**
* MENSAJES PERSONALIZADOS AL BUSCAR O CARGAR OPCIONES EN REACT SELECT
**/


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


export default function Register() {

    const navigate=useNavigate();

    let [userInfo,setUserInfo] = React.useState(
      {
        "email":"",
        "name":"",
        "identification":"",
        "password":"",
        "same_password":""
      }
    )

    let [institutions,setInstitutions] = React.useState([]);
    let [preloader,setPreloader] = React.useState(false);
    let [institution,setInstitution] = React.useState("");


    React.useEffect(()=>{
        // LOAD INSTITUTIONS
        LoadInstitutions();
    },[])

    let LoadInstitutions=async()=>{

      let result =  undefined;
      setPreloader(true);
      result = await GetInstitutions().catch((error)=>{
        console.log(error);
        setPreloader(false);
        Swal.fire({
          icon: 'info',
          title: 'Problemas para cargar las instituciones'
        })
      })

      if(result){
        console.log("INSTITUCIONES: ",result.data);
        setPreloader(false);
        setInstitutions(result.data.map((obj,index)=>{
          return(
            {...obj,['label']:obj?.name,['value']:obj?.id}
          )
        }))
      }

    }

    const ReadInput=(event,type)=>{

      setUserInfo({...userInfo,[type]:event.target.value})

    }

    const ReadSelect=(event)=>{

      setInstitution(event.target.value);

    }

    const GenerateRegister=async()=>{

      console.log("USUARIO A REGISTRAR: ",userInfo,institution)

      // PRIMERO VALIDAMOS QUE LA INSTITUCIÓN NO SEA ORQUIDEAS
      if (institution == ''){

        Swal.fire({
          icon: 'info',
          title: 'Debes ingresar el código unico de tu institución solicitala a los administradores de la plataforma'
        })
        
      }else if(institutions.filter((obj=> (obj.id+'') == (institution+'') ) ).length == 0  ){

        Swal.fire({
          icon: 'info',
          title: 'El código suministrado de la institución no es valido'
        })

      }else if(userInfo?.email == "" || userInfo?.identification == "" || userInfo?.name == "" || userInfo?.password == "" || userInfo?.same_password == "" ){

        //TODOS LOS CAMPOS SON OBLIGATORIOS
        Swal.fire({
          icon: 'info',
          title: 'Completa todos los campos para realizar el registro'
        })

      }else{
        

        // seteamos la institución
        let Insti = institutions.filter((obj=> (obj.id+'') == (institution+'') ) )[0]
        // REVISAMOS QUE LAS CONTRASEÑAS COINCIDAN
        // REVISAMOS LA CONTRASEÑA
        if (userInfo?.password !== userInfo?.same_password){

            Swal.fire({
              icon: 'info',
              title: 'Las contraseñas no coinciden valida tu información'
            })

        }else{

            // REALIZAMOS EL REGISTRO
            let result =  undefined;
            setPreloader(true);
            result =  await RegisterUser({'email':userInfo['email'],'first_name':userInfo['identification'],'last_name':userInfo['name'],'password':userInfo['password'],'role':2}).catch((error)=>{
              console.log(error);
              if(error?.response?.data?.email?.length !== 0 ){
                setPreloader(false);
                Swal.fire({
                  icon: 'info',
                  title: 'El correo ya se encuentra en uso, no es posible crear una cuenta con dicho email'
                })
              }else{
                setPreloader(false);
                Swal.fire({
                  icon: 'info',
                  title: 'Error al generar el registro'
                })
              }
              
            })

            if(result){
              
                console.log("USUARIO REGISTRADO: ",result.data);
                // ACTUALIZAMOS LAS CARACTERISTICAS DE LA INSTITUCIÓN AGREGANDO EL ID DEL NUEVO USUARIO
                if(result.data.id){
                  
                  let users = [...Insti['users']];
                  users.push(result.data.id) // AGREGAMOS EL ID DEL USUARIO
                  let answer =  await UpdateInstitution({...Insti,['users']:users}).catch((error)=>{
                    console.log(error);
                    setPreloader(false);
                    Swal.fire({
                      icon: 'info',
                      title: 'Error al completar registro 2'
                    })
                  })
                  if(answer){
                    console.log("actualizado: ",answer.data);
                    setPreloader(false);
                    Swal.fire({
                      icon: 'success',
                      title: 'El registro fue éxitoso'
                    }).then(
                      (response)=>{
                        if(response?.isConfirmed){
                          navigate('/Auth/AuthLogin')
                        }else{
                          navigate('/Auth/AuthLogin')
                        }
                      }
                    )

                  }
                  
                }else{
                  setPreloader(false);
                  Swal.fire({
                    icon: 'info',
                    title: 'El usuario fue creado, pero no se pudo vincular a la institución respectiva',
                    text:'Pidele al lider de la plataforma que te vincule manualmente en el panel de administración'
                  })
                }
                
                
            }
          
        }
        
        
      }
          
    }

    // USE STATES PASSWORDS

    let [pass,setPass] =  React.useState(true);
    let [pass2,setPass2] =  React.useState(true);

    const SeePassword=()=>{
      setPass(false);
      const input = document.querySelector("#passwordV1");
      // When an input is checked, or whatever...
      input.setAttribute("type", "text");
    }

    const HidePassword=()=>{
      setPass(true);
      const input = document.querySelector("#passwordV1");
      // When an input is checked, or whatever...
      input.setAttribute("type", "password");
    }

    const SeePassword2=()=>{
      setPass2(false);
      const input = document.querySelector("#passwordV2");
      // When an input is checked, or whatever...
      input.setAttribute("type", "text");
    }

    const HidePassword2=()=>{
      setPass2(true);
      const input = document.querySelector("#passwordV2");
      // When an input is checked, or whatever...
      input.setAttribute("type", "password");
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
                  <span className='fontSemiBold title_2' >Crear Cuenta</span>
                  <form action='' className='Form'>
                          <span className='fs-10- fontLight' >Email</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                          <div className='col-12'>
                              <div className='form-floating inner-addon- left-addon-'>
                              <input type="text" value={userInfo?.email} onChange={(event)=>ReadInput(event,'email')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                              </div>
                          </div>
                          </div>
                          <span className='fs-10- fontLight' >Nombre</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                              <div className='col-12'>
                                  <div className='form-floating inner-addon- left-addon-'>
                                  <input type="text" value={userInfo?.name} onChange={(event)=>ReadInput(event,'name')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                                  </div>
                              </div>
                          </div>
                          <span className='fs-10- fontLight' >Identificación</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                              <div className='col-12'>
                                  <div className='form-floating inner-addon- left-addon-'>
                                  <input type="text" value={userInfo?.identification} onChange={(event)=>ReadInput(event,'identification')} className='form-control' id='user' placeholder="Ingrese su usuario" />
                                  </div>
                              </div>
                          </div>
                          
                          <span className='fs-10- fontLight'>Contraseña</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                          <div className='col-12'>
                              <div className='form-floating inner-addon- right-addon-'>
                              <input type="password" value={userInfo?.password} onChange={(event)=>ReadInput(event,'password')}  className='form-control' id='passwordV1' placeholder="Ingrese su contraseña" />
                              </div>
                              {
                                pass ? 
                                <IoEyeOutline onClick={SeePassword} className='LockPassword' ></IoEyeOutline>
                                :
                                <IoEyeOffOutline onClick={HidePassword} className='LockPassword'></IoEyeOffOutline>
                              }
                              
                          </div>
                          </div>
                          <span className='fs-10- fontLight'>Repite la contraseña</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                          <div className='col-12'>
                              <div className='form-floating inner-addon- right-addon-'>
                              <input type="password" value={userInfo?.same_password} onChange={(event)=>ReadInput(event,'same_password')}  className='form-control' id='passwordV2' placeholder="Repite la contraseña" />
                              </div>

                              {
                                pass2 ? 
                                <IoEyeOutline onClick={SeePassword2} className='LockPassword' ></IoEyeOutline>
                                :
                                <IoEyeOffOutline onClick={HidePassword2} className='LockPassword'></IoEyeOffOutline>
                              }
                          </div>
                          </div>
                          <span className='fs-10- fontLight' >Identificador institución</span>
                          <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                              <div className='col-12'>
                                  <div className='form-floating inner-addon- left-addon-'>
                                  <input type="number" value={institution} onChange={ReadSelect} className='form-control' id='user' placeholder="Ingrese el identificador de su institución" />
                                  </div>
                              </div>
                          </div>
                          <div className='ContainerButton_2'>
                              <div onClick={GenerateRegister} className='Button_2' style={{'marginTop':'20px'}}>
                                          <span className='text_button_2'>Registrar</span>
                              </div>
                              <span onClick={()=>navigate('/Auth/AuthLogin')} className='fs-10- fontLight textStyle-2' >Volver</span>
                          </div>
                  </form>
          </div>
    )
}
