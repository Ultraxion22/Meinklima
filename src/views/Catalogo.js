import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Card from '../components/Card';
import style from '../components/styles/Catalogo.css';



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
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-2 m-3 main" style={{backgroundColor:"#D60238"}}>
                        <div className="d-flex justify-content-center p-3">
                            <h1 className="">FILTRO</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 main m-3 p-5" style={{backgroundColor:"#fff"}}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-4 col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                            <img className="d-inline img-fluid" style={{left:"200px"}} src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                        </div>
                        <div className="col-12 col-lg-6">
                        <h3>MARCA</h3>
                        <h1 >CALDERA ANWO</h1>
                        <h3>CATEGORIA</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <div className=" d-flex justify-content-center">
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        </div>
                        <div>
                        <button value = "anwo" onClick={handleBtns} className="my-btn">SOLICITAR VISITA</button>
                        <button value = "anwo" onClick={handleBtns} className="my-btn m-3">CONOCER MAS</button> 
                        </div>
                        </div>
                    </div>
                    </div>
                    

                </div>
                
            </div>
        )
}