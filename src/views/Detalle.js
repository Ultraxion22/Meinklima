import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';

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
    

    return(
        <div className="background-detail">
            <div className = "row my-5 mx-lg-5 px-lg-5 background-detail">
                            {nameList.filter((val)=>{
                            if(searchTerm == "") {
                                return val
                            }else if(val.id == searchTerm){
                                return val
                            }
                            }).map((val) => {
                            return (
                                <div className="d-flex justify-content-center">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                                        <img className="d-inline img-fluid" style={{left:"200px"}} src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                                    </div>
                                    <div className="col-12 col-lg-6 m-3 my-lg-5 py-lg-5">
                                    <h1 className="mx-5">{val.nombre}</h1>
                                    <p className="mx-5">{val.categoria}</p>
                                    <div className="ms-lg-5 mt-lg-4">
                                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                                    </div>
                                    <div className="mx-5">
                                    <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn">COTIZAR</button></a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                
                
                    
                                );
                        })}
                    </div>
                    </div>
    );


}