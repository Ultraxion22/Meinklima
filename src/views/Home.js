import React from 'react';
import Carrusel from '../components/Carrusel';
import GridFour from '../components/GridFour';
import CarruselEmpresas from '../components/CarruselEmpresas';
import SectionFour from '../components/SectionFour';
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
                <Carrusel />
                <CarruselEmpresas />
                <SectionFour />
                <GridFour />
                
            </div>
    );
}
