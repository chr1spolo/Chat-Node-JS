var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);
var messages = [{
  id     : 1,
  text   : "Primer mensaje",
  author : "Christian Polo"
}];

app.use(express.static('public'));


io.on('connection', function(socket) {

  socket.emit('messages', messages);

  socket.on('new-messages', function(data) {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});


server.listen(8000, function() {
  console.log('Servidor corriendo en localhost:8000');
});
