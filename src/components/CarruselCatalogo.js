import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1500,
    };
    return (
      <div className="mx-auto mb-1">
        <Slider {...settings}>
          <div>
          <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                    <div className="row p-lg-5 m-lg-5  m-3 p-3 mb-3 main" style={{backgroundColor:"#fff"}}>
                     
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 me-lg-5 d-flex justify-content-center">
                        <img className="img-catalogo" src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                        </div>
                    <div className="col-12 col-lg-6">
                        <h3>ANWO</h3>
                        <h1 >CALDERA BAXI DUO-TEC 28</h1>
                        <h3>CALDERA MIXTA CONDENSACION</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <div className="m-lg-3">
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        </div>
                        <h1 className="m-3">1256USD + IVA</h1>
                        <div className="d-flex justify-content-center d-lg-inline">
                        <button  className="my-btn m-lg-2 m-2">SOLICITAR VISITA</button>
                        <button  className="my-btn m-lg-2 m-2">CONOCER MAS</button> 
                        </div>
                    </div>
                    </div>
                    </div>
        </div>
        </div>
        <div>
        <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                    <div className="row p-lg-5 m-lg-5  m-3 p-3 mb-3 main" style={{backgroundColor:"#fff"}}>
                     
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 me-lg-5 d-flex justify-content-center">
                        <img className="img-catalogo" src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                        </div>
                    <div className="col-12 col-lg-6">
                        <h3>ANWO</h3>
                        <h1 >CALDERA BAXI DUO-TEC 28</h1>
                        <h3>CALDERA MIXTA CONDENSACION</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <div className="m-lg-3">
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        </div>
                        <h1 className="m-3">1256USD + IVA</h1>
                        <div className="d-flex justify-content-center d-lg-inline">
                        <button  className="my-btn m-lg-2 m-2">SOLICITAR VISITA</button>
                        <button  className="my-btn m-lg-2 m-2">CONOCER MAS</button> 
                        </div>
                    </div>
                    </div>
                    </div>
        </div>
        </div>
        <div>
          <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                    <div className="row p-lg-5 m-lg-5  m-3 p-3 mb-3 main" style={{backgroundColor:"#fff"}}>
                     
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 me-lg-5 d-flex justify-content-center">
                        <img className="img-catalogo" src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png"></img>
                        </div>
                    <div className="col-12 col-lg-6">
                        <h3>ANWO</h3>
                        <h1 >CALDERA BAXI DUO-TEC 28</h1>
                        <h3>CALDERA MIXTA CONDENSACION</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <div className="m-lg-3">
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        <i class="fas fa-thumbs-up fa-2x m-2 icon-catalogo"></i>
                        </div>
                        <h1 className="m-3">1256USD + IVA</h1>
                        <div className="d-flex justify-content-center d-lg-inline">
                        <button  className="my-btn m-lg-2 m-2">SOLICITAR VISITA</button>
                        <button  className="my-btn m-lg-2 m-2">CONOCER MAS</button> 
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
          
        </Slider>
      </div>
    );
  }
}