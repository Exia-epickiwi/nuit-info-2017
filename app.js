var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), //equalivalent à htmlentities en php
	fs = require('fs');

app.get('/', function(require, res){
	res.sendFile(__dirname + '/view/index.html');
});

io.sockets.on('connection', function(socket, token){
	socket.on('nouveau_client', function(token){
		if(token === null)
		{
			//generate token to save the user
		}
		socket.token = token;
		//Create the User object
	});

	socket.on('message', function(message){
		// Décrypter le message pour l'analyser

	});

});

app.listen(8080,()=>{
  console.log("Listening on *:8080")
})
