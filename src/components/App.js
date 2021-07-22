import React from 'react';
import Navbar from './Navbar';
import Texto from './Texto';
import Simple from './Simple';
import Section from './Section';
import Franja from './Franja';
import BoxFlip from './BoxFlip';
import Simple2 from './Simple2';
import Texto2 from './Texto2';
import Fotter from './Fotter';
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";





function App() {
    return (
            <div>
                <Navbar />
                <Texto />
                <Section>
                    <Simple/>
                </Section>
                <Franja h1 = "SERVICIOS DE CALEFACCIÓN"

                />
                <BoxFlip />
                <Franja h1 = "EMPRESAS CON LAS CUALES TRABAJAMOS"
                />
                <Section>
                    <Simple2 />
                </Section>
                <Franja h1 = "¿SIENTES FRÍO EN TU HOGAR? LA CALEFACCIÓN TE ESPERA A LA PUERTA DE TU CASA"
                    p = "Proyecto de calefacción hogar"
                />
                <Texto2 />
                <Fotter />
            </div>
    );
}
export default App;