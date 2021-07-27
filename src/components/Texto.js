import React from 'react';

function Texto(props) {
    return (
            <div>
                <div className = "row d-flex justify-content-center m-3 mt-3 mb-3 ms-lg-5 py-lg-4 ps-lg-5">
                    <div className = "col-lg-4 col-md-6 col-sm-6 txt-container">
                        <p className = "front-p1">PREOCUPADOS POR TU CALEFACCIÓN</p>
                        <h1 className = "front-h1">SERVICIOS DE CALEFACCIÓN A LA MEDIDA DE TU HOGAR</h1>
                        <p className= "front-p2">Tenemos un equipo de especialistas calificados para brindar servicios de instalación, mantenimiento preventivo y reparación en calderas.</p>
                        <p className= "front-p3">Te ayudamos en todo el proceso.</p>
                        <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button>
                        <p className= "front-p4 d-none d-sm-block d-sm-none d-md-block">* PRESTAMOS SERVICIOS EN TODA LA REGIÓN METROPOLITANA.</p>
                    </div>
                    <div className = "col-lg-3 col-md-12 my-auto">
                        <img alt ="imagen1" className = "front-img d-none d-lg-block" src= "https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"/>
                    </div>
                </div>
            </div>
    );
}

export default Texto;