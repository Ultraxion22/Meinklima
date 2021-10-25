import React, { Component } from "react";
import Slider from "react-slick";
import "../components/styles/Carrusel.css"
import SplitMuro from "../components/images/split_muro.png"
import AireAcondicionado from "../components/images/aire_acondicionado.png"
import CalderaMural from "../components/images/caldera_mural.png"
import Climatizacion from "../components/images/climatizacion.png"
import { Link } from "react-router-dom";

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      arrows:false,
      dots: false,
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
          <div className="container-fluid">
            <img className="img-carrusel img-fluid" src={AireAcondicionado}></img>
          </div>
          <div className="container-fluid">
            <img className="img-carrusel img-fluid" src={CalderaMural}></img>
          </div>
          <div className="container-fluid">
          <img className="img-carrusel img-fluid" src={SplitMuro}></img>
          </div>
          <div className="container-fluid">
          <img className="img-carrusel img-fluid" src={Climatizacion}></img>
          </div>
        </Slider>
      </div>
    );
  }
}