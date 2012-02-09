var sys = require('sys');
var app = require('express').createServer();
var io = require('socket.io').listen(app);

var PORT = 8888;
app.listen(PORT);

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

sys.log("server running at " + PORT);