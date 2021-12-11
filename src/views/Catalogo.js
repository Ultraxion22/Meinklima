import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';
import style from '../components/styles/Catalogo.css';
import CarruselCatalogo from '../components/CarruselCatalogo';
import { Link } from 'react-router-dom';

export default function Catalogo() {

    const [searchTerm, setSearchTerm] = useState('')

    const [nameList, setNameList] = useState([])
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response)=> {
        setNameList(response.data)
        });
    }, []);
    const categorias = (categoria) => {
        Axios.get(`http://localhost:3001/api/categorias/${categoria}`).then((response)=> {
        setNameList(response.data)
        });

    }
    return (
            <div>
                <div>
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
                                    <button onClick={() => {categorias('CALDERAS')}} className='btn-danger'>Calderas</button>
                                </li>
                                <li className="nav-item p-3">
                                    <button onClick={() => {categorias('AIRE ACONDICIONADO')}} className='btn-danger'>Aires acondicionados</button>
                                </li>
                                <li className="nav-item p-3">
                                    <button onClick={() => {categorias('RADIADOR')}} className='btn-danger'>Calefons</button>
                                </li>
                                <li className="nav-item p-3">
                                    <button onClick={() => {categorias('CALEFON')}} className='btn-danger'>Radiadores</button>
                                </li>
                            </ul>
                            </div>

                            </div>
                        </div>
                    </nav>
                        
                    
                </div>
                <CarruselCatalogo />
                <div className="row d-flex justify-content-center m-0 p-0">
                    
                    <div className="col-lg-10">
                    <div className="d-flex justify-content-center">
                        <div className="w-100">
                        <div class="input-group my-4">
                            <input 
                            type="text" 
                            className="form-control" 
                            onChange={event => {
                                setSearchTerm(event.target.value)}} 
                            />
                            <button class="input-group-text" id="inputGroup-sizing-default"><i class="fas fa-search"></i></button>
                        </div>
                        
                        </div>
                    </div>
                    <div className = "row">
                            {nameList.filter((val)=>{
                                if(searchTerm == "") {
                                    return val
                                }else if(val.nombre.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                                }).map((val) => {
                                return (
                                    <Card name = {val.nombre}
                                        desc = {val.categoria} 
                                        marca = {val.marca}
                                        ide = {val.id}
                                        precio = {val.precio}
                                        img = {val.imagen}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                </div>
                
                        
                
            </div>
        )
}