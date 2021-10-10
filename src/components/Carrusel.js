import React, { Component } from "react";
import Slider from "react-slick";
import "../components/styles/Carrusel.css"

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "container-carr",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <video className="container-carr" width="auto" height="auto" controls>
              <source src="https://www.youtube.com/embed/1HbZmkNzkk0" />
            </video>
          </div>
          <div>
            <video className="container-carr" width="100%" height="800px" controls>
              <source src="https://www.youtube.com/embed/1HbZmkNzkk0" />
            </video>
          </div>
          <div>
            <video className="container-carr" width="100%" height="800px" controls>
              <source src="https://www.youtube.com/embed/1HbZmkNzkk0" />
            </video>
          </div>
        </Slider>
      </div>
    );
  }
}