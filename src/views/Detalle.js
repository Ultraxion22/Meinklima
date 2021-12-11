import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';
import '../components/styles/Detalle.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Detalle(props){
    
    const [idUser, setIdUser] = useState("");
    const [idProd, setIdProd] = useState("");
    const [searchTerm, setSearchTerm] = useState('')
    const [nameList, setNameList] = useState([]);
    let identificador = props.match.params.idef;

    useEffect(()=>{
        setIdUser(cookies.get('id'));
        setIdProd(identificador);
    })

    console.log(idUser);
    console.log(idProd);

    useEffect(()=> {
        Axios.get(`http://localhost:3001/api/search/${identificador}`).then((response)=> {
        setNameList(response.data)
        });
    }, []);

    function dividir(descr){
        var caracteristicas = descr.split(";");
        return caracteristicas;
    }

    const agregarCarrito = () => {
        if(cookies.get('id')){
            Axios.post("http://localhost:3001/api/agregar", {
            id_user: idUser, id_producto: idProd, 
            });
            alert("Agregado Correctamente");
        }
        else{
            alert("Debe iniciar sesion para agregar al carro");
        }
        
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
                                            <button onClick={agregarCarrito} className="my-btn-txt me-lg-3">AGREGAR CARRITO</button>
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