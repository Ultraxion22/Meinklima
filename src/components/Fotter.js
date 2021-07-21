import React, { useState } from 'react';

function Fotter() {
    return (
        <div>
        <div className="container-fotter d-flex justify-content-center">
            <div className = "row px-5 py-5 d-flex justify-content-center w-75">
                <div className = "col-lg-2 col-12 mb-5 mt-2 d-flex justify-content-center">
                    <div>
                    <h2 className = "heading-fotter">CONTACTO</h2>
                    <div className = "w-100" style={{marginBottom:"5px"}}>
                    <i className="fas fa-phone" style={{marginRight:"5px",color:"#D60238"}}></i>
                    <span className="p-fotter">+569 22154721</span>
                    </div>
                    <div className = "w-100" style={{marginBottom:"20px"}}>
                    <i className="fas fa-envelope" style={{marginRight:"5px",color:"#D60238"}}></i>
                    <span className="p-fotter">contacto@meinklima.cl</span>
                    </div>
                    <i className="fab fa-facebook-f fa-3x" style={{color:"#3b5998",marginRight:"10px"}}></i>
                    <i class="fab fa-whatsapp fa-3x" style={{color:"#25d366",marginRight:"10px"}}></i>
                    <i class="fab fa-linkedin-in fa-3x" style={{color:"#0082ca",marginRight:"10px"}}></i>
                    </div>
                </div>
                <div className = "col-lg-2 col-6 my-2"> 
                <h4 className = "heading-fotter">SERVICIOS</h4> 
                <p className="p-fotter">Instalacion</p>
                <p className="p-fotter">Mantencion</p>  
                <p className="p-fotter">Reparacion</p>  
                <p className="p-fotter">Proyectos</p>  
                </div>
                <div className = "col-lg-2 col-6 my-2">
                    <h4 className = "heading-fotter">INFORMACIÓN</h4>
                    <p className="p-fotter">Instalacion</p>
                    <p className="p-fotter">Mantencion</p>  
                    <p className="p-fotter">Reparacion</p>  
                    <p className="p-fotter">Proyectos</p>  
                </div>
                
            </div>
        </div>
        <div className = "container-copy">
            <div className = "d-flex justify-content-center">
                <p className = "p-copy">Copyright ©2021 Meinklima. Todos los derechos reservados. Prohibida su copia parcial o total bajo la ley nacional e internacional.</p>
            </div>
        </div>
        </div>

    );
}

export default Fotter;