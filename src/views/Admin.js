import Axios from "axios";
import React, { useState } from 'react';


export default function Home() {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");

    const submitButton = () => {
        Axios.post("http://localhost:3001/api/insert", {
            nombre: nombre, categoria: categoria, 
            marca: marca, imagen: imagen, 
            descripcion: descripcion, precio: precio}).then(()=>{
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
                                setNombre(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Categoria</label>
                            <input type="text" name="categoria" onChange={(e) => {
                                setCategoria(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Marca</label>
                            <input type="text" name="marca" onChange={(e) => {
                                setMarca(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Imagen</label>
                            <input type="text" name="imagen" onChange={(e) => {
                                setImagen(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                            <input type="text" name="descripcion" onChange={(e) => {
                                setDescripcion(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Precio</label>
                            <input type="text" name="precio" onChange={(e) => {
                                setPrecio(e.target.value);
                            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" onClick={submitButton} class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
