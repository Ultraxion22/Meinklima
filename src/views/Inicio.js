import axios from "axios";
import Axios from "axios";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Registro() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [nameList, setNameList] = useState([])

    const submitButton = () => {
        Axios.get(`http://localhost:3001/api/verificar`, {params: {correo: correo, password: password}})
        .then(response => {
            return response.data;
            })
            .then(response=>{
                if(response.length>0){
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, {path: "/"});
                    cookies.set('nombre', respuesta.nombre, {path: "/"});
                    cookies.set('corre', respuesta.correo, {path: "/"});
                    window.location.href="/";
                }else{
                    alert("El usuario o contrasena son incorrectos");
                }
            })
            .catch(error=>{
                console.log(error)
            })
    }

    return(
        <div>
            <div className="d-flex justify-content-center m-5">
                <div className="w-50">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Correo</label>
                            <input type="text" name="correo" onChange={(e) => {
                                setCorreo(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Password</label>
                            <input type="text" name="password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" onClick={submitButton} class="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

