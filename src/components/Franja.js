import React, { useState } from 'react';

function Franja(props) {
    return(
        <div>
        <div className="franja">
            <div className = "pt-4 d-flex justify-content-center">
                <p className = "franja-p">{props.p}</p>
            </div>
            <div className = "pb-4 d-flex justify-content-center">
                <h1 className="w-75 text-center franja-h1">{props.h1}</h1>
            </div>
        </div>
        </div>
    );
}

export default Franja;