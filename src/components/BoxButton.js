import React from 'react';

export default function Box(props) {
    return (
    <div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="box-p">{props.b1}</p>
                </div>
                <div className="flip-card-back">
                    <button className="btn box-btn">{props.button}</button>   
                </div>
            </div>
        </div>
    </div>

);

}

