import React, { Component } from "react";
import Slider from "react-slick";
import Catalogo1 from "../components/images/catalogo1.png";
import Catalogo2 from "../components/images/catalogo2.png";
import Catalogo3 from "../components/images/catalogo3.png";
import Catalogo4 from "../components/images/catalogo4.png";
import { Link } from "react-router-dom";

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
      adaptiveHeight: true
    };
    return (
      <div className="mx-auto mb-1">
        <Slider {...settings}>
          <div className="carrusel-catalogo">
            <Link to="/catalogo/calderas"><img className="img-fluid img-carrusel-catalogo" src={Catalogo1}></img></Link>
         </div>
        <div className="carrusel-catalogo">
            <Link to="/catalogo/aires"><img className="img-fluid img-carrusel-catalogo" src={Catalogo2}></img></Link>
        </div>
        <div className="carrusel-catalogo">
          
                <Link to="/catalogo/calefon"> <img className="img-fluid img-carrusel-catalogo" src={Catalogo3}></img></Link>
                
        </div>
        <div className="carrusel-catalogo">
          
                <Link to="/catalogo/radiadores">  <img className="img-fluid img-carrusel-catalogo" src={Catalogo4}></img></Link>
               
        </div>
          
        </Slider>
      </div>
    );
  }
}