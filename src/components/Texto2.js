import React from 'react';


function Texto2() {
    return (
        <div className = "row justify-content-center container-row2 my-auto">
            <div className = "col-lg-6 col-md-12 container-icons justify-content-center">
                <div className = "txt2-div-icon">
                    <i class="far fa-calendar-check fa-2x" style={{color:"#D60238"}}></i>
                </div>
                <div className = "txt2-div-icon2">
                    <i class="far fa-list-alt fa-2x" style={{color:"#D60238"}}></i>
                </div>
                <div className = "txt2-div-icon3">
                    <i class="far fa-handshake fa-2x" style={{color:"#D60238"}}></i>
                </div>
            </div>

            <div className = "col-lg-6 col-md-12 container-txt2 justify-content-center">
                <p className = "txt-tittle">Planeación</p>
                <p className = "p-txt2">De acuerdo a tus necesidades, planeamos a medida tu calefacción ideal.</p>
                <p className = "txt-tittle">Ejecución</p>
                <p className = "p-txt2">Tu sistema de calefacción es instalado con nuestros protocolos de trabajo, teniendo en cuenta la seguridad, eficiencia y ahorro para tu hogar.</p>
                <p className = "txt-tittle">Entrega</p>
                <p className = "p-txt2">Terminado el proyecto, realizamos un seguimiento de tu calefacción, para posteriormente ver el mantenimiento preventivo.</p>

            </div>
            <div className = "col-lg-6 col-md-12 my-auto txt2-div-img">
                <img className = "txt-img d-none d-lg-block" src= "https://meinklima.cl/wp-content/uploads/2021/04/new-project-4.jpg"/>
            </div>
        </div>
    );
}

export default Texto2;