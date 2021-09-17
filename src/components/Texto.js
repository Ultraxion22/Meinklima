import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';

function Texto(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center container p-lg-5 m-lg-5 pt-4 my-5">
                <div className="col-lg-5 col-12 mt-lg-4">
                    <div className="m-4 mt-lg-0">
                        <div className="m-lg-4 mt-lg-0">
                            <img className="logo mb-4" src={meinklima}></img>
                            <p className="text me-lg-3 mb-4">{props.texto}</p>
                            <div className="d-flex justify-content-center mt-lg-5 mb-5">
                            <Boton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-lg-6 col-12 mt-lg-5 mb-4">
                    <div>
                    <img className="img-text" src="https://mantencioncaldera.cl/wp-content/uploads/2019/04/hogar-en-Las-Condes-con-Instalacion-Calefaccio%CC%81n-Central-Santiago.jpg" />
                    </div>
                </div>
        
            </div>
        </div>
    );
}

export default Texto;