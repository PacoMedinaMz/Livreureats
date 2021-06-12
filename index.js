var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var messages = [
  {
    texto: "Buen día. ¿En qué te puedo ayudar?",
    autor: "Administrador",
    fecha: "Ahora",
  },
];

io.on("connection", function (socket) {
  console.log("Alguien se ha conectado con Sockets");
  socket.emit("messages", messages);
  socket.on("new-message", function (data) {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});
server.listen(3500, function () {
  console.log("Servidor corriendo en http://localhost:3500");
});

