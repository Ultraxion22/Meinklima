import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavbarCatalogo.css';

export default function Franja2() {
    
    const categoria = (category) => {
        axios.post(`http://localhost:3001/api/categorias/${category}`);
    };

    return (
    <div>
        <nav class="navbar navbar-expand-lg p-0">
            <div class="container-fluid py-4" style={{backgroundColor:"#D60238"}}>
                <button id="buttons-navbarCatalogo" class="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                VER CATEGORIAS
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="w-75 d-lg-flex justify-content-center">
                <ul className="navbar-nav"> 
                    <li className="nav-item p-3">
                        <Link onClick={() => {categoria("CALDERAS")}} className="nav-navbarCatalogo" to="/catalogo/calderas">Calderas</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/catalogo/aires">Aire Acondicionado</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/catalogo/radiadores">Radiadores</Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link className="nav-navbarCatalogo" to="/catalogo/calefon">Calefón</Link>
                    </li>
                  </ul>
                </div>

                </div>
            </div>
        </nav>
            
          
    </div>
);

}