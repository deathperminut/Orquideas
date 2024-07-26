import React from 'react';
import './NewsModul.css';
import { FaRegEdit } from "react-icons/fa";
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import Flores from '../../../../assets/images/circleVioleta.png';
import { CiCircleCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import * as echarts from 'echarts';
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import $ from "jquery"

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

export default function NewsModul() {

    const [show1, setShow1] = React.useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);



    return (
        <>
            <div className='dataModulContainer'>
                <div className='ContainerNameModul'>
                    <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>Agregar noticia</p>
                    <div className='ButtonEditModul bs-2-' onClick={handleShow2}>
                    <FaRegPlusSquare size={20}/>
                    </div>
                </div>
                
                <div className='FormContainer'>
                        <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'width':'100%'}}>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                            <span className='fs-10- fontLight'>Buscar por título</span>
                                <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                                <div className='col-12'>
                                    <div className='form-floating inner-addon- right-addon-'>
                                    <input type="text" className='form-control' id='password' placeholder="" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='TableUsersContainer bs-2-'>
                    <div className='row mt-4 mb-4'>
                            <div className='table-responsive table-general-'>
                            <table className='table table-sm table-striped table-no-border- align-middle'>
                            <thead>
                                <tr>
                                    <th scope="col" className='th-width-md-'>
                                    <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold color-purple'>Título</span>
                                    </div>
                                    </th>
                                    <th scope="col" className='th-width-sm-'>
                                    <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold color-purple'>Fecha de registro</span>
                                    </div>
                                    </th>
                                    <th scope="col" className='th-width-sm-'>
                                    <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold color-purple'>Editar</span>
                                    </div>
                                    </th>
                                    <th scope="col" className='th-width-sm-'>
                                    <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold color-purple'>Eliminar</span>
                                    </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>Descuentos módulo violeta</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>2024-08-26</p>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button onClick={handleShow2} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <FaRegEdit />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                            <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                                <div className='col-auto'>
                                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                        <MdOutlineDelete />
                                                </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </div> 
                </div>
            </div>
            <Offcanvas className="offcanvasBodyV2" show={show2} onHide={handleClose2}>
                    <div className='offcanvas-header pb-4 padding-40-'>
                        <h2 className='m-0 p-0 lh-sm fs-4-  fw-bold fontSemiBold color-purple'>Nueva noticia</h2>
                        <IoIosClose style={{'cursor':'pointer'}} onClick={handleClose2} size={30} className='fa icon-close'></IoIosClose>
                    </div>
                    <div className='offcanvas-body '>
                        <div className='container-fluid pt-0 pb-0 padding-40-'>
                            <div className='row'>
                            <div className='col-12'>
                                <form action='' className='Form'>
                                    <span className='fs-10- fontLight' >Titulo</span>
                                    <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                                    <div className='col-12'>
                                        <div className='form-floating inner-addon- left-addon-'>
                                        <input type="text" className='form-control' id='user' placeholder="Ingrese su usuario" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className='ContainerButton_2'>
                                        <div className='Button_2' style={{'marginTop':'20px'}}>
                                                    <span className='text_button_2'>Crear</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
            </Offcanvas>
        </>
    )
}
