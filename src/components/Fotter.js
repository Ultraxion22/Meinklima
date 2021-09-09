import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Fotter.css'

function Fotter() {
    return (
        <div>
        <div className="container-fotter d-flex justify-content-center">
            <div className = "row px-5 py-5 d-flex justify-content-center w-75">
                <div className = "col-lg-2 col-12 mb-5 mt-2 d-flex justify-content-center mx-3">
                    <div>
                    <h2 className = "heading-fotter">CONTACTO</h2>
                    <div className = "w-100" style={{marginBottom:"5px"}}>
                    <i className="fas fa-phone" style={{marginRight:"5px",color:"#D60238"}}></i>
                    <a href="tel:+569%202215%204721"><span className="p-fotter">+569 22154721</span></a>
                    </div>
                    <div className = "w-100" style={{marginBottom:"20px"}}>
                    <i className="fas fa-envelope" style={{marginRight:"5px",color:"#D60238"}}></i>
                    <a href="mailto:contacto@meinklima.cl"><span className="p-fotter">contacto@meinklima.cl</span></a>
                    </div>
                    <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica"><i class="fab fa-whatsapp fa-3x" style={{color:"#25d366",marginRight:"10px"}}></i></a>
                    
                    </div>
                </div>
                <div className = "col-lg-2 col-6 my-2"> 
                <h4 className = "heading-fotter">SERVICIOS</h4> 
                <Link to="/instalaciones"><p className="p-fotter my-3">Instalacion</p></Link>
                <Link to="/mantenimiento"><p className="p-fotter my-3">Mantencion</p></Link> 
                <Link to="/reparaciones"><p className="p-fotter my-3">Reparaciones</p></Link> 
                <Link to="/proyectos"><p className="p-fotter my-3">Proyectos</p></Link>  
                </div>
                <div className = "col-lg-2 col-6 my-2">
                    <h4 className = "heading-fotter">INFORMACIÓN</h4>
                    <a href="https://drive.google.com/file/d/1ZCpXnCBMYCjLLBrDKnBM8156nRQF5U0s/view?usp=sharing"><p className="p-fotter my-3">Términos y condiciones</p></a>
                    <a href="https://drive.google.com/file/d/1A6TBEEY6xaDrnK-u4eWdgSxKAgq3Ruww/view?usp=sharing"><p className="p-fotter my-3">Privacidad</p></a>
                    <a href="https://drive.google.com/file/d/1-K3PyU9Us8vuxrRIFUoi32at_31ABgao/view?usp=sharing"><p className="p-fotter my-3">Garantía</p></a>
                    <a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20soy%20t%C3%A9cnico"><p className="p-fotter my-3">Descuento técnico</p></a>
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