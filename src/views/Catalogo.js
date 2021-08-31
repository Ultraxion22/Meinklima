import React from 'react';
import Card from '../components/Card'
import Franja from '../components/Franja'




export default function Catalogo() {
    return (
        <div>
            <div className="row d-flex justify-content-center my-lg-5">
                <div className="d-flex justify-content-center mt-4">
                    <h1 className="text-white px-5 py-3 text-center"style={{backgroundColor:"#D60238"}}>PRODUCTO DESTACADO</h1>
                </div>
                <div className="col-lg-9 m-lg-5 pb-lg-5">
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                        <img className="d-inline img-fluid" style={{left:"200px"}} src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                    </div>
                    <div className="col-12 col-lg-6 m-3 my-lg-5 py-lg-5">
                    <h1 className="mx-5">CALDERA ANWO</h1>
                    <p className="mx-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <div className="ms-lg-5 mt-lg-4 d-flex justify-content-center">
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    </div>
                    <div className="d-flex justify-content-center">
                    <button className="btn btn-danger btn-cat d-inline m-3 "><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button>
                    <button className="btn btn-danger btn-cat d-inline m-3 "><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button> 
                    </div>
                    </div>
                 </div>
                </div>
                <div className ="my-3">
                    <Franja h1 = "OTROS PRODUCTOS"
                    class ="w-50 franja-h1 my-3"  />
                </div>
                <div className = "row my-5 mx-lg-5 px-lg-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}