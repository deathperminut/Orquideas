import React from 'react';
import './IndexModuls.css';
import { FaRegEdit } from "react-icons/fa";
import Select, { components } from 'react-select';
import { AiOutlineFileExcel } from "react-icons/ai";
import makeAnimated from 'react-select/animated';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaRegPlusSquare } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import Flores from '../../../../assets/images/circleVioleta.png';
import { CiCircleCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { ImEnter } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";
import * as echarts from 'echarts';
import { FaRegEye } from "react-icons/fa";
import $ from "jquery"
import { AppContext } from '../../../../Context';
import Swal from 'sweetalert2';
import Preloader from '../../../../Components/Shared/Preloader/Preloader';
import { GetInstitutions, UpdateInstitution } from '../../../../Services/Institutions/Institutions';


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



export default function IndexModuls(props) {
    
    // REACT USE CONTEXT
    let {usersHistorial,setUsersHistorial,userData,selectModulInstiAdmin,setSelectModulInstiAdmin,selectModulAdmin,setInstitution,institution} = React.useContext(AppContext);

    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    let [data,setData] = React.useState(null);
    let [preloader,setPreloader] = React.useState(false);
    let [lista_modulo,setLista_modulo] =React.useState([]);
    let [filter,setFilter] = React.useState("");
    let [selectUser,setSelectUser] = React.useState(null);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    
    const GetInsti=(idUser)=>{
      let filter_ = institution.filter((obj)=> obj.users.includes(idUser))
      return filter_[0]
    }

    function esperar(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function scrollToBottom() {
      // HACEMOS UNA ESPERA DE UNOS CUANTOS SEGUNDOS
      await esperar(2000); // Espera 2 segundos
      var container = document.getElementById("BodyContainerV2");
      if (container?.scrollHeight) {
        container.scrollTo({
          top: container.scrollHeight - container.clientHeight,
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    }

    let [supportList,setSupportList] = React.useState([]);

    React.useEffect(()=>{
      setFilter("");
      setSelectUser(null);
      setLista_modulo(usersHistorial.filter((obj,index)=>obj?.module_name == selectModulAdmin?.module_name))
      setSupportList(usersHistorial.filter((obj,index)=>obj?.module_name == selectModulAdmin?.module_name))
      
    },[usersHistorial,selectModulAdmin])

    

    let ReadInput = (event) =>{
      
      if(event.target.value == ""){
        setFilter("");
        setSupportList(usersHistorial.filter((obj,index)=>obj?.module_name == selectModulAdmin?.module_name))
      }else{
        setFilter(event.target.value);
        let lista_original = usersHistorial.filter((obj,index)=>obj?.module_name == selectModulAdmin?.module_name)
        setSupportList(lista_original.filter((obj)=> GetUserData(obj).first_name.toLowerCase().includes(event.target.value.toLowerCase()) || GetUserData(obj).last_name.toLowerCase().includes(event.target.value.toLowerCase()) ));
      }
      
      
    }



    const [showOverlay, setShowOverlay] = React.useState(false);
    const [hiddenOverlay, setHiddenOverlay] = React.useState(true);

    const toggleOverlay = (cardId) => {
        setShowOverlay(cardId);
        setHiddenOverlay(false);
    };


    // React.useEffect(()=>{
    // /**
    //  * GRAFICA MEDICAL HISTORY 1 (PIE CHART)
    //  */

    // let chartMedicalHistoryOne = echarts.init(document.getElementById('chart-medical-history-one-'));
    // let optionMedicalHistoryOne;

    // optionMedicalHistoryOne = {
    //   tooltip: {
    //     trigger: 'item',
    //     showDelay: 0,
    //     transitionDuration: 0.2,
    //     backgroundColor: 'rgba(255, 255, 255, 1)',
    //     borderWidth: 1,
    //     borderColor: '#FAFAFA',
    //     padding: 5,
    //     textStyle: {
    //       color: '#414D55',
    //       fontSize: 12,
    //       lineHeight:10,
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular'
    //     },
    //     extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
    //   },
    //   legend: {
    //     type: 'scroll',
    //     orient: 'horizontal',
    //     left: 'center',
    //     top: 10,
    //     bottom: 20,
    //     itemGap : 25,
    //     width: '90%',
    //     inactiveColor: '#728998',
    //     textStyle: {
    //       color: '#414D55',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular, Verdana',
    //     },
    //     pageIconSize: 12,
    //     pageIconColor: '#6149CD',
    //     pageIconInactiveColor: '#414D55',
    //     pageTextStyle: {
    //       color: '#414D55',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular, Verdana',
    //     },
    //     formatter : function(params, value){
    //       var newParamsName = "";
    //       var paramsNameNumber = params.length;
    //       var provideNumber = 50;
    //       var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    //       if (paramsNameNumber > provideNumber) {
    //           for (var p = 0; p < rowNumber; p++) {
    //             var tempStr = "";
    //             if (p === rowNumber - 1) {
    //                 tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
    //             } else {}
    //             newParamsName += tempStr;
    //           }
    //       } else {
    //           newParamsName = params;
    //       }
    //       return newParamsName
    //     },
    //   },
    //   toolbox: {
    //     show: true,
    //     orient: 'horizontal',
    //     showTitle: false,
    //     feature: {
    //       restore: {show: false},
    //       saveAsImage: {
    //         type: 'png',
    //         name: 'Género',
    //         backgroundColor: '#FAFAFA',
    //         show: true,
    //         iconStyle: {
    //           borderColor: '#414D55'
    //         },
    //         emphasis: {
    //           iconStyle: {
    //             borderColor: '#414D55'
    //           },
    //         }
    //       }
    //     },
    //     iconStyle: {
    //       borderColor: '#414D55'
    //     },
    //     emphasis: {
    //       iconStyle: {
    //         borderColor: '#414D55'
    //       },
    //     },
    //     bottom: 0,
    //     pixelRatio: 2,
    //   },
    //   series: [
    //     {
    //       type: 'pie',
    //       radius: ['30%', '70%'],
    //       center: ['50%', '50%'],
    //       roseType: 'area',
    //       hoverOffset: 12,
    //       top: 15,
    //       label: {
    //         show: false,
    //         position: 'center',
    //         normal: {
    //           show: true,
    //           color: '#414D55',
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         }
    //       },
    //       emphasis: {
    //         label: {
    //           show: true,
    //           color: '#414D55',
    //           fontSize: 14,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular',
    //           formatter: "({d}%)",
    //         },
    //         show: true,
    //         color: '#414D55',
    //         fontSize: 12,
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       },
    //       lableLine: {
    //         normal: {
    //           show: false,
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         },
    //         emphasis: {
    //           show: true,
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         }
    //       },
    //       itemStyle: {
    //         borderRadius: 8,
    //         normal: {
    //           opacity: 1,
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0
    //         }
    //       },
    //       data: [
    //         {value: 40, name: 'Completado', itemStyle: { color: '#30E7C9' }},
    //         {value: 38, name: 'Pendiente', itemStyle: { color: '#6149CD' }},
    //       ],
    //       animationDelay: function (idx) {
    //         return idx * 15;
    //       }
    //     }
    //   ],
    //   animationEasing: 'elasticOut',
    //   animationDelayUpdate: function (idx) {
    //     return idx * 5;
    //   }
    // };

    // optionMedicalHistoryOne && chartMedicalHistoryOne.setOption(optionMedicalHistoryOne);

    // $(window).on('resize', function(){
    //   if(chartMedicalHistoryOne != null && chartMedicalHistoryOne !== undefined){
    //     chartMedicalHistoryOne.resize();
    //   }
    // });


    // /**
    //  * GRAFICA MEDICAL HISTORY 2 (BAR CHART)
    //  */

    // let chartMedicalHistoryThree = echarts.init(document.getElementById('chart-medical-history-two-'));
    // let optionMedicalHistoryThree;

    // const dataMedicalHistoryThree = [
    //   { valueOne: 'Empresa 1', valueTwo: 120, valueThree: 30},
    //   { valueOne: 'Empresa 2', valueTwo: 90, valueThree: 20,},
    //   { valueOne: 'Empresa 3', valueTwo: 60, valueThree: 8 ,},
    //   { valueOne: 'Empresa 4', valueTwo: 80, valueThree: 15,},
    //   { valueOne: 'Empresa 5', valueTwo: 100, valueThree: 25,},
    //   { valueOne: 'Empresa 6', valueTwo: 110, valueThree: 22,},
    //   { valueOne: 'Empresa 7', valueTwo: 70, valueThree: 13,},
    //   { valueOne: 'Empresa 8', valueTwo: 50, valueThree: 10,},
    //   { valueOne: 'Empresa 9', valueTwo: 68, valueThree: 12,},
    //   { valueOne: 'Empresa 10', valueTwo: 26, valueThree: 5 ,},
    //   { valueOne: 'Empresa 11', valueTwo: 45, valueThree: 18,},
    //   { valueOne: 'Empresa 12', valueTwo: 34, valueThree: 11,}
    // ];

    // optionMedicalHistoryThree = {
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       type: 'cross',
    //       label: {
    //         backgroundColor: '#FAFAFA',
    //         color: '#040E29',
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       }
    //     },
    //     showDelay: 0,
    //     transitionDuration: 0.2,
    //     backgroundColor: 'rgba(255, 255, 255, 1)',
    //     borderWidth: 1,
    //     borderColor: '#FAFAFA',
    //     padding: 5,
    //     textStyle: {
    //       color: '#414D55',
    //       fontSize: 12,
    //       lineHeight:10,
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular'
    //     },
    //     extraCssText: 'box-shadow: 0px 1px 8px #142E6E1A'
    //   },
    //   legend: {
    //     type: 'scroll',
    //     orient: 'horizontal',
    //     left: 'center',
    //     top: 10,
    //     bottom: 20,
    //     itemGap : 25,
    //     width: '90%',
    //     inactiveColor: '#728998',
    //     textStyle: {
    //       color: '#414D55',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular, Verdana',
    //     },
    //     pageIconSize: 12,
    //     pageIconColor: '#6149CD',
    //     pageIconInactiveColor: '#414D55',
    //     pageTextStyle: {
    //       color: '#414D55',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular, Verdana',
    //     },
    //     formatter : function(params, value){
    //       var newParamsName = "";
    //       var paramsNameNumber = params.length;
    //       var provideNumber = 50;
    //       var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    //       if (paramsNameNumber > provideNumber) {
    //           for (var p = 0; p < rowNumber; p++) {
    //             var tempStr = "";
    //             if (p === rowNumber - 1) {
    //                 tempStr = (params.length > 6 ? (params.slice(0,50)+"...") : '' );
    //             } else {}
    //             newParamsName += tempStr;
    //           }
    //       } else {
    //           newParamsName = params;
    //       }
    //       return newParamsName
    //     },
    //     data: ['Completado', 'Pendiente']
    //   },
    //   toolbox: {
    //     show: true,
    //     orient: 'horizontal',
    //     showTitle: false,
    //     feature: {
    //       dataZoom: {
    //         show: true,
    //         iconStyle: {
    //           borderColor: '#414D55'
    //         },
    //         emphasis: {
    //           iconStyle: {
    //             borderColor: '#414D55'
    //           },
    //         }
    //       },
    //       restore: {
    //         show: true,
    //         iconStyle: {
    //           borderColor: '#414D55'
    //         },
    //         emphasis: {
    //           iconStyle: {
    //             borderColor: '#414D55'
    //           },
    //         }
    //       },
    //       saveAsImage: {
    //         type: 'png',
    //         name: 'Consulta externa de medicina general',
    //         backgroundColor: '#FAFAFA',
    //         show: true,
    //         iconStyle: {
    //           borderColor: '#414D55'
    //         },
    //         emphasis: {
    //           iconStyle: {
    //             borderColor: '#414D55'
    //           },
    //         }
    //       }
    //     },
    //     iconStyle: {
    //       borderColor: '#414D55'
    //     },
    //     emphasis: {
    //       iconStyle: {
    //         borderColor: '#414D55'
    //       },
    //     },
    //     bottom: 0,
    //     pixelRatio: 2,
    //   },
    //   grid: [
    //     {
    //       containLabel: true,
    //       borderColor: '#728998'
    //     }
    //   ],
    //   xAxis: {
    //     type: 'category',
    //     name: '',
    //     nameLocation: 'middle',
    //     nameGap: 40,
    //     nameTextStyle: {
    //       color: '#728998',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular'
    //     },
    //     axisLabel: {
    //       color: '#728998',
    //       fontWeight: 'normal',
    //       fontFamily: 'Monserat-regular'
    //     },
    //     axisLine: {
    //       lineStyle: {
    //         color: '#728998',
    //         width: 1,
    //       }
    //     },
    //     boundaryGap: true,
    //     data: dataMedicalHistoryThree.map(item => item.valueOne)
    //   },
    //   yAxis: [
    //     {
    //       type: 'value',
    //       name: '',
    //       nameLocation: 'middle',
    //       nameGap: 50,
    //       nameTextStyle: {
    //         color: '#728998',
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       },
    //       axisLabel: {
    //         formatter : function(params, value){
    //           var newParamsName = "";
    //           var paramsNameNumber = params.length;
    //           var provideNumber = 12;
    //           var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    //           if (paramsNameNumber > provideNumber) {
    //               for (var p = 0; p < rowNumber; p++) {
    //                 var tempStr = "";
    //                 if (p === rowNumber - 1) {
    //                     tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
    //                 } else {}
    //                 newParamsName += tempStr;
    //               }
    //           } else {
    //             newParamsName = params;
    //           }
    //           return newParamsName
    //         },
    //         color: '#728998',
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       },
    //       boundaryGap: [0, '0%'],
    //       axisLine: {
    //         onZero: false,
    //         lineStyle: {
    //           color: '#728998',
    //           width: 1,
    //         }
    //       },
    //     },
    //     {
    //       type: 'value',
    //       nameLocation: 'middle',
    //       nameGap: 25,
    //       nameTextStyle: {
    //         color: '#728998',
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       },
    //       axisLabel: {
    //         formatter : function(params, value){
    //           var newParamsName = "";
    //           var paramsNameNumber = params.length;
    //           var provideNumber = 12;
    //           var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    //           if (paramsNameNumber > provideNumber) {
    //               for (var p = 0; p < rowNumber; p++) {
    //                 var tempStr = "";
    //                 if (p === rowNumber - 1) {
    //                     tempStr = (params.length > 6 ? (params.slice(0,12)+"...") : '' );
    //                 } else {}
    //                 newParamsName += tempStr;
    //               }
    //           } else {
    //             newParamsName = params;
    //           }
    //           return newParamsName
    //         },
    //         color: '#728998',
    //         fontWeight: 'normal',
    //         fontFamily: 'Monserat-regular'
    //       },
    //       boundaryGap: [0, '0%'],
    //       axisLine: {
    //         onZero: false,
    //         lineStyle: {
    //           color: '#728998',
    //           width: 1,
    //         }
    //       },
    //     },
    //   ],
    //   series: [
    //     {
    //       type: 'bar',
    //       name: 'Completado',
    //       label: {
    //         normal: {
    //           show: true,
    //           position: 'top',
    //           color: '#414D55',
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         },
    //         emphasis: {
    //           show: true,
    //           position: 'top',
    //           color: '#6149CD',
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         },
    //       },
    //       itemStyle: {
    //         color: "#FFD60C",
    //         shadowBlur: 0,
    //         shadowOffsetY: 0,
    //       },
    //       emphasis: {
    //         focus: 'series'
    //       },
    //       data: dataMedicalHistoryThree.map(item => item.valueTwo),
    //       animationDelay: function (idx) {
    //         return idx * 15;
    //       }
    //     },
    //     {
    //       type: 'bar',
    //       name: 'Pendiente',
    //       label: {
    //         normal: {
    //           show: true,
    //           position: 'top',
    //           color: '#414D55',
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         },
    //         emphasis: {
    //           show: true,
    //           position: 'top',
    //           color: '#414D55',
    //           fontSize: 12,
    //           fontWeight: 'normal',
    //           fontFamily: 'Monserat-regular'
    //         },
    //       },
    //       itemStyle: {
    //         color: "#6149CD",
    //         shadowBlur: 0,
    //         shadowOffsetY: 0,
    //       },
    //       emphasis: {
    //         focus: 'series'
    //       },
    //       data: dataMedicalHistoryThree.map(item => item.valueThree),
    //       animationDelay: function (idx) {
    //         return idx * 15;
    //       }
    //     }
    //   ],
    //   animationEasing: 'elasticOut',
    //   animationDelayUpdate: function (idx) {
    //     return idx * 5;
    //   }
    // };

    // optionMedicalHistoryThree && chartMedicalHistoryThree.setOption(optionMedicalHistoryThree);

    // $(window).on('resize', function(){
    //   if(chartMedicalHistoryThree != null && chartMedicalHistoryThree !== undefined){
    //     chartMedicalHistoryThree.resize();
    //   }
    // });

    // },[])

    let [selectInsti,setSelectInsti] = React.useState(null);

    const GetInstitutionData= async()=>{
      let result =  undefined;
      setPreloader(true);
      result =  await GetInstitutions().catch((error)=>{
          console.log(error);
          setPreloader(false);
          Swal.fire({
              icon: 'info',
              title: 'Error al traer información de roles'
          })
      })
      if(result){
          console.log("Institución: ",result.data);
          setInstitution(result.data.map((obj)=>{
              return (
                  {...obj,['value']:obj.id,['label']:obj.name}
              )
          }));
          setPreloader(false)
      }
    }

    const AppendInstitution=async()=>{

      // miramos de que no este agregado
      if(selectInsti == null){
        Swal.fire({
          icon: 'info',
          title: 'Selecciona una institución para vincular'
        })
      }else{
        // miramos que no este vinculado ya
        if(selectInsti?.allowed_modules.includes(selectModulAdmin?.id)){
          Swal.fire({
            icon: 'info',
            title: 'Esta institución ya se encuentra vinculada'
          })
        }else{
          // vinculamos la institución
          setPreloader(true);
          let result =  undefined;
          let lista_ = selectInsti['allowed_modules']
          lista_.push(selectModulAdmin?.id);
          result =  await UpdateInstitution({...selectInsti,['allowed_modules']:lista_}).catch((error)=>{
            console.log(error);
            Swal.fire({
              icon: 'info',
              title: 'Problemas para vincular institución'
            })
            setPreloader(false);
          })
          if(result){
            setPreloader(false);
            setSelectInsti(null);
            // agregamos la institución a la lista de instituciones vinculadas
            let lista_nueva = [...selectModulInstiAdmin];
            lista_nueva.push(result.data);
            setSelectModulInstiAdmin(lista_nueva);
            // cargamos el arreglo de instituciones
            GetInstitutionData();
            Swal.fire({
              icon: 'success',
              title: 'Institución vinculada con éxito'
            })
          }
        }
      }
      

    }

    // desvincular institución

    const deleteInstitution=async(obj)=>{

      // vinculamos la institución
      setPreloader(true);
      let result =  undefined;
      let lista_ = obj['allowed_modules'].filter((obj2)=> obj2 !== selectModulAdmin?.id)
      result =  await UpdateInstitution({...obj,['allowed_modules']:lista_}).catch((error)=>{
        console.log(error);
        Swal.fire({
          icon: 'info',
          title: 'Problemas para vincular institución'
        })
        setPreloader(false);
      })
      if(result){
        setPreloader(false);
        setSelectInsti(null);
        // agregamos la institución a la lista de instituciones vinculadas
        console.log("QUE HAY AQUI? ",selectModulInstiAdmin);
        let lista_nueva = [...selectModulInstiAdmin].filter((obj2)=> obj2?.id !== obj?.id);
        setSelectModulInstiAdmin(lista_nueva);
        // cargamos el arreglo de instituciones
        GetInstitutionData();
        Swal.fire({
          icon: 'success',
          title: 'Institución desvinculada con éxito'
        })
      }
      

    }
    
    let GetUserData=(obj)=>{
      // obtenemos el email del usuario y lo buscamos en la lista global de usuarios
      let email_user = obj?.user;
      // CON EL CORREO BUSCAMOS EN LA LISTA GLOBAL
      let user = props.users.filter((obj2)=> obj2.email == email_user)[0];
      return user
    }


    const exportToCSV = async (data, filename) => {
      // Convertir los datos en formato CSV
      const csvRows = [];
    
      // Obtener los encabezados de los datos
      const headers = Object.keys(data[0]);
      csvRows.push(headers.join(','));
    
      // Agregar los datos
      data.forEach(row => {
        const values = headers.map(header => {
          const escapeValue = String(row[header]).replace(/"/g, '""');
          return `"${escapeValue}"`;
        });
        csvRows.push(values.join(','));
      });
    
      // Crear el contenido CSV con BOM para UTF-8
      const csvContent = '\uFEFF' + csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
      // Crear un enlace para descargar el archivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    
    

    const downloadExcel=()=>{

      // obtenemos la información de todos los usuarios y los llevamos a una misma estructura para generar
      let array_survey = [];
      for (var i=0; i<lista_modulo.length;i++){
          // DATOS DEL USUARIO
          // iteramos por cada pregunta
          let questions_list =  lista_modulo[i].survey_module_editable.survey
          let object_ = {
            'user':lista_modulo[i]?.user
          }
          for (var a=0;a<questions_list.length;a++){
            // MIRAMOS QUE TIPO DE ETIQUETA TIENE
            if(questions_list[a].hasOwnProperty("satisfaction_question")){
              let question = questions_list[a]?.satisfaction_question?.survey?.replace(/<\/?[^>]+(>|$)/g, "").replace(/(\r\n|\n|\r)/g, "").trim().replace(" ","_");
              object_[question] = questions_list[a]?.satisfaction_question?.level_of_satisfaction;
            }else if (questions_list[a].hasOwnProperty("open_questionary_optional")){
              let question = questions_list[a]?.open_questionary_optional?.question?.replace(/<\/?[^>]+(>|$)/g, "").replace(/(\r\n|\n|\r)/g, "").trim();
              object_[question] = questions_list[a]?.open_questionary_optional?.response;
            }
            
          }
          array_survey.push(object_);

      }
      // YA CON ESTOS ELEMENTOS CARGADOS GENERAMOS EL EXCEL
      exportToCSV(array_survey,'Evaluacion_modulo.csv')
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
          <div className='dataModulContainer' id='BodyContainerV2'>

            <div className='ContainerNameModul'>
                <p className='fontSemiBold color-purple' style={{'marginTop':'30px','fontSize':'30px'}}>{selectModulAdmin?.module_name}</p>
            </div>
            {userData?.role == 1  ? 
            <div className='ContainerNameModul'>
                <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>Vincular institución</p>
                <div className='ButtonEditModul bs-2-' onClick={handleShow2}>
                <FaRegPlusSquare size={20}/>
                </div>
            </div>
            :
            <></>
            }
            
            
            <div className='FormContainer'>
                      <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5' style={{'width':'100%'}}>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <span className='fs-10- fontLight'>Usuario</span>
                            <div className='row g-0 g-sm-0 g-md-2 g-lg-2 g-xl-2 g-xxl-2 mb-3'>
                            <div className='col-12'>
                                <div className='form-floating inner-addon- right-addon-'>
                                <input value={filter} onChange={ReadInput} type="text" className='form-control' id='password' placeholder="" />
                                </div>
                            </div>
                            </div>
                        </div>
                      </div>
            </div>
            <div  className='StadisticsContainer'>
                  <div onClick={downloadExcel} className='excelContainer'>
                            <AiOutlineFileExcel color='white' size={25}></AiOutlineFileExcel>
                  </div>
            </div>
            <div className='TableUsersContainer bs-2-'>
                <div className='row mt-4 mb-4'>
                        <div className='table-responsive table-general-'>
                        <table className='table table-sm table-striped table-no-border- align-middle'>
                        <thead>
                            <tr>
                                <th scope="col" className='th-width-xs-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'></span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-md-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Nombre completo</span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Número de identificación</span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Email</span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Institución</span>
                                  </div>
                                </th>
                                {/* <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Porcentaje (%)</span>
                                  </div>
                                </th> */}
                            </tr>
                            </thead>
                            <tbody>
                                {supportList.map((obj,index)=>{
                                  return(
                                    <tr key={index}>
                                        <td className='align-middle'>
                                            <div className='w-auto d-flex flex-row justify-content-center align-items-center align-self-center'>
                                            <div className='checks-radios-'>
                                                <label>
                                                <CiCircleMore size={30} onClick={()=>{
                                                  setSelectUser(obj)
                                                  scrollToBottom();
                                                  }} type="radio" name="radio"/>
                                                
                                                </label>
                                            </div>
                                            </div>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{GetUserData(obj)?.last_name}</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{GetUserData(obj)?.first_name}</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{obj?.user}</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{GetInsti(GetUserData(obj)?.id)?.name}</p>
                                        </td>
                                    </tr>
                                  )
                                })}
                                
                            </tbody>
                        </table>
                        </div>
                </div> 
            </div>
            {/* <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>Estadísticas</p>
            <div className='row row-cols-auto g-4'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div id='card-indicator-large-' className='card border-0 rounded-3 w-100 bs-2- position-relative overflow-hidden'>
                    <div className='card-header border-0 bg-transparent p-4 pb-0'>
                        <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                        <h1 className='m-0 p-0 lh-sm fs-4- fontSemiBold fw-bold tx-dark-purple-'>
                        Balance general
                        </h1>
                        <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center button-open- btn-dark-purple- bs-1- ms-2'  onClick={() => toggleOverlay('card1')}>
                        <CiCircleMore />
                        </button>
                        </div>
                        <div className='w-75'>
                        </div>
                    </div>
                    <div className='card-body p-4 w-100'>
                        <div className='w-100 h-100 mx-auto' id='chart-medical-history-one-'></div>
                    </div>
                    {showOverlay === 'card1' && (
                        <div className={`overlay-wrapper${hiddenOverlay ? ' hidden' : ''}`} onAnimationEnd={() => hiddenOverlay && setHiddenOverlay(true)}>
                        <div className={`overlay-content${hiddenOverlay ? ' hidden' : ''}`} onAnimationEnd={() => hiddenOverlay && setHiddenOverlay(true)}>
                            <div id='wrapper-data-table' className='card border-0 rounded-3 w-100 position-relative'>
                            <div className='card-header border-0 bg-transparent p-4'>
                                <div className='d-flex flex-row justify-content-between align-items-center align-self-center'>
                                <h1 className='m-0 p-0 lh-sm fs-4- fontSemiBold fw-bold tx-dark-purple-'>
                                    Tabla de datos
                                </h1>
                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center button-close- btn-bone-white- bs-1- ms-2' onClick={() => toggleOverlay(null)}>
                                <CiCircleMore />
                                </button>
                                </div>
                            </div>
                            <div className='card-body p-4 pt-0 pb-0 w-100'>
                                <div className='table-responsive table-general-'>
                                <table className='table table-sm table-striped table-no-border- align-middle'>
                                    <thead>
                                    <tr>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- fontSemiBold fw-bold tx-dark-purple-'>Estado</span>
                                        </div>
                                        </th>
                                        <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                            <span className='fs-5- fontSemiBold fw-bold tx-dark-purple-'>Porcentaje</span>
                                        </div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>200</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>80%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>100</p>
                                        </td>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20%</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    )}
                    {showOverlay === 'card1' && <div className="overlay-backdrop" onClick={() => toggleOverlay(null)} />}
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <div id='card-indicator-large-' className='card border-0 rounded-3 w-100 bs-2- position-relative overflow-hidden'>
                    <div className='card-header border-0 bg-transparent p-4 pb-0'>
                        <div className='d-flex flex-row justify-content-between align-items-center align-self-center mb-1'>
                        <h1 className='m-0 p-0 lh-sm fs-4- fontSemiBold fw-bold tx-dark-purple-'>
                            Balance instituciones
                        </h1>
                        <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center button-open- btn-dark-purple- bs-1- ms-2'  onClick={() => toggleOverlay('card2')}>
                        <CiCircleMore />
                        </button>
                        </div>
                    </div>
                    <div className='card-body p-4 w-100'> 
                        <div className='w-100 h-100 mx-auto' id='chart-medical-history-two-'></div>
                    </div>
                    {showOverlay === 'card2' && (
                    <div className={`overlay-wrapper${hiddenOverlay ? ' hidden' : ''}`} onAnimationEnd={() => hiddenOverlay && setHiddenOverlay(true)}>
                        <div className={`overlay-content${hiddenOverlay ? ' hidden' : ''}`} onAnimationEnd={() => hiddenOverlay && setHiddenOverlay(true)}>
                        <div id='wrapper-data-table' className='card border-0 rounded-3 w-100 position-relative'>
                            <div className='card-header border-0 bg-transparent p-4'>
                            <div className='d-flex flex-row justify-content-between align-items-center align-self-center'>
                                <h1 className='m-0 p-0 lh-sm fs-4- fontSemiBold fw-bold tx-dark-purple-'>
                                    Tabla de datos
                                </h1>
                                <button className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center button-close- btn-bone-white- bs-1- ms-2' onClick={() => toggleOverlay(null)}>
                                <CiCircleMore />
                                </button>
                            </div>
                            </div>
                            <div className='card-body p-4 pt-0 pb-0 w-100'>
                            <div className='table-responsive table-general-'>
                                <table className='table table-sm table-striped table-no-border- align-middle'>
                                <thead>
                                    <tr>
                                    <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold tx-dark-purple-'>Institución</span>
                                        </div>
                                    </th>
                                    <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold tx-dark-purple-'>Completado</span>
                                        </div>
                                    </th>
                                    <th scope="col" className='th-width-sm-'>
                                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                        <span className='fs-5- fontSemiBold fw-bold tx-dark-purple-'>Pendiente</span>
                                        </div>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>Empresa 1</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>120</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontSemiBold fw-normal text-center'>20</p>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                    {showOverlay === 'card2' && <div className="overlay-backdrop" onClick={() => toggleOverlay(null)} />}
                    </div>
                </div>
            </div> */}
            {selectUser == null ? 
            <>
              
            </>
            :
            <>
            <p className='fontSemiBold color-purple' style={{'marginTop':'30px'}}>{GetUserData(selectUser)?.last_name}</p>
            <Accordion >
                <Accordion.Item className='bs-2- classColaps' eventKey="0">
                    <Accordion.Header className='fontSemiBold'>
                            <div className='TextContainerClass'>
                                    <span className='fontSemiBold' style={{'textAlign':'center'}}>¡Da click en el boton para poder observar las actividades del usuario!</span>
                            </div>
                    </Accordion.Header>
                    <Accordion.Body>
                    <div className='ContainerClassColapse'>
                    <div className='row mt-4 mb-4'>
                        <div className='table-responsive table-general-'>
                        <table className='table table-sm table-striped table-no-border- align-middle'>
                        <thead>
                            <tr>
                                <th scope="col" className='th-width-md-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Categoria</span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Tipo actividad</span>
                                  </div>
                                </th>
                                <th scope="col" className='th-width-sm-'>
                                  <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                      <span className='fs-5- fontSemiBold fw-bold color-purple'>Ver</span>
                                  </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {selectUser?.activity_module_editable?.foundations.map((obj,index)=>{
                                  return(
                                    <>
                                    {obj?.hasOwnProperty("evidence") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Evidencia'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                                <FaRegEye  cursor={'pointer'} onClick={()=>{
                                                  setData({
                                                    'description':obj?.evidence?.description,
                                                    'answer':obj?.evidence?.upload,
                                                    'type':'evidence'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                                <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.forum_participation?.question,
                                                    'answer':obj?.forum_participation?.response,
                                                    'type':'forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("cloud_forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.cloud_forum_participation?.question,
                                                    'answer':obj?.cloud_forum_participation?.response,
                                                    'type':'cloud_forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    </>
                                  )
                                })}
                                {selectUser?.activity_module_editable?.engage.map((obj,index)=>{
                                  return(
                                    <>
                                    {obj?.hasOwnProperty("evidence") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Compromiso'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Evidencia'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye  cursor={'pointer'} onClick={()=>{
                                                  setData({
                                                    'description':obj?.evidence?.description,
                                                    'answer':obj?.evidence?.upload,
                                                    'type':'evidence'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.forum_participation?.question,
                                                    'answer':obj?.forum_participation?.response,
                                                    'type':'forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("cloud_forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.cloud_forum_participation?.question,
                                                    'answer':obj?.cloud_forum_participation?.response,
                                                    'type':'cloud_forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    </>
                                  )
                                })}
                                {selectUser?.activity_module_editable?.co_create.map((obj,index)=>{
                                  return(
                                    <>
                                    {obj?.hasOwnProperty("evidence") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cooperación'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Evidencia'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.evidence?.description,
                                                    'answer':obj?.evidence?.upload,
                                                    'type':'evidence'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.forum_participation?.question,
                                                    'answer':obj?.forum_participation?.response,
                                                    'type':'forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("cloud_forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'} onClick={()=>{
                                                  setData({
                                                    'description':obj?.cloud_forum_participation?.question,
                                                    'answer':obj?.cloud_forum_participation?.response,
                                                    'type':'cloud_forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    </>
                                  )
                                })}
                                {selectUser?.activity_module_editable?.reflection.map((obj,index)=>{
                                  return(
                                    <>
                                    {obj?.hasOwnProperty("evidence") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cooperación'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Evidencia'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.evidence?.description,
                                                    'answer':obj?.evidence?.upload,
                                                    'type':'evidence'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.forum_participation?.question,
                                                    'answer':obj?.forum_participation?.response,
                                                    'type':'forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    {obj?.hasOwnProperty("cloud_forum_participation") ?   
                                    <tr key={index}>
                                        <td className='align-middle'>
                                        <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Cimientos'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>{'Participación foro'}</p>
                                        </td>
                                        <td className='align-middle'>
                                            <p className='m-0 lh-sm fs-5- fontLight fw-normal text-center'>
                                            <FaRegEye cursor={'pointer'}  onClick={()=>{
                                                  setData({
                                                    'description':obj?.cloud_forum_participation?.question,
                                                    'answer':obj?.cloud_forum_participation?.response,
                                                    'type':'cloud_forum_participation'
                                                  })
                                                  setShow3(true);
                                                }}/>
                                            </p>
                                        </td>
                                    </tr>
                                    :
                                    <></>
                                    }
                                    </>
                                  )
                                })}
                                
                            </tbody>
                        </table>
                        </div>
                </div> 
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
            </>
            }
            
          </div>
          <Offcanvas className="offcanvasBodyV2" show={show2} onHide={handleClose2}>
                  <div className='offcanvas-header pb-4 padding-40-'>
                  <h2 className='m-0 p-0 lh-sm fs-4-  fw-bold fontSemiBold color-purple'>Instituciones</h2>
                  <IoIosClose style={{'cursor':'pointer'}} onClick={handleClose2} size={30} className='fa icon-close'></IoIosClose>
                  </div>
                  <div className='offcanvas-body '>
                  
                  <div className='container-fluid pt-0 pb-0 padding-40-'>
                      <div className='row'>
                      <div className='col-12'>
                      <form action='' className='Form'>
                              
                              <span className='fs-10- fontLight' style={{'marginTop':'20px'}}>Institución</span>
                              <div className='inner-addon- left-addon-'>
                                  <Select options={institution} value={{'value':selectInsti?.value,'label':selectInsti?.label}} onChange={(event)=>setSelectInsti(event)} components={{ ValueContainer: CustomValueContainer, animatedComponents, NoOptionsMessage: customNoOptionsMessage, LoadingMessage: customLoadingMessage }} placeholder="" styles={selectStyles}/>
                              </div>
                              <div onClick={AppendInstitution} className='ContainerButton_2'>
                                  <div className='Button_2' style={{'marginTop':'20px'}}>
                                              <span className='text_button_2'>Agregar</span>
                                  </div>
                              </div>
                              <div className='listInstitucions'>
                                      {selectModulInstiAdmin?.map((obj,index)=>{
                                        return(
                                          <div key={index} className='Institucions'>
                                                <div className='col-auto'>
                                                                        <button onClick={()=>deleteInstitution(obj)} className='btn rounded-pill p-2 d-flex flex-row justify-content-center align-items-center align-self-center ' type="button" >
                                                                        <MdDeleteOutline />
                                                                        </button>
                                                </div>
                                                <span className='fontLight'>{obj?.name}</span>
                                          </div>
                                        )
                                      })
                                      }
                                      
                              </div>
                          </form>
                      </div>
                      </div>
                  </div>
                  </div>
          </Offcanvas>
          <Offcanvas className="offcanvasBodyV2" show={show3} onHide={handleClose3}>
                <div className='offcanvas-header pb-4 padding-40-'>
                <h2 className='m-0 p-0 lh-sm fs-4-  fw-bold fontSemiBold color-purple'>Información de la actividad</h2>
                <IoIosClose style={{'cursor':'pointer'}} onClick={handleClose3} size={30} className='fa icon-close'></IoIosClose>
                </div>
                <div className='offcanvas-body '>
                  <div className='container-fluid pt-0 pb-0'>
                    <div className='dataModulContainer'>
                    <div className='DataInfoModulContainer' style={{'backgroundColor':'rgba(222, 128, 253, 0.21)'}}>
                            <div className='ContainerInfoModul2'>
                                    <span className='fontSemiBold color-purple' style={{'fontSize':'30px'}}>{'Objetivo General'}</span>
                                    <span className='fontLight' style={{'fontSize':'20px','marginBottom':'20px'}}>{''}</span>
                                    <p className='fontLight description_moduls justify' dangerouslySetInnerHTML={{ __html: data?.description.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '') }} />
                            </div>
                    </div>
                    <span className='fontSemiBold color-purple' style={{'fontSize':'20px','marginTop':'20px'}}>Respuesta</span>
                    <div className='listInstitucions' style={{'marginTop':'30px'}}>
                                              <div className='ListData'>
                                                    <div className='col-auto'>
                                                    <CiBookmark />
                                                    </div>
                                                    {data?.type == 'cloud_forum_participation' ? 
                                                    <span className='fontLight'>{data?.answer}</span>
                                                    :
                                                    <></>
                                                    }
                                                    {data?.type == 'forum_participation' ? 
                                                    <span className='fontLight'>{data?.answer}</span>
                                                    :
                                                    <></>
                                                    }
                                                    {data?.type == 'evidence' ? 
                                                    <span className='fontSemiBold linked' onClick={()=>window.open(data?.answer)}>Ver soporte</span>
                                                    :
                                                    <></>
                                                    }
                                                    
                                              </div>
                                          
                    </div>
                    
                    </div>
                  </div>
                </div>
        </Offcanvas>
        </>
    )
}
