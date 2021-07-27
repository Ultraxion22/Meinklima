import React from 'react';
import Franja from '../components/Franja';
import Texto2 from '../components/Texto2';
import Box from '../components/Box';



export default function Proyecto() {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className = "row d-flex justify-content-center p-lg-5 pt-3 ms-lg-5 my-5 mx-3">
                    <div className = "col-lg-3 col-md-6 col-sm-6 ">
                        <p className = "front-p1">SERVICIO DE PROYECTO</p>
                        <h1 className = "front-h1">¿PLANEAS TENER CALEFACCIÓN EN TU HOGAR?</h1>
                        <p className= "front-p2">Te ofrecemos nuestra ayuda para planear a la medida tu sistema de calefacción de acuerdo a lo que requiera tu hogar.</p>
                        <p className="front-p2">Puedes <b>agendar una visita gratis</b> con nosotros para ayudarte en este proceso.</p>
                        <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDA TU VISITA</p></a></button>
                    </div>
                    <div className = "col-lg-4 col-md-12 my-auto">
                    <img alt ="imagen1" className = "img-fluid d-none d-lg-block" src= "https://meinklima.cl/wp-content/uploads/2021/04/como-utilizar-la-calefaccion-del-hogar-1024x683.jpg"/>
                    </div>
                    
            </div>
            <Franja h1="CONOCE NUESTRO PROCEDIMIENTO"
                class="franja-h1 py-3"
            />
            <Texto2 />
            <Franja h1="BENEFICIOS AL PREFERIRNOS"
                class="franja-h1 py-3"
            />
            <div className = "row d-flex justify-content-center mx-5 my-5 py-3">
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "MANTENIMIENTO"
                        p2 = "PRIMER MANTENIMIENTO PREVENTIVO GRATUITO"
                        class = "box-p3" 
                        class2 = "box-p"/>
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "SOPORTE TÉCNICO"
                    p2 = "SOPORTE TÉCNICO EN TERRENO Y VÍA TELEFÓNICA"
                    class = "box-p3"
                    class2 = "box-p"/>
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "GARANTÍA"
                        p2 = "GARANTÍA CUBIERTA POR EL FABRICANTE Y POR NOSOTROS"
                        class = "box-p3"
                        class2 = "box-p"/>
                </div>
            </div>
        </div>
    );
}