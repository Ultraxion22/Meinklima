import React, { useState } from 'react';

function Franja(props) {
    return(
        <div className="franja">
            <div className = "franja-div-p">
                <p className = "franja-p">{props.p}</p>
            </div>
            <div className={props.class}>
                <h1 className="franja-h1">{props.h1}</h1>
            </div>
        </div>
    );
}

export default Franja;