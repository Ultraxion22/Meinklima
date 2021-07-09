import React, { useState } from 'react';

function BoxFlip() {
    return (
        <div>
            <div className = "row justify-content-center boxFlip-container">
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p className="box-p">INSTALACION</p>
                            </div>
                            <div className="flip-card-back">
                                <button className="btn box-btn">PRESIONA AQUI</button>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12  card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p className="box-p2">MANTENIMIENTO PREVENTIVO</p>
                            </div>
                            <div className="flip-card-back">
                                <button className="btn box-btn">PRESIONA AQUI</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p className="box-p">REPARACION</p>
                            </div>
                            <div className="flip-card-back">
                                <button className="btn box-btn">PRESIONA AQUI</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p className="box-p">PROYECTOS</p>
                            </div>
                            <div className="flip-card-back">
                                <button className="btn box-btn">PRESIONA AQUI</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-box"><a className="a" href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><p className = "p-btn">QUIERO SOLICITAR UN SERVICIO</p></a></button>
            </div>
        </div>
        
    );
}

export default BoxFlip;