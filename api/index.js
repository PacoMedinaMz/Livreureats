const express = require('express');
const mongoose = require('mongoose');
const { response } = require('express');
const cors = require('cors');

var app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://35.238.247.250:27017/Liv', {useNewUrlParse:true, useUnifiedTopology:true});
const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log("Conexión exitosa");
});

conexion.once('error', (err)=>{
    console.log("Conexión fallida", err.message);
});

//Definicion
const Usuario = mongoose.model('usuario',{nombre:String, apellidoMat:String, 
    apellidoPat:String, fecha:Date,sexo:String,tarjeta:String,dir:String,pass:String}, 'usuario');

const Producto = mongoose.model('producto', {nombre_producto:String, descripcion:String, categoria:String, precio:String}, 'producto');

app.get('/', (req, res)=>{
    res.send("Hola");

});

app.post('/insUsu', (req, res) =>{
    console.log(req);

    const usuario = new Usuario({
        nombre: req.body.nombre,
        apellidoMat:req.body.apellidoMat,
        apellidoPat:req.body.apellidoPat,
        fecha:req.body.fecha,
        sexo:req.body.sexo,
        tarjeta:req.body.tarjeta,
        dir:req.body.dir,
        pass:req.body.pass
    });
    //Mongoose
    
    usuario.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        console.log(req.body);
        //console.log(json);
        res.json({response: "exito"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.post('/insPro', (req, res) =>{
    console.log(req);

    const producto = new Producto({
        nombre_producto: req.body.nombre_producto, 
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio
    });
    //Mongoose
    
    producto.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        //console.log(req.body);
        //console.log(json);
        res.json({response: "exito"});
    }).catch(err =>{
        //res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.post('/buscar', (req, res) =>{
    console.log(req);

    const usuario = new Usuario({
        
    });
    //Mongoose
    
    usuario.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        console.log(req.body);
        //console.log(json);
        res.json({response: "exito"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.listen(port, ()=>{
    console.log(`Servidor funcionando en el puerto:  ${port}`);
});