import React, { Component } from "react";
import Slider from "react-slick";

export default class CarruselNext extends Component{
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h1 className="titulo-b mb-3">ETAPA 1</h1>
            <p>{this.props.texto1}</p>
          </div>
          <div key={2}>
          <h1 className="titulo-b mb-3">ETAPA 2</h1>
            <p>{this.props.texto2}</p>
          </div>
          <div key={3}>
          <h1 className="titulo-b mb-3">ETAPA 3</h1>
            <p>{this.props.texto3}</p>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="my-btn m-3" onClick={this.previous}>
            Anterior 
          </button>
          <button className="my-btn m-3" onClick={this.next}>
            Siguiente
          </button>
        </div>
      </div>
    );
  }
}