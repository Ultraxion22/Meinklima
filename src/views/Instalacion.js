import React from 'react';
import BoxFlip from '../components/BoxFlip';
import Franja from '../components/Franja';
import Box from '../components/Box';


export default function Instalacion() {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className = "row d-flex justify-content-center mt-3 mb-3 me-lg-5 mx-3">
                    <div className = "col-lg-3 col-md-12 my-auto">
                        <img alt ="imagen1" className = "front-img d-none d-lg-block" src= "https://i.ibb.co/S5sKL8S/CALDERA-MURAL-MIXTA-ECO-CONDENS-32-37-1.jpg" alt="CALDERA-MURAL-MIXTA-ECO-CONDENS-32-37-1"/>
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-6 txt-container">
                        <p className = "front-p1">SERVICIO DE INSTALACIÓN</p>
                        <h1 className = "front-h1">¿NECESITAS INSTALAR UNA CALDERA EN TU HOGAR?</h1>
                        <p className= "front-p2">Instalamos la caldera más apropiada para las necesidades de tu hogar. Puedes agendar una visita técnica gratuita con nosotros.</p>
                        <button className="btn btn-danger btn-txt"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDA TU VISITA</p></a></button>
                    </div>
            </div>
            <Franja h1 = "CONOCE NUESTRO PROCEDIMIENTO"
                    class = "w-50 franja-h1" />
            <div className = "row d-flex justify-content-center mx-5 mt-5">
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <Box p1 = "PRIMERA ETAPA"
                            p2 = "VISITA TÉCNICA"
                            class = "box-p"
                            class2 = "box-p" />
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12  card-container">
                        <Box p1 = "SEGUNDA ETAPA"
                            p2 = "PLANEACÍON"
                            class = "box-p"
                            class2 = "box-p"
                            />
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <Box p1 = "TERCERA ETAPA"
                            p2 = "EJECUCIÓN"
                            class = "box-p"
                            class2 = "box-p"
                            />
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <Box p1 = "ULTIMA ETAPA"
                            p2 = "POST-VENTA"
                            class = "box-p"
                            class2 = "box-p"
                            />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-box"><a className="a" href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><p className = "p-btn">AGENDA TU VISITA</p></a></button>
                </div>
            <Franja h1 = "BENEFICIOS AL PREFERIRNOS"
                class="w-50 franja-h1" />
            <div className = "row d-flex justify-content-center mx-5 my-5 py-3">
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "MANTENIMIENTO"
                        p2 = "PRIMER MANTENIMIENTO PREVENTIVO GRATUITO"
                        class = "box-p3 text-start ps-3" 
                        class2 = "box-p"
                        />
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "SOPORTE TÉCNICO"
                    p2 = "SOPORTE TÉCNICO EN TERRENO Y VÍA TELEFÓNICA"
                    class = "box-p3 text-start ps-3" 
                    class2 = "box-p"
                />
                </div>
                <div className = "col-lg-2 col-md-6 col-sm-12 my-2">
                    <Box p1 = "GARANTÍA"
                        p2 = "GARANTÍA CUBIERTA POR EL FABRICANTE Y POR NOSOTROS"
                        class = "box-p3 text-start ps-3"
                        class2 = "box-p"
                        
                    />
                </div>
            </div>
        </div>
    );
}