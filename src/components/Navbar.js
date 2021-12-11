import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Navbar() {

  const [botonActivo, setBotonActivo] = useState(false);

  const cerrarSesion = () => {
      cookies.remove('id', {path: "/"});
      cookies.remove('correo', {path: "/"});
      cookies.remove('nombre', {path: "/"});
      window.location.href="/";
  }

  useEffect(()=>{
    if(cookies.get('id')){
      setBotonActivo(true);
    }
  })

  return(
      <div>
        <div>
            <nav className="navbar navbar-expand-xl navbar-dark background-navbar">
              <div className="container-fluid px-lg-5 px-3">
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
                        <li className="mx-3 my-0"><Link className="navbar-p dropdown-item" to="/instalaciones">Instalacion</Link></li>
                        <li className="mx-3 my-3"><Link className="navbar-p dropdown-item" to="/mantenimiento">Mantenimiento</Link></li>
                        <li className="mx-3 my-3"><Link className="navbar-p dropdown-item" to="/reparaciones">Reparaciones</Link></li>
                        <li className="mx-3 my-2"><Link className="navbar-p dropdown-item" to="/proyectos">Proyectos</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item px-3 py-2">
                        <Link className="navbar-p nav-link" to="/catalogo">Catalogo</Link>
                    </li>
                  </ul>
                  <div class="nav-button">
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-3 bd-highlight" id="btn-nav" style={{backgroundColor:"rgb(214, 2, 56)"}}><a className="a" href="tel:+922154721" >Llamar Ahora</a></div>
                    </div>
                  </div>
                  <div hidden={botonActivo}  class="nav-button">
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-3 bd-highlight" id="btn-nav" style={{backgroundColor:"rgb(214, 2, 56)"}}><Link className="a" to="/registro">Registro</Link></div>
                    </div>
                  </div>
                  <div hidden={botonActivo}  class="nav-button">
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-3 bd-highlight" id="btn-nav" style={{backgroundColor:"rgb(214, 2, 56)"}}><Link className="a" to="/login">Iniciar Sesion</Link></div>
                    </div>
                  </div>
                  <div hidden={!botonActivo} class="nav-button">
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-3 bd-highlight" id="btn-nav" style={{backgroundColor:"rgb(214, 2, 56)"}}><button onClick={() => {cerrarSesion()}} className='btn-danger'>Cerrar Sesion</button></div>
                    </div>
                  </div>
                  <div hidden={!botonActivo} class="nav-button">
                    <div class="d-flex flex-row bd-highlight mb-2">
                      <div class="p-3 bd-highlight" id="btn-nav" style={{backgroundColor:"rgb(214, 2, 56)"}}><Link className="a" to="/carrito">Carrito</Link></div>
                    </div>
                  </div>
                  <div hidden={!botonActivo} >
                    <p className="franja-p m-1 fw-bold" style={{color:"#232323", fontWeight: "600", paddingLeft: "10px"}}>Bienvenido {cookies.get('nombre')}</p>
                  </div>
                </div>
              </div>
            </nav>
        </div>
      </div>

    );
}

export default Navbar;