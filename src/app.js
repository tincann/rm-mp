var port = 3000,
	io = require('socket.io')(port);

var userCount = 0;

io.on('connection', function(socket){
	io.emit('usercount', ++userCount - 1);
	socket.on('disconnect', function(){
		io.emit('usercount', --userCount - 1);
	});
});

console.log('Websocket server started on port', port);