import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavbarCatalogo.css';

export default function Franja2() {

    
	

    return (
    <div>
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid py-4" style={{backgroundColor:"#D60238"}}>
                <button class="navbar-toggler mx-auto toggler-navbarCatalogo" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <p className="btn-navbarCatalogo">VER CATEGORIAS</p>
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="w-75 d-lg-flex justify-content-center">
                <ul className="navbar-nav"> 
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Calderas</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/catalogo">Aire Acondicionado</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Calefont</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Radiadores</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Termostatos</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Repuestos</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/">Otros productos</Link>
                    </li>
                  </ul>
                </div>
                <div className="m-3">
                    <button id="buttons-navbarCatalogo"><i class="fas fa-shopping-cart"></i> MI CARRITO</button>
                </div>
                </div>
            </div>
        </nav>
            
          
    </div>
);

}