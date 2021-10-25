import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';

function Texto(props) {
    return (
        <div className="d-flex justify-content-center container-fluid">
            <div className="row d-flex justify-content-center container-txt p-lg-5 m-lg-4 pt-lg-4 my-5 m-3">
                <div className="col-lg-5 col-12 mt-lg-2 textos-card">
                    <div className="m-4 mt-lg-0">
                        <div className="m-lg-0 mt-lg-0 div-boton">
                            
                            <div>
                            <img className="logo mb-3 ms-4" src={meinklima} alt="logo meinklima"></img>
                            </div>
                            <div className="mt-4 ms-4">
                            <h3 className="mb-3">{props.subtitulo}</h3>
                            <p className="text me-lg-0 mb-4">{props.texto}</p>
                            </div>
                            <div className="d-flex justify-content-center mt-lg-3">
                            <button className="my-btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a">SOLICITAR SERVICIOS</a></button>
                            </div>
                         
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-lg-7 col-12 ">
                    <img className="img-text img-fluid d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" src={props.img}/>
                </div>
        
            </div>
        </div>
    );
}

export default Texto;