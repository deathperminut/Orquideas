import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importamos los estilos css
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
import './normalize.css';

// Importamos elementos 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter } from 'react-router-dom';
import { ProviderContext } from './Context';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ProviderContext>
        <App />
    </ProviderContext> 
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
