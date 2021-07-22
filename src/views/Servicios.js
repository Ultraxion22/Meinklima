import React from 'react';
import Navbar from '../components/Navbar';
import Franja from '../components/Franja';
import Fotter from '../components/Fotter';

export default function Servicios() {
    return (
        <div>
            <Navbar />
            <Franja h1 = "SERVICIOS DE CALEFACCIÓN" />
            <Fotter />
        </div>
    );
}