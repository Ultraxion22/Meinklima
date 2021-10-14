import React from 'react';
import { withRouter } from 'react-router';
import style from './styles/Boton.css';



export default function Button(props) {

    return (
        <div>
            <button className="my-btn"> <a href={props.link}>{props.texto}</a></button>
        </div>
);

}