var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	ent = require('ent'),
	fs = require('fs'),
	User = require('./users'),
	users = new Map(),
	id = 0;

app.get('/', function(require, res){
	res.sendFile(__dirname + '/view/index.html');
});

io.sockets.on('connection', function(socket, token){

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

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
		socket.emit("AcceptedConnection", socket.user);


//		Envoi d'un event received message avec le message de bienvenue et les options initiales.
		let options = [
		new MessageOption("CreateEvent", "Créer un évènement", "http://www.freeiconspng.com/uploads/logo-ford-mustang-png-19.png"),
		new MessageOption("JoinEvent", "Joindre un évènement", "http://www.rw-designer.com/icon-image/4230-256x256x32.png")];

		socket.emit("ReceivedMessage", new Message(1, "text", options))

	});

	socket.on('ReceivedOption', function(messageOption){
        console.log(`User option selected ${option.type} `)
	});


	socket.on('UpdateLocation', function(location)
	{
		//Recupérer la position de l'utilisateur et modifier l'objet User. Voir pour envoyer un message, ...
	});

});

server.listen(80,()=>{
  console.log("Listening on *:80")
})
