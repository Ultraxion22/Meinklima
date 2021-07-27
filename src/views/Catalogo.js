import React from 'react';
import Franja from '../components/Franja';
import Texto2 from '../components/Texto2';
import Box from '../components/Box';



export default function Catalogo() {
    return (
        <div>
            <div className="row d-flex justify-content-center py-5">
                <button class="btn btn-danger btn-txt w-25 m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                CATEGORIAS
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                        </div>
                        <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9 col-lg-9 principal">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <img className="d-inline" style={{width:"500px"}} src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                    </div>
                    <div className="col-12 col-lg-6 m-4 m-lg-0 py-lg-5 my-lg-5">
                    <h1 className="m-3">CALDERA ANWO</h1>
                    <p className="me-lg-5 m-3 me-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <div className="ms-5 mt-4">
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                    </div>
                    <p className="me-lg-5 m-3 me-5 mt-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <div className="">
                    <button className="btn btn-danger btn-cat d-inline m-3"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button>
                    <button className="btn btn-danger btn-cat d-inline m-3"><a href="https://api.whatsapp.com/send/?phone=56922154721&text=Hola,%20dese%C3%B3%20agendar%20una%20visita%20t%C3%A9cnica" className="a"><p className="p-btn">AGENDAR VISITA</p></a></button> 
                    </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    );
}