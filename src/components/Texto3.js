import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';
import {Animated} from "react-animated-css";
import { useState } from 'react';
import CarruselNext from './CarruselNext.js';

function Texto3(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center container-txt p-lg-5 m-lg-4 pt-4 my-5" >
                <div className="d-flex justify-content-center col-lg-6 col-12 mt-lg-5 mb-4" >
                    <div>
                    <img className="img-text d-none d-lg-block my-auto" src="https://mantencioncaldera.cl/wp-content/uploads/2019/04/hogar-en-Las-Condes-con-Instalacion-Calefaccio%CC%81n-Central-Santiago.jpg" />
                    </div>
                </div>
                <div className="col-lg-6 col-12 mt-lg-4">
                    <div className="m-lg-4 mt-lg-0">
                        <div className="m-lg-4 mt-lg-0">
                            <img className="logo mb-3 " src={meinklima}></img>
                            <h3 className="mb-3">Procedimiento de instalacion</h3>
                            <div className="pe-lg-5">
                            <CarruselNext texto1 = "El cliente debe solicitar una visita técnica para que el técnico pueda realizar un estudio sobre su sistema de calefacción para darle la mejor opción para usted.Sabiendo los requerimientos, nos encagarmos que el producto instalado cumpla con todas las normas de seguridad, eficiencia energetica y de combustible y sobretodo de una grata experiencia"
                                texto2 = "El cliente debe solicitar una visita técnica para que el técnico pueda realizar un estudio sobre su sistema de calefacción para darle la mejor opción para usted.Sabiendo los requerimientos, nos encagarmos que el producto instalado cumpla con todas las normas de seguridad, eficiencia energetica y de combustible y sobretodo de una grata experiencia"
                                texto3 = "El cliente debe solicitar una visita técnica para que el técnico pueda realizar un estudio sobre su sistema de calefacción para darle la mejor opción para usted.Sabiendo los requerimientos, nos encagarmos que el producto instalado cumpla con todas las normas de seguridad, eficiencia energetica y de combustible y sobretodo de una grata experiencia"
                            />
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default Texto3;