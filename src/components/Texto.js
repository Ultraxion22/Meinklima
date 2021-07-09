import React from 'react';

function Texto() {
    return (
        <div className = "row d-flex justify-content-center container-row">
            <div className = "col-lg-6 col-md-12 container-txt">
                <p className = "front-p1">PREOCUPADOS POR TU CALEFACCIÓN</p>
                <h1 className = "front-h1">SERVICIOS DE CALEFACCIÓN A LA MEDIDA DE TU HOGAR</h1>
                <p className= "front-p2">Tenemos un equipo de especialistas calificados para brindar servicios de instalación, mantenimiento preventivo y reparación en calderas.</p>
                <p className= "front-p3">Te ayudamos en todo el proceso.</p>
                <div className="d-flex justify-content-center">
                <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button>
                </div>
                <p className= "front-p4 d-none d-sm-block d-sm-none d-md-block">* PRESTAMOS SERVICIOS EN TODA LA REGIÓN METROPOLITANA.</p>
                <p className = "front-p5 d-none d-sm-block d-sm-none d-md-block">* VISITA TÉCNICA GRATUITA.</p>
            </div>
            <div className = "col-lg-6 col-md-12 my-auto">
                <img className = "front-img d-none d-lg-block" src= "https://meinklima.cl/wp-content/uploads/2021/04/Navien-aquaplus-fondo.png"/>
            </div>
        </div>
    );
}

export default Texto;