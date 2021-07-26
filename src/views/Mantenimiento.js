import React from 'react';
import Franja from '../components/Franja';
import Box from '../components/Box';


export default function Instalacion() {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className = "row d-flex justify-content-center my-5 me-lg-5 mx-3">
                    <div className = "col-lg-4 col-md-12 my-auto">
                        <img alt ="imagen1" className = "img-fluid d-none d-lg-block" src= "https://meinklima.cl/wp-content/uploads/2021/04/como-utilizar-la-calefaccion-del-hogar-1024x683.jpg"/>
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-6">
                        <p className = "front-p1">SERVICIO DE MANTENIMIENTO</p>
                        <h1 className = "front-h1">REALIZAMOS EL MANTENIMIENTO PREVENTIVO ANUAL DE TU CALDERA</h1>
                        <p className= "front-p2">Cada año, el sistema de calefacción necesita mantenimiento preventivo de acuerdo a lo estipulado por el fabricante y las normativas vigentes. Nosotros realizamos todas las acciones para que tu caldera esté en óptimas condiciones</p>
                        <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDA TU VISITA</p></a></button>
                    </div>
            </div>
            <div className="franja row d-flex justify-content-center">
                <div className = "col-lg-3 pt-3 pb-3">
                    <h1 className="franja2-h1 p-5">EL MANTENIMIENTO PREVENTIVO ANUAL ES...</h1>
                </div>
                <div className = "col-lg-3 d-flex justify-content-center">
                    <ol className="franja-lista my-3 mx-3">
                        <li className="my-5">MANTENER EN ÓPTIMAS CONDICIONES</li>
                        <li className="my-5">PREVENIR INCONVENIENTES</li>
                        <li className="my-5">AUMENTAR SU VIDA ÚTIL</li>
                    </ol>
                </div>
            </div>
            <div className = "row d-flex justify-content-center mx-5 my-5 py-3">
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "CALDERAS MURALES"
                        p2 = "CALDERAS MIXTA Y SÓLO CALEFACCIÓN"
                        class = "box-p2" 
                        class2 = "box-p"
                        />
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "CALDERAS DE PISO"
                    p2 = "CALDERAS A GAS Y A PETRÓLEO"
                    class = "box-p2"
                    class2 = "box-p"
                />
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "SISTEMA DE CALEFACCIÓN"
                        p2 = "FUNCIONAMIENTO Y PREVENCIÓN"
                        class = "box-p2"
                        class2 = "box-p2"
                    />
                </div>
            </div>
        </div>
    );
}