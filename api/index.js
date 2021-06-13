const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { response } = require('express');
const cors = require('cors');

var app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://35.238.247.250:27017/React', {useNewUrlParse:true, useUnifiedTopology:true});
const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log("Conexión exitosa");
});

conexion.once('error', (err)=>{
    console.log("Conexión fallida", err.message);
});

app.get('/', (req, res)=>{
    res.send("Hola");

});

app.listen(port, ()=>{
    console.log(`Servidor funcionando en el puerto:  ${port}`);
});