import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(props) {
    return(
      <div>
        <div className="contenedor-navbar py-3">
            <nav className="navbar navbar-expand-lg bg-light navbar-dark">
            <Link to="/"><img src="https://meinklima.cl/wp-content/uploads/elementor/thumbs/MeinKlima_Transparente-p53f2dty2jfjmgilw5i0wtzb80fn8rfxz0ybsdinww.png" alt="logo-meinklima" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto"> 
                <li className="nav-item px-3 py-2">
                    <Link className="navbar-p nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item dropdown px-3 py-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <Link className="navbar-p" to="/servicios">Servicios</Link>
                  </a>
                    <ul className="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li className="mx-3 my-2"><Link className="navbar-p" to="/instalaciones">Instalacion</Link></li>
                      <li className="mx-3 my-2"><Link className="navbar-p" to="/mantenimiento">Mantenimiento</Link></li>
                      <li className="mx-3 my-2"><p className="navbar-p">Reparacion</p></li>
                      <li className="mx-3 my-2"><p className="navbar-p">Proyecto</p></li>
                    </ul>
                </li>
              </ul>
            </div>
            <div className="container-fluid  contenedor-boton d-flex justify-content-center">
            <button type="button" className="btn btn-danger btn-color"><a className="a" href="tel:+569%202215%204721"><i className="fas fa-phone"></i><span className="p-btn"> LLAMANOS AHORA</span></a></button>
            
            </div>
            </nav>
        </div>
      </div>

    );
}

export default Navbar;