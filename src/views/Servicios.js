import React from 'react';
import BoxFlip from '../components/BoxFlip';
import Franja from '../components/Franja';
import Texto2 from '../components/Texto2';


export default function Servicios() {
    return (
        <div className="animate__animated animate__fadeIn">
            <Franja h1 = "SERVICIOS DE CALEFACCIÓN"
                class ="" />
            <BoxFlip b1 = "INSTALACION"
                    b2 = "MANTENIMIENTO PREVENTIVO"
                    b3 = "REPARACION"
                    b4 = "PROYECTOS"
                    button = "CONOCER MAS"
            />
            <Texto2 />
        </div>
    );
}