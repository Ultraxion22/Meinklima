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
                            <div id="carouselExampleDark" class="carousel carousel-dark slide m-auto" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active p-5 " data-bs-interval="10000">
                                        <div className="container-fluid mh-100">

                                        </div>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item p-5" data-bs-interval="2000">
                                    
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                    </div>
                                    <div class="carousel-item p-5">
                                        
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
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
