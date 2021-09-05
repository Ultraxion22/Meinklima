import React from 'react';
import { Link } from 'react-router-dom';

export default function Franja2() {

    
	

    return (
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid py-4" style={{backgroundColor:"#D60238"}}>
                <button class="navbar-toggler mx-auto btn-categorias" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <p className="btn-p">VER CATEGORIAS</p>
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="w-75 d-lg-flex justify-content-center">
                <ul className="navbar-nav"> 
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Calderas</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/catalogo">Aire Acondicionado</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Calefont</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Radiadores</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Termostatos</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Repuestos</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-categorias2" to="/">Otros productos</Link>
                    </li>
                  </ul>
                </div>
                <div className="m-3">
                    <button id="buttons"><i class="fas fa-shopping-cart"></i> MI CARRITO</button>
                </div>
                </div>
            </div>
        </nav>
            
          
    </div>
);

}