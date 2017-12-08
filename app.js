var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	User = require('./users'),
	MessageOption = require("./MessageOption"),
	Message = require("./message"),
	routes = require("./routes/routes"),
	users = new Map(),
	id = 0;

app.use("/",express.static(__dirname+"/public"))

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

		routes.exec("index",socket)

	});

	socket.on('ReceivedOption', function(messageOption){
        console.log(`User option selected ${messageOption.type} `)
		routes.exec(messageOption.type,socket)
	});


	socket.on('UpdateLocation', function(location)
	{
		//Recupérer la position de l'utilisateur et modifier l'objet User. Voir pour envoyer un message, ...
	});

});

server.listen(80,()=>{
  console.log("Listening on *:80")
})
