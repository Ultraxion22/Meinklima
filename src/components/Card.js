import React from 'react';

export default function Card (props) {
    return (
        <div class="col-lg-3 my-2">
            <div class="card">
                <img src="https://i.ibb.co/HXc9ndH/Navien-aquaplus-fondo.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h5 class="card-text">Marca: {props.marca} </h5>
                    <h5 class="card-text">Tiro: {props.tiro} </h5>
                    <h5 class="card-text">Caudal: {props.caudal} </h5>
                    <p class="card-text">{props.desc}</p>
                    <div class="d-grid gap-2">
                    <button class="btn btn-danger" type="button">COTIZAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}