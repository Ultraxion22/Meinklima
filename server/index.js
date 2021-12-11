const express = require('express');
const app = express();
const bodyParser = require ('body-parser')
const cors = require("cors");
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "meinklima",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/usuarios", (req, res) => {
    const sqlSelect = "SELECT * FROM usuarios";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
    });
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/categorias/:categoria", (req, res) => {
    const categoria = req.params.categoria;
    const sqlSelect = "SELECT * FROM calderas WHERE categoria = ?";
    db.query(sqlSelect, categoria, (err, result) => {
        res.send(result);
    });
});

app.get("/api/search/:id", (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM calderas WHERE id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.post("/api/registro", (req, res) => {
    const nombre = req.body.nombre
    const correo = req.body.correo
    const contra = req.body.password
    const sqlInsert = "INSERT INTO usuarios (nombre, correo, contra) VALUES(?,?,?)"
    db.query(sqlInsert, [nombre, correo, contra], (err, result)=>{
        console.log(err);
    })
});

app.post("/api/insert", (req, res) => {
    const nombre = req.body.nombre
    const categoria = req.body.categoria
    const marca = req.body.marca
    const imagen = req.body.imagen
    const descripcion = req.body.descripcion
    const precio = req.body.precio

    const sqlInsert = "INSERT INTO calderas (nombre, categoria, marca, imagen, descripcion, precio) VALUES(?,?,?,?,?,?)"
    db.query(sqlInsert, [nombre, categoria, marca, imagen, descripcion, precio], (err, result)=>{
        console.log(result);
    })
    
});

app.get("/api/verificar", (req, res) => {
    const correo = req.query.correo;
    const contra = req.query.password;
    console.log(correo);
    console.log(contra)
    const sqlSelect = "SELECT * FROM usuarios WHERE correo = ? AND contra = ?";
    db.query(sqlSelect, [correo, contra], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

app.get("/api/carrito", (req, res) => {
    const id = req.query.id;
    console.log(id);
    const sqlSelect = "SELECT * FROM calderas WHERE id IN (SELECT id_producto FROM ordenes WHERE id_user = (SELECT id FROM usuarios WHERE id = ?))";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.post("/api/agregar", (req, res) => {
    const id_user = req.body.id_user
    const id_producto = req.body.id_producto
    const sqlInsert = "INSERT INTO ordenes (id_user, id_producto) VALUES(?,?)"
    db.query(sqlInsert, [id_user, id_producto], (err, result)=>{
        console.log(err);
    })
});

app.delete("/api/comprar", (req,res) =>{
    const id_user = req.query.id_user;
    const sqlDelete = "DELETE FROM ordenes WHERE id_user = ?";
    db.query(sqlDelete, [id_user], (err, result) =>{
        console.log(err)
    })
});


app.listen(3001, () =>{
    console.log("running on port 3001");
});