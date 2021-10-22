import React from 'react';
import Boton from './Boton.js';
import style from './styles/Texto.css';
import meinklima from './images/meinklima.png';

function Texto(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="row d-flex justify-content-center container-txt p-lg-5 m-lg-4 pt-4 my-5 m-3">
                <div className="col-lg-5 col-12 mt-lg-2">
                    <div className="m-4 mt-lg-0">
                        <div className="m-lg-0 mt-lg-0 div-boton">
                            <div>
                            <img className="logo mb-3 ms-4" src={meinklima} alt="logo meinklima"></img>
                            </div>
                            <div className="mt-4 ms-4">
                            <h3 className="mb-3">{props.subtitulo}</h3>
                            <p className="text me-lg-0 mb-4">{props.texto}</p>
                            </div>
                            <div className="d-flex justify-content-center mt-lg-3">
                            <button className="my-btn-txt">SABER MAS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-lg-7 col-12">
                    <img className="img-text img-fluid" src={props.img}/>
                </div>
        
            </div>
        </div>
    );
}

export default Texto;