import React from 'react';
import MultipleItems from '../components/MultipleItems';
import Texto from '../components/Texto';
import Texto3 from '../components/Texto3';
import Primera from '../components/images/primera.png'

export default function Instalacion() {
    return (
        <div>
        <Texto3 />
        <MultipleItems />
        <Texto texto = "Nuestros técnicos están dedicados y entrenados para resolver todo tipo de inconvenientes. Tratamos que nuestros servicios sean los más eficiente, eficaz y seguro, cumpliendo con las expectativas que el cliente tiene hacia nosotros."
                    subtitulo="Como trabajamos?"
                    img={Primera}
                />
        </div>
    );
}