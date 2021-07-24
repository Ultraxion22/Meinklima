import React from 'react';
import Box from './Box';
import BoxButton from './BoxButton';

function BoxFlip(props) {
    return (
        <div>
            <div className = "row d-flex justify-content-center mx-5 mt-5">
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <BoxButton b1 = "INSTALACIÓN" />
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12  card-container">
                    <BoxButton />
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <BoxButton />
                </div>
                <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                    <BoxButton />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-box"><a className="a" href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><p className = "p-btn">QUIERO SOLICITAR UN SERVICIO</p></a></button>
            </div>
        </div>
        
    );
}

export default BoxFlip;