import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { AppContext } from '../../../Context';
import { useNavigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { GetRols } from '../../../Services/Roles/Roles';
import Swal from 'sweetalert2';
import { getModuls } from '../../../Services/Moduls/Moduls';
import { GetInstitutions } from '../../../Services/Institutions/Institutions';

export default function Navbar() {

    const navigate=useNavigate();

    // USAMOS EL APP CONTEXT
    let {userData,roles,setRoles,moduls,setModuls,institution,setInstitution,cleanContext} =  React.useContext(AppContext);

    // USE STATES
    let [preloader,setPreloader] = React.useState(false);
    
    
    // LLAMAMOS LOS SERVICIOS

    React.useEffect(()=>{
        if(userData == null){
            navigate('/Auth/AuthLogin')
        }else{
            // LLAMAMOS EL SERVICIO DE ROLES Y MODULOS
            GetData();
        }

    },[])

    const GetData=async()=>{

            let result =  undefined;
            result =  await GetRols().catch((error)=>{
                console.log(error);
                setPreloader(false);
                Swal.fire({
                    icon: 'info',
                    title: 'Error al traer información de roles'
                })
            })
            if(result){
                console.log("roles: ",result.data);
                setRoles(result.data.map((obj)=>{
                    return (
                        {...obj,['value']:obj.id,['label']:obj.name}
                    )
                }));
                // traemos la información de los modulos
                GetInstitutionData();
            }

    }

    const GetInstitutionData= async()=>{
        let result =  undefined;
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
                GetModulsData();
            }
    }

    const GetModulsData=async()=>{
        let result =  undefined;
        result =  await getModuls().catch((error)=>{
            console.log(error);
            setPreloader(false);
            Swal.fire({
                icon: 'info',
                title: 'Error al traer información de roles'
            })
        })
        if(result){
            console.log("Modulos: ",result.data);
            setModuls(result.data);
        }
    }

    let [state,setState] = React.useState(false);

    let getSpecifiRol=()=>{

        let lista = roles?.filter((obj,index)=> obj.id ==  userData?.role)

        if(lista.length !== 0){
            return lista[0].name
        }else{
            return ''
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
            <nav className='navbar navbar-expand pt-0 pb-0 d-flex flex-row justify-content-end align-items-center align-self-center'>
                <div className='container-fluid navbar-collapse-background position-relative d-flex flex-row justify-content-between align-items-center align-self-center'>
                <div className='navbar-brand d-flex flex-row justify-content-start align-items-center align-self-center'>
                    <div onClick={()=>setState(!state)} id="sidebarCollapse" class='btn d-flex flex-row justify-content-center align-items-center align-self-center rounded-circle ps-2 btn-collapse-sidebar-  bs-1-'>
                    {state == true ? 
                    <FaAngleLeft className='icon-left-arrow fs-xs'></FaAngleLeft>
                    :
                    <FaChevronRight className='icon-left-arrow fs-xs'></FaChevronRight>
                    }
                    
                    </div>
                </div>
                <div className='row'>
                    <div id='dropdown-user' className='col-12 d-flex flex-row justify-content-center align-items-center align-self-center'>
                    <div className='dropdown ms-3'>
                        <div className='dropdown-toggle d-flex flex-row justify-content-center align-items-center align-self-center' id='dropdownMenu2' data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='d-flex flex-column justify-content-start align-items-start align-self-center'>
                            <p className='m-0 lh-sm fs-5- fontLight tx-black-'>{userData?.last_name}</p>
                            <p className='m-0 lh-sm fs-7- fontSemiBold text-uppercase tx-black-'>{getSpecifiRol()}</p>
                        </div>
                        </div>
                        <div className='dropdown-menu dropdown-menu-end p-0 m-0' aria-labelledby="dropdownMenu2">
                        <div className='container-fluid p-0'>
                            <div className='row'>
                            <div className='col-12'>
                                <div className='list-group border-0 rounded-0'>
                                <NavLink className='nav-link list-group-item list-group-item-action border-0 rounded-0' style={({ isActive }) => ({ color: isActive ? 'var(--color-white-)' : 'var(--color-black-)', background: isActive ? '#2d1937' : 'var(--color-white-)', })} to='/Lobby/Profile'><span className='lh-1 fs-5- fontSemiBold'>Perfil</span>
                                </NavLink>
                                <NavLink className='nav-link list-group-item list-group-item-action border-0 rounded-0' style={({ isActive }) => ({ color: isActive ? 'var(--color-white-)' : 'var(--color-black-)', background: isActive ? '#2d1937' : 'var(--color-white-)', })} onClick={cleanContext} to='/Auth/AuthLogin'><span className='lh-1 fs-5- fontSemiBold'>Cerrar Sesión</span>
                                </NavLink>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
