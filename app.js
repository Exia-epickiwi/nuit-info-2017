var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), //equalivalent à htmlentities en php
	fs = require('fs'),
	User = require('./users'),
	users = new Map(),
	id = 0;

app.get('/', function(require, res){
	res.sendFile(__dirname + '/view/index.html');
});

io.sockets.on('connection', function(socket, token){
	socket.on('RequestConnection', function(token){
		console.log(users.get(token));
		if(users.get(token) == null)
		{	
			id++;
			socket.user = new User(id);
			users.set(id, socket.user);
			//generate token to save the user
		}else
		{
			socket.user = users.get(token);
		}
		
		console.log("Bonjour, "+socket.user.name+" a l'id "+socket.user.id);

		//Create the User object
		// Envoi d'un event AcceptedConnection avec un objet user représentant l'utilisateur actuel.
		socket.emit("User", socket.user);

/*
		Envoi d'un event received message avec le message de bienvenue et les options initiales.
		socket.emit()
		*/
	});

	socket.on('ReceivedOption', function(messageOption){
		// Décrypter le message pour l'analyser
		/*Effectuer une réponse en prennant en compte le message envoyé en JSON
		socket.emit()
		*/
	});


	socket.on('UpdateLocation', function(location)
	{
		//Recupérer la position de l'utilisateur et modifier l'objet User. Voir pour envoyer un message, ...


	});

});

server.listen(8080,()=>{
  console.log("Listening on *:8080")
})
