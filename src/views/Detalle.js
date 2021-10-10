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
                            return (
                                <div>
                                <div className="row d-flex justify-content-center main" style={{backgroundColor:"#fff"}}>
                                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 my-auto">
                                        <img className="" src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                                    </div>
                                    <div className="col-12 col-lg-5 m-3 my-lg-5 py-lg-5">
                                        <h4>ANWO</h4>
                                        <h1>CALDERA BAXI DUO-TEC 28</h1>
                                        <h4>CALDERA MIXTA CONDENSACION</h4>
                                        <p className="p-margin-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h1 className="m-3">1256USD + IVA</h1>
                                        <h4 className="m-3 mt-0">INCLUYE INSTALACION</h4>
                                        <div>
                                            <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><button className="my-btn me-3">COTIZAR</button></a>
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