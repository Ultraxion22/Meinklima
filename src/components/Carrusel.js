import React, { Component } from "react";
import Slider from "react-slick";

export default class Carrusel extends Component {
    render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className="container-carr">
        <Slider {...settings}>
          <div>
          <iframe className="frame" 
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="1000px"
                src="https://www.youtube.com/embed/1HbZmkNzkk0">
            </iframe>
          </div>
          <div>
          <iframe   id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="750px"
                src="https://www.youtube.com/embed/1HbZmkNzkk0">
            </iframe>
          </div>
          <div>
          <iframe   id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="750px"
                src="https://www.youtube.com/embed/1HbZmkNzkk0">
            </iframe>
          </div>
        </Slider>
      </div>
    );
  }
}