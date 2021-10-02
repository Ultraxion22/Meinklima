import React, { Component } from "react";
import style from "./styles/MultipleItems.css";
import Slider from "react-slick";
import anwo from './images/anwo.png';
import baxi from './images/baxi.png';
import cosmoplas from './images/cosmoplas.png';
import novaclima from './images/novaclima.png';
import rinnai from './images/rinnai.png';
import sime from './images/sime.png';


export default class MultipleItems extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="p-lg-5 p-5" style={{backgroundColor:"#E5E5E5"}} >
        <div>
        <Slider {...settings}>
          <div className="d-flex justify-content-center divcarrusel">
            <img className="imgcarrusel" src={anwo}></img>
          </div>
          <div className="divcarrusel d-flex justify-content-center">
          <img className="imgcarrusel" src={baxi}></img>
          </div>
          <div className="divcarrusel d-flex justify-content-center">
          <img className="imgcarrusel" src={cosmoplas}></img>
          </div>
          <div className="divcarrusel d-flex justify-content-center">
          <img className="imgcarrusel" src={novaclima}></img>
          </div>
          <div className="divcarrusel d-flex justify-content-center">
          <img className="imgcarrusel" src={rinnai}></img>
          </div>
          <div className="divcarrusel d-flex justify-content-center">
          <img className="imgcarrusel" src={sime}></img>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}