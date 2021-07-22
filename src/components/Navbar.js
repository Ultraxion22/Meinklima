import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Servicios from '../views/Servicios';


function Navbar() {
    return(
      <BrowserRouter>
        <div className="container-fluid contenedor-navbar py-3">
            <nav className="navbar navbar-expand-lg bg-light navbar-dark">
            <img src="https://meinklima.cl/wp-content/uploads/elementor/thumbs/MeinKlima_Transparente-p53f2dty2jfjmgilw5i0wtzb80fn8rfxz0ybsdinww.png" alt="logo-meinklima"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto"> 
              <li className="nav-item px-3">
                  <p>Inicio</p>
              </li>
              <li className="nav-item px-3">
                <p>Servicios</p>
              </li>
            </ul>
            </div>
            <div className="container-fluid  contenedor-boton d-flex justify-content-center">
            <button type="button" className="btn btn-danger btn-color"><a className="a" href="tel:+569%202215%204721"><i className="fas fa-phone"></i><span className="p-btn"> LLAMANOS AHORA</span></a></button>
            
            </div>
            </nav>
            <Route path="/servicios" exact component={Servicios} />
        </div>
      </BrowserRouter>

    );
}

export default Navbar;