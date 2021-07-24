import React from 'react';

function Franja(props) {
    return(
        <div>
        <div className="franja">
            <div className = "pt-4">
                <p className = "franja-p">{props.p}</p>
            </div>
            <div className = "pb-4 d-flex justify-content-center">
                <h1 className="w-50 franja-h1">{props.h1}</h1>
            </div>
        </div>
        </div>
    );
}

export default Franja;