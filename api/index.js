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
    apellidoPat:String, fecha:Date,sexo:String,tarjeta:String,dir:String,pass:String, id:String}, 'usuario');

const Producto = mongoose.model('producto', {nombre_producto:String, descripcion:String, categoria:String,
        precio:String, id:String, restaurante:String}, 'producto');

const Pedido = mongoose.model('pedido', {id:String, fecha:String, productos:Object, costoEnvio:Number}, 'pedido');

const Restaurante = mongoose.model('restaurante', {nombre:String, ubicacion:String, des:String, horario:String, 
    id:String, passRes:String}, 'restaurante');

const Personal = mongoose.model('personal', {idShort:String,nombre:String,apellidoPat:String,
        apellidoMat:String, sexo:String}, 'personal'); 


app.get('/', (req, res)=>{
    res.send("Hola");

});

//Altas

//Alta de usuario
app.post('/insUsu', (req, res) =>{
    console.log(req);

    const usuario = new Usuario({
        id:Math.round(Math.random() * (10000 - 1) + 1),
        nombre: req.body.nombre,
        apellidoMat:req.body.apellidoMat,
        apellidoPat:req.body.apellidoPat,
        fecha:req.body.fecha,
        sexo:req.body.sexo,
        tarjeta:req.body.tarjeta,
        dir:req.body.dir,
        pass:req.body.pass
    });
    
    usuario.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        console.log(req.body);
        res.json({response: "exito"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

//Alta de productos
app.post('/insPro', (req, res) =>{
    console.log(req);

    const producto = new Producto({
        nombre_producto: req.body.nombre_producto, 
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio,
        id: req.body.id,
        restaurante: req.body.restaurante
    });
    
    producto.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        res.json({response: "exito"});
    }).catch(err =>{
        console.log("Error: ", err.message);
    });
});

//Altas de pedidos
app.post('/carrito', (req, res) =>{
    console.log(req);
    let now= new Date();

    const pedido = new Pedido({
        id:Math.round(Math.random() * (10000 - 1) + 1), 
        fecha: now.toDateString(), 
        productos:req.body.productos, 
        costoEnvio:Math.round(Math.random() * (30 - 10) + 10)
    });
  
    pedido.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        console.log(req.body);
        res.json({response: "exito"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

//Alta de restaurantes
app.post('/insRes', (req, res) =>{
    console.log(req);

    const restaurante = new Restaurante({
        nombre:req.body.nombre, 
        ubicacion:req.body.ubicacion, 
        des:req.body.des, 
        horario:req.body.horario, 
        id:Math.round(Math.random() * (10000 - 1) + 1), 
        passRes:req.body.passRes
    });
    
    restaurante.save()
    .then(doc=>{
        console.log("Dato insertado", doc);
        res.json({response: "exito"});
    }).catch(err =>{
        console.log("Error: ", err.message);
    });
});

//Consultas
//Consulta de producto en especifico de un restaurante
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

//Busqueda general de producto
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


//Dar de baja
//Borrar un producto
app.delete('/deleteProd', (req, res) =>{
    console.log(req.body);

    Producto.deleteOne({id:req.body.id})
    .then(doc=>{
        //console.log("Dato eliminado", doc);
        //res.json({response: "Eliminado"});
    }).catch(err =>{
        //res.json({response: "error"});
        //console.log("Error: ", err.message);
    });
});

//Eliminar un usuario
app.delete('/deleteUsua', (req, res) =>{
    console.log(req.body);

    Usuario.deleteOne({id:req.body.id})
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

//Eliminar un restaurante
app.delete('/deleteRes', (req, res) =>{
    console.log(req);

    Restaurante.deleteOne({id:req.body.id})
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

//Actualizar tablas
//En caso de no necesitar un campo, solo comentalo

app.put('/actUsua', (req, res) =>{
    console.log(req.body);

    Usuario.updateOne({id:req.body.id}, {$set:{
        nombre:req.body.nombre, 
        apellidoMat:req.body.apellidoMat, 
        apellidoPat:req.body.apellidoPat, 
        //fecha:req.body.fecha,
        sexo:req.body.sexo,
        tarjeta:req.body.tarjeta,
        dir:req.body.dir,
        pass:req.body.pass,
    }})
    .then(doc=>{
        console.log("Dato actualizado", doc);
        res.json({response: "ok"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

// app.put('/actProd', (req, res) =>{
//     console.log(req.body);

//     Producto.updateOne({id:req.body.id}, {$set:{
//         nombre_producto:req.body.nombre_producto, 
//         descripcion:req.body.descripcion, 
//         categoria:req.body.categoria,
//         precio:req.body.precio, 
//         restaurante:req.body.restaurante,
//     }})
//     .then(doc=>{
//         console.log("Dato actualizado", doc);
//         res.json({response: "ok"});
//     }).catch(err =>{
//         res.json({response: "error"});
//         console.log("Error: ", err.message);
//     });
// });

app.put('/actRes', (req, res) =>{
    console.log(req.body);

    Restaurante.updateOne({id:req.body.id}, {$set:{
        nombre:req.body.nombre, 
        ubicacion:req.body.ubicacion, 
        des:req.body.des, 
        horario:req.body.horario, 
        passRes:req.body.passRes
    }})
    .then(doc=>{
        console.log("Dato actualizado", doc);
        res.json({response: "ok"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.listen(port, ()=>{
    console.log(`Servidor funcionando en el puerto:  ${port}`);
});
app.get('/busProductos', (req, res) =>{
    console.log(req);
    
    Producto.find()
    .then(doc=>{
        console.log("Shi che puedo");
        res.json({data: doc});
    }).catch(err =>{
        res.json({data: "error"});
        console.log("Error: ", err.message);
        console.log("No che pudo");
    });
});


app.get('/delProd/:id', (req, res) =>{
    console.log(req);
    var id = req.params.id  
    id.toString();
    console.log(id);

    Producto.remove({id:id})
    
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.post('/actProd/:id', (req, res) =>{
    console.log(req);
    const id = req.params.id
    console.log(id);
    
    const producto = new Producto({
        nombre_producto: req.body.nombre_producto, 
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        precio: req.body.precio,
        id: req.body.id,
        restaurante: req.body.restaurante
    });
    Producto.updateOne({id:producto.idShort}, {$set:{nombre_producto:producto.nombre_producto,
    descripcion:producto.descripcion, categoria:producto.categoria,
    precio:producto.precio, restaurante:producto.restaurante}})
    .then(doc=>{
        console.log("Dato actualizado", doc);
        res.json({response: "ok"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});


// apis personal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.post('/insPersonal', (req, res) =>{
    console.log(req);
    if(req.body.sexo==""){
        req.body.sexo="Hombre";
    }

    const personal = new Personal({
        id: req.body.idShort,
        nombre: req.body.nombre,
        apellidoPat: req.body.apellidoPat,
        apellidoMat:req.body.apellidoMat,
        sexo: req.body.sexo
    });
    //Mongoose
    
    personal.save()
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

app.post('/actPersonal/:id', (req, res) =>{
    console.log(req);
    if(req.body.sexo==""){
        req.body.sexo="Hombre";
    }
    const id = req.params.id
    console.log(id);
    
    const personal = new Personal({
        id: req.body.id,
        nombre: req.body.nombre,
        apellidoPat: req.body.apellidoPat,
        apellidoMat:req.body.apellidoMat,
        sexo: req.body.sexo
    });
    Personal.updateOne({id:id}, {$set:{nombre:personal.nombre,
    apellidoPat:personal.apellidoPat, apellidoMat:personal.apellidoMat,
    sexo:personal.sexo}})
    
    .then(doc=>{
        console.log("Dato actualizado", doc);
        res.json({response: "ok"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});

app.get('/busPersonal', (req, res) =>{
    console.log(req);
    
    Personal.find()
    .then(doc=>{
        console.log("Shi che puedo");
        res.json({data: doc});
    }).catch(err =>{
        res.json({data: "error"});
        console.log("Error: ", err.message);
        console.log("No che pudo");
    });
});
app.get('/delPersonal/:id', (req, res) =>{
    console.log(req);
    var id = req.params.id  
    id.toString();
    console.log(id);

    Personal.remove({id:id})
    
    .then(doc=>{
        console.log("Dato eliminado", doc);
        res.json({response: "Eliminado"});
    }).catch(err =>{
        res.json({response: "error"});
        console.log("Error: ", err.message);
    });
});