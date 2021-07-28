import React from 'react';
import { Link } from 'react-router-dom';

export default function Box(props) {
    return (
    <div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className={props.class}>{props.b1}</p>
                </div>
                <div className="flip-card-back">
                    <button className="btn box-btn"><Link className="link-box" to={props.ruta}>{props.button}</Link></button>   
                </div>
            </div>
        </div>
    </div>

);

}

