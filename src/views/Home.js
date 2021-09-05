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
                <div className="m-lg-1">
                    <Section>
                        <Simple />
                    </Section>
                </div>
                <div class="container-fluid post-portada">
                    <div class="row justify-content-md-center title-post">
                        <h2>Lo que te ofrecemos a alcance de un click</h2>
                    </div>
                    <div class="row justify-content-md-center post">
                        <div class="col col-md-6 posters">
                            <h2>¿Quisieras adquirir un producto?</h2>
                        </div>
                        <div class="col col-md-6 posters" style={{backgroundColor:"#D60238"}}>
                            <h2 style={{color:"#fff"}}>¿Necesitas asistencia técnica en tu hogar?</h2>
                        </div>
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
