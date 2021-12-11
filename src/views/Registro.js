import Axios from "axios";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Registro() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");


    const submitButton = () => {
        Axios.post("http://localhost:3001/api/registro", {
            nombre: nombre, correo: correo, 
            password: password}).then(()=>{
                alert("Completado")
            });
    }

    return (
        <div>
            <div className="d-flex justify-content-center m-5">
                <div className="w-50">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                            <input type="text" name="nombre" onChange={(e) => {
                                setNombre(e.target.value);}} 
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Correo</label>
                            <input type="email" name="categoria" onChange={(e) => {
                                setCorreo(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Password</label>
                            <input type="password" name="marca" onChange={(e) => {
                                setPassword(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" onClick={submitButton} class="btn btn-primary"><Link to="/" >Submit</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
