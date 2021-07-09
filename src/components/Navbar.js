import React, { useState } from 'react';

function Navbar() {
    return(
        <div className="container-fluid contenedor-navbar">
            <nav className="navbar navbar-expand-lg bg-light navbar-dark">
            <a className="navbar-brand" href=""><img src="https://meinklima.cl/wp-content/uploads/elementor/thumbs/MeinKlima_Transparente-p53f2dty2jfjmgilw5i0wtzb80fn8rfxz0ybsdinww.png" alt="logo-meinklima"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav"> 
              <li className="nav-item">
                  <a className="nav-link" href="">Inicio</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="">Servicios</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="">Catalogo</a>
              </li>
            </ul>
            </div>
            <div className="container-fluid  contenedor-boton">
            <button type="button" className="btn btn-danger btn-color"><a className="a" href="tel:+569%202215%204721"><i className="fas fa-phone"></i><span className="p-btn"> LLAMANOS AHORA</span></a></button>
            
            </div>
            </nav>
        </div>
    );
}

export default Navbar;