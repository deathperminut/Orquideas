import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import Orquidea from '../../../assets/images/Orquidea.png';
import Home from '../../../assets/images/home.png';
import Profile from '../../../assets/images/user.png';
import Admin from '../../../assets/images/admin.png';

export default function Sidebar() {

    React.useEffect(()=>{
            $(document).ready(function () {
                $('#sidebarCollapse').on('click', function () {
                $('#sidebar-, #content-').toggleClass('active');
                });
            });
            $('#sidebar-').mCustomScrollbar({
            theme: "minimal",
            mouseWheel:{
                scrollAmount: 60,
                normalizeDelta: true
            },
            scrollInertia:100,
            mouseWheelPixels: 100
            });
    },[])

    return (
        <React.Fragment>
            <nav id="sidebar-">
                <div className='d-flex flex-column justify-content-between min-h-'>
                <div className='w-100'>
                    <div className='sidebar-header- d-flex flex-row justify-content-start align-items-center align-self-center'>
                    <div className='w-100 d-flex flex-row justify-content-start align-items-center align-self-center wrapper-logo-medical-big-'>
                        <div className='p-2 me-3 rounded-3 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-sidebar- big-'>
                        <img className='logo-medical-sidebar-' src={Orquidea} alt="" />
                        </div>
                        <p className='m-0 fs-4- ff-monse-regular- fw-bold lh-sm'>
                        <span className='fontLight  color-purple-light' style={{'fontSize':'25px','borderBottom':'1px solid #E59AB5'}}>Orquídeas</span>
                        </p>
                    </div>
                    <div className='w-100 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-medical-small-'>
                        <div className='p-2 rounded-3 d-flex flex-row justify-content-center align-items-center align-self-center wrapper-logo-sidebar- small-'>
                        <img className='logo-medical-sidebar-' src={Orquidea} alt="" />
                        </div>
                    </div>
                    </div>
                    <ul className='nav d-flex flex-column'>
                    <li className='nav-item'>
                        <NavLink className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? 'var(--color-white-)' : 'var(--color-white-)', background: isActive ? 'var(--color-secondary-purple-)' : 'var(--color-tertiary-blue-)', })} to='/dashboard/portfolio'>
                        <p className='m-0 align-items-center align-self-center fs-5-   abbreviated- tx-decoration-'><img className='logo-medical-sidebar-' src={Profile} alt="" /></p>
                        <p className='m-0 ms-4 align-items-center align-self-center fs-5-  unabbreviated- lh-sm fontLight'>Perfil</p></NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? 'var(--color-white-)' : 'var(--color-white-)', background: isActive ? 'var(--color-secondary-purple-)' : 'var(--color-tertiary-blue-)', })}  to='/dashboard/receptionAndAdmissions'>
                        <p className='m-0 align-items-center align-self-center fs-5-   abbreviated- tx-decoration-'><img className='logo-medical-sidebar-' src={Home} alt="" /></p>
                        <p className='m-0 ms-4 align-items-center align-self-center fs-5-  unabbreviated- lh-sm fontLight'>Home</p>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link d-flex flex-row justify-content-start align-items-center align-self-center position-relative fs-5- ff-monse-regular-' style={({ isActive }) => ({ color: isActive ? 'var(--color-white-)' : 'var(--color-white-)', background: isActive ? 'var(--color-secondary-purple-)' : 'var(--color-tertiary-blue-)', })} to='/dashboard/medicalStaff'>
                        <p className='m-0 align-items-center align-self-center fs-5- ff-monse-regular-  abbreviated- tx-decoration-'><img className='logo-medical-sidebar-' src={Admin} alt="" /></p>
                        <p className='m-0 ms-4 align-items-center align-self-center fs-5-  unabbreviated- lh-sm fontLight'>Admin</p>
                        </NavLink>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
