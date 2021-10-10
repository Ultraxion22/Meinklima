import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';
import style from '../components/styles/Catalogo.css';
import CarruselCatalogo from '../components/CarruselCatalogo';

export default function Catalogo() {

    const [searchTerm, setSearchTerm] = useState('')

    const [nameList, setNameList] = useState([])
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response)=> {
        setNameList(response.data)
        });
    }, []);

    function handleBtns(e){
        setSearchTerm(e.target.value);
    }
    return (
            <div>
                <h1 className="m-5 mb-0 text-center titulo-news">PRODUCTOS DESTACADOS</h1> 
                <CarruselCatalogo />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-2 m-3 main " style={{backgroundColor:"#fff"}}>
                        <div className="d-flex justify-content-center p-3">
                            <h1 className="">FILTROS</h1>
                        </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="d-flex justify-content-center">
                        <div className="w-75">
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
                                    />
                                );
                            })}
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                
                        
                
            </div>
        )
}