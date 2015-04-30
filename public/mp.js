(function(scope){
	var socket = io.connect(scope.RM.Config.socketUrl);
	
	socket.on('usercount', function (count) {
		document.getElementById('user-count').innerText = count;
	});
})(window);