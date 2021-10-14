import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';
import '../components/styles/Detalle.css'

export default function Detalle(props){

    let identificador = props.match.params.idef;
    console.log(identificador);
    const [searchTerm, setSearchTerm] = useState(identificador);

    console.log(searchTerm);
    

    const [nameList, setNameList] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response)=> {
        setNameList(response.data)
        });
    }, []);
    
    const [nameList1, setNameList1] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response)=> {
        setNameList1(response.data)
        });
    }, []);

    function dividir(descr){
        var caracteristicas = descr.split(",");
        return caracteristicas;
    }

    return(
        <div className="main-div d-flex justify-content-center">
            <div className = "row my-5 mx-lg-5 px-lg-5 w-75">
                            {nameList.filter((val)=>{
                            if(searchTerm == "") {
                                return val
                            }else if(val.id == searchTerm){
                                return val
                            }
                            }).map((val) => {
                            if(val.descripcion != null){
                            let desc = val.descripcion;
                            var caracteristicas = dividir(desc);
                            }
                            return (
                                <div>
                                <div className="row d-flex justify-content-center main" style={{backgroundColor:"#fff"}}>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 my-auto">
                                        <img className="" src={val.imagen}></img>
                                    </div>
                                    <div className="col-12 col-lg-5 m-3 my-lg-5 py-lg-5 px-lg-5">
                                        <h2 className="marca mb-0">{val.marca}</h2>
                                        <h1 className="nombre-producto">{val.nombre}</h1>
                                        <h2 className="tipo mb-3">{val.categoria}</h2>
                                        <ul>
                                            <li className="p-margin-detail">{caracteristicas[0]}</li>
                                            <li className="p-margin-detail">{caracteristicas[1]}</li>
                                            <li className="p-margin-detail">{caracteristicas[2]}</li>
                                            <li className="p-margin-detail">{caracteristicas[3]}</li>
                                            <li className="p-margin-detail">{caracteristicas[5]}</li>
                                            <li className="p-margin-detail">{caracteristicas[6]}</li>
                                            <li className="p-margin-detail">{caracteristicas[7]}</li>
                                            <li className="p-margin-detail">{caracteristicas[8]}</li>
                                            <li className="p-margin-detail">{caracteristicas[9]}</li>
                                            <li className="p-margin-detail">{caracteristicas[10]}</li>
                                        </ul>
                                        
                                        <p className="precio mt-3 mb-0 d-inline">{val.precio}<p className="d-inline iva">USD + IVA incluido</p></p>
                                    
                                        <p className="mb-4 agregado mt-0">INCLUYE INSTALACION</p>
                                        
                                        <div>
                                            <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn-detail me-3">COTIZAR</button></a>
                                            <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn2">MANUAL USUARIO</button></a>
                                        </div>
                                    
                                    </div>
                                </div>
                                
                                </div>
                
                
                    
                                );
                        })}
                    <h1 className="p-5 text-center titulo-news">OTROS PRODUCTOS SIMILARES</h1>
                                <div className = "row">
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                    </div>
                    </div>
                    
                    </div>
    );


}