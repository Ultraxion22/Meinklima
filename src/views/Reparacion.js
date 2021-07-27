import React from 'react';
import Franja from '../components/Franja';



export default function Reparacion() {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className = "row d-flex justify-content-center p-lg-5 pt-3 ms-lg-5 my-5 mx-3">
                    <div className = "col-lg-4 col-md-6 col-sm-6 ">
                        <p className = "front-p1">SERVICIO DE REPARACIÓN</p>
                        <h1 className = "front-h1">TE ENTENDEMOS, ES UN DOLOR DE CABEZA ESTOS INCONVENIENTES</h1>
                        <p className= "front-p2">Al pasar los años, tu caldera puede sufrir algunos inconvenientes mecánicos, es habitual. Nuestras aguas contienen impurezas que entorpecen el sistema de calefacción y tu caldera, <b>para eso estamos, para ayudarte y solucionar esté inconveniente.</b></p>
                        <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDA TU VISITA</p></a></button>
                    </div>
                    <div className = "col-lg-4 col-md-12 my-auto">
                    <img alt ="imagen1" className = "img-fluid d-none d-lg-block" src= "https://meinklima.cl/wp-content/uploads/2021/04/1-1-1024x683.jpg"/>
                    </div>
                    
            </div>
            <Franja h1="¿QUE PUEDES HACER?"
                class="franja-h1 py-3"
            />
            <div className = "row d-flex justify-content-center mx-lg-5 mx-1 my-5 py-4">
            <div className="flip-card-container">
                <div className="flip-card2">
                    <div className="flip-card-inner">
                        <div className="flip-card-front p-5">
                            <h1 className="p-5 m-3">MANTENER LA CALMA</h1>
                        </div>
                        <div className="flip-card-back p-5">
                            <h1 className="text-start">TRANQUILO(A), SUELE PASAR.</h1>
                            <p className="text-start">En la actualidad las calderas han aumentado su sistema de seguridad, que bloquea en caso que ocurra algún problema en ella. Nosotros podremos detectar el imperfecto y solucionarlo.</p>  
                        </div>
                    </div>
                </div>
            </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-box"><a className="a" href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><p className = "p-btn">VISITA URGENTE</p></a></button>
                </div>
            </div>
        </div>
    );
}