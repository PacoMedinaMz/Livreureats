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
    apellidoPat:String, fecha:Date,sexo:String,tarjeta:String,dir:String,pass:String,  id:Number}, 'usuario');

const Producto = mongoose.model('producto', {nombre_producto:String, descripcion:String, categoria:String,
    precio:String, restaurante:String, id:Number}, 'producto');

const Pedido = mongoose.model('pedido', {id:Number, fecha:String, productos:Object, costoEnvio:Number}, 'pedido');
    

app.get('/', (req, res)=>{
    res.send("Hola");

});

app.post('/insUsu', (req, res) =>{
    console.log(req);

    const usuario = new Usuario({
        id:req.body.id,
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
        id:req.body.id,
        nombre_producto: req.body.nombre_producto, 
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio,
        restaurante: req.body.restaurante
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
    
    Producto.find({ nombre_producto: req.body.buscar, restaurante: req.body.restaurante})
    .then(doc=>{
        console.log("Shi che puedo");
        res.json({response: doc});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
        console.log("No che pudo");
    });
});

app.post('/busProd', (req, res) =>{
    console.log(req);
    
    Producto.find({ nombre_producto: req.body.buscar})
    .then(doc=>{
        console.log("Shi che puedo");
        res.json({response: doc});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
        console.log("No che pudo");
    });
});

app.delete('/deleteProd', (req, res) =>{
    console.log(req);
    Producto.findByIdAndDelete({id:req.body.id})
    
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.delete('/deleteUsua', (req, res) =>{
    console.log(req);
    Usuario.findByIdAndDelete({id:req.body.id})
    
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.post('/carrito', (req, res) =>{
    console.log(req);
    let now= new Date();

    const pedido = new Pedido({
        id:Math.round(Math.random() * (10000 - 1) + 1), 
        fecha: now.toDateString(), 
        productos:req.body.productos, 
        costoEnvio:Math.round(Math.random() * (30 - 10) + 10)
    });
    //Mongoose
  
    pedido.save()
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