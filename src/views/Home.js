import React from 'react';
import Carrusel from '../components/Carrusel';
import SectionFour from '../components/SectionFour';
import "react-multi-carousel/lib/styles.css";
import MultipleItems from '../components/MultipleItems';
import Texto from '../components/Texto';
import TextoB from '../components/TextoB';
import Noticias from '../components/Noticias';
import Texto3 from '../components/Texto3';

export default function Home() {
    return (
            <div className="animate__animated animate__fadeIn">
                <Carrusel />
                <MultipleItems />
                <SectionFour />
                <Texto texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    subtitulo="Como trabajamos?"
                />
                <Texto3 />
                <Texto texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                <Noticias/>
            </div>
    );
}
