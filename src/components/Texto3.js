import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';
import {Animated} from "react-animated-css";
import { useState } from 'react';
import CarruselNext from './CarruselNext.js';
import Pasos from '../components/images/pasos.png'

function Texto3(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center container-txt p-lg-5 m-lg-4 pt-4 my-5" >
                <div className="d-flex justify-content-center col-lg-8 col-12" >
                    <div className="d-flex justify-content-end">
                    <img className="img-text3 d-none d-lg-block my-auto" src={Pasos} />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="">
                        <div className="ms-4">
                            <img className="logo mb-3 " src={meinklima}></img>
                            <h3 className="mb-3">Procedimiento de instalacion</h3>
                            <div className="pe-lg-5">
                            <CarruselNext texto1 = "El cliente solicita una visita técnica para que el técnico que vaya a su hogar pueda realizar el estudio de que producto o/y servicio es el más adecuado para usted a sus necesidades o inconveniente."
                                texto2 = "El técnico debe realizar el servicio contratado los más eficiente, eficaz y seguro además el técnico tiene la obligación de explicar el procedimiento a realizar, contestar dudas y, por último, la puesta en marcha. "
                                texto3 = "El cliente quedara sujeto a nuestra garantía como también a la garantía del proveedor, ofreciendo por parte de nosotros una relación con el cliente, asistencia técnica telefónica y en terreno."
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