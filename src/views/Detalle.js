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
        var caracteristicas = descr.split(";");
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
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 my-auto d-flex justify-content-center">
                                        <img className="img-detail img-fluid" src={val.imagen}></img>
                                    </div>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-12  m-3 my-lg-5 py-lg-5 px-lg-5">
                                        <h2 className="marca mb-0">{val.marca}</h2>
                                        <h1 className="nombre-producto">{val.nombre}</h1>
                                        <h2 className="tipo">{val.categoria}</h2>
                                        <div className="m-3 mb-2 ms-0">
                                        <a class="show-more" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Ver mas
                                        </a>
                                        <div class="collapse" id="collapseExample">
                                        <div>
                                        <ul>
                                        {caracteristicas.map((element)=>{
                                                return(
                                                    <li className="m-2  p-margin-detail">{element}</li>
                                                );
                                            })}
                                        </ul>
                                        </div>
                                        </div>
                                        </div>
                                        <p className="precio mb-0 d-inline">{val.precio}</p>
                                        <p className="d-inline iva"> IVA incluido</p>
                                        <p className="mb-4 agregado mt-0">INCLUYE INSTALACION</p>
                                        
                                        <div className="d-flex d-lg-inline justify-content-center">
                                            <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn me-lg-3">COTIZAR</button></a>
                                        </div>
                                        <div className="d-flex d-lg-inline justify-content-center mt-0">
                                            <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn2 mt-0">MANUAL DE USUARIO</button></a>
                                        </div>
                                        
                                    
                                    </div>
                                </div>
                                
                                </div>
                
                
                    
                                );
                        })}
                    <h1 className="p-5 text-center titulo-news">OTROS PRODUCTOS SIMILARES</h1>
                        <div className = "row">
                            <Card name="SPLIT MURO 12000 BTUH MURO VIRUS PROTECT ALTA EFICIENCIA B/CALOR R410A"
                                marca="ANWO"
                                precio="$481.600"
                                img="https://i.ibb.co/YDGzMGp/EAA-9000-BTUH-MURO-VIRUS-PROTECT-ALTA-EFICIENCIA-B-CALOR-R410-A.jpg"
                                ide="1"
                                />
                                
                            <Card name="CALDERA BAXI LUNA DUO-TEC MP +1,50"
                                marca="BAXI"
                                precio="$3.273.000"
                                img="https://i.ibb.co/vZX1gh4/Luna-Duotec-MP-1-50.jpg"
                                ide="22"
                                />

                            <Card name="RADIADOR DOBLE DK 500/2600"
                                marca="ANWO"
                                precio="$327.700"
                                img="https://i.ibb.co/4WHbBKd/RADIADOR-DOBLE-ANWO-DK-300-1000.jpg"
                                ide="137"
                            />
                        </div>
                    </div>
                    
                    </div>
    );


}