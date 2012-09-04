var express = require('express')
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)

var PORT = 8888;
server.listen(PORT);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/button', function (req, res) {
  res.sendfile(__dirname + '/button.html');
});
app.get('/display', function (req, res) {
  res.sendfile(__dirname + '/display.html');
});

io.sockets.on('connection', function (socket) {
    socket.on('myevent', function (data) {
        socket.emit('myevent', data);
        socket.broadcast.emit('myevent', data);
    });
});
