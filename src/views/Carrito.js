import axios from "axios";
import Axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Card from "../components/Card";

const cookies = new Cookies();

export default function Carrito() {

    const [nameList, setNameList] = useState([])
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/api/carrito', {params:{id: cookies.get('id')}}).then((response)=> {
        setNameList(response.data)
        });
    }, []);

    const realizarCompra = () =>{
        Axios.delete('http://localhost:3001/api/comprar', {params:{id_user: cookies.get('id')}});
        alert('Compra Realizada');
        window.location.href="/carrito";
    }
    return(
        <div>
            <div className="w-100">
                <h1 className="p-5 text-center titulo-news">CARRITO DE COMPRAS</h1>
            </div>
            <div className = "row">
                <ul class="list-group list-group-flush">
                    {nameList.filter((val)=>{
                        return val})
                        .map((val) => {
                        return (
                            <li class="list-group-item">
                                <div className="d-flex justify-content-center align-items-start">
                                    <img className="img-fluid" src={val.imagen}></img>
                                    <h2>{val.marca}</h2>
                                    <h2>{val.nombre}</h2>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="d-flex justify-content-center m-5">
            <button onClick={realizarCompra} className="my-btn-txt">Comprar</button>s
            </div>
        </div>
    );
}

