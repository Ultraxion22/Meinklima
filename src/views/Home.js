import React from 'react';
import Texto from '../components/Texto';
import Simple from '../components/Simple';
import Section from '../components/Section';
import Franja from '../components/Franja';
import BoxButton from '../components/BoxButton';
import Simple2 from '../components/Simple2';
import Texto2 from '../components/Texto2';
import Section2 from '../components/Section2';
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";



export default function Home() {
    return (
            <div className="animate__animated animate__fadeIn">
                <Texto />
                <div className="m-lg-4">
                    <Section>
                        <Simple />
                    </Section>
                </div>
                <Franja h1 = "SERVICIOS DE CALEFACCIÓN"
                    class ="w-50 franja-h1" />
                <div className = "row d-flex justify-content-center ms-4 me-1 mt-5">
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <BoxButton b1 = "INSTALACIÓN"
                            button = "PRESIONA AQUI"
                            class = "box-p"
                            />
                            
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12  card-container">
                        <BoxButton b1 = "MANTENIMIENTO PREVENTIVO"
                            button = "PRESIONA AQUI"
                            class = "box-p2"
                        />

                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <BoxButton b1 = "REPARACIÓN"
                            button = "PRESIONA AQUI"
                            class = "box-p"
                        />
                    </div>
                    <div className = "col-lg-3 col-md-6 col-sm-12 card-container">
                        <BoxButton b1 = "PROYECTOS"
                            button = "PRESIONA AQUI"
                            class = "box-p"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-box"><a className="a" href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><p className = "p-btn">QUIERO SOLICITAR UN SERVICIO</p></a></button>
                </div>
                <Franja h1 = "EMPRESAS CON LAS CUALES TRABAJAMOS"
                    class = "w-50 franja-h1" />
                <Section2>
                    <Simple2 />
                </Section2>
                <Franja h1 = "¿SIENTES FRÍO EN TU HOGAR? LA CALEFACCIÓN TE ESPERA A LA PUERTA DE TU CASA"
                    p = "Proyecto de calefacción hogar"
                    class="w-50 franja2-h1"
                />
                <Texto2 />
            </div>
    );
}
