import React from 'react';
import TextoB from '../components/TextoB';
import MultipleItems from '../components/MultipleItems';
import Texto from '../components/Texto';

export default function Instalacion() {
    return (
        <div>
        <TextoB />
        <MultipleItems />
        <Texto texto="hola" />
        </div>
    );
}