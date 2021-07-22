import React from 'react';


function Texto2() {
    return (
        <div>
            <div className = "row mx-5 my-5 d-flex justify-content-center">
                <div className = "col-lg-1 col-md-1 col-sm-1 col-1 me-4 container-icons">
                    <div className="txt2-div-icon d-flex justify-content-center">
                        <i className="far fa-calendar-check fa-2x" style={{color:"#D60238"}}></i>
                    </div>
                    <div className="txt2-div-icon2 d-flex justify-content-center">
                        <i className="far fa-list-alt fa-2x" style={{color:"#D60238"}}></i>
                    </div>
                    <div className="txt2-div-icon3 d-flex justify-content-center">
                        <i className="far fa-handshake fa-2x" style={{color:"#D60238"}}></i>
                    </div>
                </div>

                <div className = "col-10 col-md-2 col-sm-2 col-lg-2">
                    <p className = "txt-tittle">Planeación</p>
                    <p className = "p-txt2">De acuerdo a tus necesidades, planeamos a medida tu calefacción ideal.</p>
                    <p className = "txt-tittle">Ejecución</p>
                    <p className = "p-txt2">Tu sistema de calefacción es instalado con nuestros protocolos de trabajo, teniendo en cuenta la seguridad, eficiencia y ahorro para tu hogar.</p>
                    <p className = "txt-tittle">Entrega</p>
                    <p className = "p-txt2">Terminado el proyecto, realizamos un seguimiento de tu calefacción, para posteriormente ver el mantenimiento preventivo.</p>
                </div>
                <div className = "col-lg-4 d-none d-lg-block">
                    <img alt="imagen2" className = "txt-img" src= "https://meinklima.cl/wp-content/uploads/2021/04/new-project-4.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Texto2;