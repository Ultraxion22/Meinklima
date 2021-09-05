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

                <div className="container-fluid post-portada">
                    <div className="d-flex justify-content-center title-post p-3">
                        <h2 className="p-3">Lo que te ofrecemos al alcance de un click</h2>
                    </div>
                    <div class="row p-5 pt-0 justify-content-center">
                        <div class="col-lg-4 posters">
                            <h2 className="p-5 pb-3 m-0 d-lg-block d-md-block d-none">¿Quisieras adquirir un producto?</h2>
                            <h1 className="p-5 pt-3 m-0 d-lg-block d-none">Lo que te ofrecemos a alcance de un click
                            Lo que te ofrecemos a alcance de un click</h1>
                        </div>
                        <div class="col-lg-4 p-3 posters" style={{backgroundColor:"#D60238"}}>
                            <h2 className="pt-5 pe-5 ps-5"style={{color:"#fff"}}>¿Necesitas asistencia técnica en tu hogar?</h2>
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="container-fluid h-100"><h1 className="p-5 mt-5 mb-5 text-center">SERVICIOS A LA MEDIDA DE SU HOGAR</h1></div>
                                </div>
                                <div class="carousel-item">
                                <div className="container-fluid h-100"><h1 className="p-5 mt-5 mb-5 text-center">SERVICIOS A LA MEDIDA DE SU HOGAR</h1></div>

                                </div>
                                <div class="carousel-item">
                                <div className="container-fluid h-100"><h1 className="p-5 mt-5 mb-5 text-center">SERVICIOS A LA MEDIDA DE SU HOGAR</h1></div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    );
}
