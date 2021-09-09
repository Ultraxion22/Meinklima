import React from 'react';
import gridFour from './styles/gridFour.css';


function GridFour() {
    return (
        <div className="container-service d-lg-flex justify-content-center">
            <div className="container block-service d-lg-flex justify-content-center">
                <div className="row d-lg-flex">
                    <div className="col block-parrafo-left">
                        <img src="https://i.ibb.co/6m2rc4h/Mein-Klima-Alta-Resolucion.jpg" alt="Mein-Klima-Alta-Resolucion"></img>
                        <p>Tu sistema de calefacción es instalado con nuestros protocolos 
                            de trabajo, teniendo en cuenta la seguridad, eficiencia y 
                            ahorro para tu hogar. <br></br><br></br>
                            
                            Puedes conocer mas de nuestros servicios en nuestro sitio web</p>
                        <div className="block-btn">
                            <a className="btn-services">CONOCER MAS</a>
                        </div>
                    </div>
                    <div className="col block-parrafo-right">
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/1HbZmkNzkk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridFour;