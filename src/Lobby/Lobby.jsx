import React from 'react';
import './Lobby.css';
/* IMPORTS */

import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import Sidebar from '../Components/Shared/Sidebar/Sidebar';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { Navigate, Route, Routes, NavLink } from "react-router-dom"
import Admin from './Moduls/Admin/Admin';
import Home from './Moduls/Home/Home';
import Profile from './Moduls/Profile/Profile';
import SelectClass from './Moduls/SelectClass/SelectClass';
import SelectModul from './Moduls/SelectModul/SelectModul';


export default function Lobby() {

        

    
    return (
        <React.Fragment>
        <div className='container-fluid vw-100 overflow-x-hidden p-0'>
            <div className='wrapper-sidebar- overflow-x-hidden'>
            <Sidebar></Sidebar>
            <div id="content-">
                <Navbar></Navbar>
                <Routes>
                <Route path="" element={ <Navigate to="Home" /> }/>
                <Route path="Home/*" element={<Home/>} />
                <Route path="Profile/*" element={<Profile/>} />
                <Route path="SelectModul/*" element={<SelectModul/>} />
                <Route path="SelectClass/*" element={<SelectClass/>} />
                <Route path="Admin/*" element={<Admin/>} />
                </Routes>
            </div>
            </div>
        </div>
    </React.Fragment>
    )
}
