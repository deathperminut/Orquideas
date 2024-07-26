import './App.css';
import React from 'react';
/* navigation */
import {Navigate,Route,Routes} from 'react-router-dom';

/* COMPONENTS */
import Auth from './Auth/Auth';
import LandingPage from './LandingPage/LandingPage';
import Lobby from './Lobby/Lobby';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element = {<Navigate to='/LandingPage'></Navigate>}></Route>
        <Route path='/Auth/*' element={<Auth></Auth>}></Route>
        <Route path='/LandingPage/*' element={<LandingPage></LandingPage>}></Route>
        <Route path='/Lobby/*' element={<Lobby></Lobby>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
