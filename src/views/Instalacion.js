import React from 'react';
import TextoB from '../components/TextoB';
import MultipleItems from '../components/MultipleItems';
import Texto from '../components/Texto';

export default function Instalacion() {
    return (
        <div>
        <TextoB texto1="dante1"
            texto2="dante2"
            texto3="dante3"
        />
        <MultipleItems />
        <Texto texto="hola" />
        </div>
    );
}