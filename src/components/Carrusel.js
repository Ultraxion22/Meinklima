import React, { Component } from "react";
import Slider from "react-slick";
import "../components/styles/Carrusel.css"
import SplitMuro from "../components/images/split_muro.png"
import AireAcondicionado from "../components/images/aire_acondicionado.png"
import CalderaMural from "../components/images/caldera_mural.png"
import Climatizacion from "../components/images/climatizacion.png"

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "container-carr",
      arrows:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="img-carrusel" src={AireAcondicionado}></img>
          </div>
          <div>
          <img className="img-carrusel" src={CalderaMural}></img>
          </div>
          <div>
          <img className="img-carrusel" src={SplitMuro}></img>
          </div>
          <div>
          <img className="img-carrusel" src={Climatizacion}></img>
          </div>
        </Slider>
      </div>
    );
  }
}