import React from 'react';
import Carrusel from '../components/Carrusel';
import SectionFour from '../components/SectionFour';
import "react-multi-carousel/lib/styles.css";
import MultipleItems from '../components/MultipleItems';
import Texto from '../components/Texto';
import TextoB from '../components/TextoB';
import Noticias from '../components/Noticias';
import Texto3 from '../components/Texto3';
import Primera from '../components/images/primera.png'

export default function Home() {
    return (
            <div className="animate__animated animate__fadeIn">
                <Carrusel />
                <MultipleItems />
                <SectionFour titulo1="Instalación"
                    texto1="Instalamos el equipo más apropiado para las necesidades de tu hogar. Puedes agendar una visita técnica con nosotros. "
                    titulo2="Mantenimiento"
                    texto2="Cada año, cada equipo necesita mantenimiento preventivo de acuerdo a lo estipulado por el fabricante y las normativas vigentes."
                    titulo3="Reparación"
                    texto3="En la actualidad los equipos han aumentado su sistema de seguridad, que bloquea en caso que ocurra algún problema en ella. Nosotros podremos detectar el imperfecto y solucionarlo."
                    titulo4="Proyecto"
                    texto4="Te ofrecemos nuestra ayuda para planear a la medida tu sistema de climatización de acuerdo a lo que requiera tu hogar."/>

                <Texto texto = "Nuestros técnicos están dedicados y entrenados para resolver todo tipo de inconvenientes. Tratamos que nuestros servicios sean los más eficiente, eficaz y seguro, cumpliendo con las expectativas que el cliente tiene hacia nosotros."
                    subtitulo="Como trabajamos?"
                    img={Primera}
                />
                <Texto3 />
                <Texto texto = "Meinklima SPA. Entrega garantía por sus servicios (instalación, mantenimiento, reparación) y del producto, a lo cual, los productos están sujetos de igual modo con la garantía del proveedor directo. Siendo nuestra empresa encargada de responder por el producto y/o el servicio. Cada servicio y productos tiene su tiempo de garantía. Para saber más, puede comunicarse con nosotros vía whatsapp o telefónica."
                    subtitulo="Garantía"/>
                <Noticias/>

            </div>
    );
}
