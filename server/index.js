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

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/calderas", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas WHERE categoria='CALDERAS'";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
app.get("/api/aires", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas WHERE categoria='AIRE ACONDICIONADO'";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
app.get("/api/radiadores", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas WHERE categoria='RADIADOR'";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
app.get("/api/calefon", (req, res) => {
    const sqlSelect = "SELECT * FROM calderas WHERE categoria='CALEFON'";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});




app.listen(3001, () =>{
    console.log("running on port 3001");
});