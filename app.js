var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	ent = require('ent'), //equalivalent à htmlentities en php
	fs = require('fs');

app.get('/', function(require, res){
	res.sendFile(__dirname + '/view/index.html');
});

io.sockets.on('connection', function(socket, token){
	socket.on('RequestConnection', function(token){
		if(token === null)
		{
			//generate token to save the user
		}
		socket.token = token;
		//Create the User object
		/* Envoi d'un event AcceptedConnection avec un objet user représentant l'utilisateur actuel.
		socket.emit()

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

app.listen(8080,()=>{
  console.log("Listening on *:8080")
})
