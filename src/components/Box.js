import React from 'react';

export default function Box(props) {
    return (
    <div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="box-p">{props.p1}</p>
                </div>
                <div className="flip-card-back">
                    <p className ={props.class}>{props.p2}</p>  
                </div>
            </div>
        </div>
    </div>
);

}
