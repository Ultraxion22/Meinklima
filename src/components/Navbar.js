import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(props) {
    return(
      <div>
        <div className="contenedor-navbar py-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link to="/"><img className="nav-img" src="https://i.ibb.co/Hh2Ps8S/Mein-Klima-Transparente.png" alt="logo-meinklima" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto"> 
                    <li className="nav-item px-3 py-2">
                        <Link className="navbar-p nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item dropdown px-3 py-2">
                      <a class="nav-link dropdown-toggle navbar-p" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <Link className="navbar-p" to="/servicios">Servicios</Link>
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li className="mx-3 my-3"><Link className="navbar-p dropdown-item" to="/instalaciones">Instalacion</Link></li>
                        <li className="mx-3 my-3"><Link className="navbar-p dropdown-item" to="/mantenimiento">Mantenimiento</Link></li>
                        <li className="mx-3 my-3"><Link className="navbar-p dropdown-item" to="/reparaciones">Reparaciones</Link></li>
                        <li className="mx-3 my-2"><Link className="navbar-p dropdown-item" to="/proyectos">Proyectos</Link></li>
                      </ul>
                    </li>
                    {/* <li className="nav-item px-3 py-2">
                        <Link className=" disabled navbar-p nav-link" to="/catalogo">Catalogo</Link>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <Link className=" disabled navbar-p nav-link" to="/">Blog</Link>
                    </li> */}
                  </ul>
                </div>
                <div className="container-fluid  contenedor-boton d-flex justify-content-center">
                <button type="button" className="btn btn-danger btn-color"><a className="a" href="tel:+569%202215%204721"><i className="fas fa-phone"></i><span className="p-btn"> LLAMANOS AHORA</span></a></button>
                </div>
              </div>
            </nav>
        </div>
      </div>

    );
}

export default Navbar;