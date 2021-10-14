import React from 'react';
import Button from './Boton';
import '../components/styles/Card.css';

export default function Card (props) {
    return (
        <div class="col-lg-4 my-2">
            <div class="card">
                <div className="d-flex justify-content-center">
                <img src={props.img} class="img-card-catalogo" alt="..."/>
                </div>
                <div class="card-body">
                    <h2 class="card-title">{props.name}</h2>
                    <h2 class="card-marca">Marca: {props.marca} </h2>
                    <p class="card-price">Precio Lista: {props.precio} USD + IVA incluido</p>
                    <div class="d-grid gap-2">
                    <a href={`/product/${props.ide}`}><button className="btn-news">SABER MAS</button></a>
                     
                    </div>
                </div>
            </div>
        </div>
    );
}