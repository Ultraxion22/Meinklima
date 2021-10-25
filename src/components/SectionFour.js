import React from 'react';
import sectionFour from './styles/SectionFour.css';
import Boton from './Boton.js';

function SectionFour(props) {
    return (
        <div>
        <div className="section-four d-flex justify-content-center">
            <div className="container-section">
                <div className="row d-flex justify-content-center my-lg-4">
                    <div className="recuadro col-lg-3 col-9 my-2 mx-3 p-4">
                        <div className="p-4 div-boton">
                            <div>
                            <h2 className="titulo">{props.titulo1}</h2>
                            <p className="texto">{props.texto1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="recuadro col-lg-3 col-9 my-2 mx-3 p-4">
                        <div className="p-4 div-boton">
                            <div>
                            <h2 className="titulo">{props.titulo2}</h2>
                            <p className="texto">{props.texto2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="recuadro col-lg-3 col-9 my-2 mx-3 p-4">
                        <div className="p-4 div-boton">
                            <div>
                            <h2 className="titulo">{props.titulo3}</h2>
                            <p className="texto">{props.texto3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="recuadro col-lg-3 col-9 my-2 mx-3 p-4">
                        <div className="p-4 div-boton">
                            <div>
                            <h2 className="titulo">{props.titulo4}</h2>
                            <p className="texto">{props.texto4}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-5 mb-5 mt-3">
                    <div className="col d-flex justify-content-center">
                        <button className="my-btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a">SOLICITAR SERVICIOS</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SectionFour;