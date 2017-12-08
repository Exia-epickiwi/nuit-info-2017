var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

io.on('connection', (socket) => {
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    io.emit('ReceivedMessage',{type:'text', text:"Quel fruit ?", options: [
        {type:"kiwi",text:"Kiwi",iconUrl:""},
        {type:"poire",text:"Poire",iconUrl:""},
        {type:"peche",text:"Peche",iconUrl:""},
        {type:"pomme",text:"Pomme",iconUrl:""},
        {type:"banane",text:"banane",iconUrl:""}
    ]});

    socket.on("MessageOption",(option)=>{
        console.log(`User option selected ${option.type} `)
        io.emit('ReceivedMessage',{type:'text', text:"Vraiment ?", options: [
            {type:"oui",text:"Oui",iconUrl:""},
            {type:"non",text:"Non",iconUrl:""}
        ]});
    })
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/view/index.html")
})

http.listen(5000, () => {
    console.log('started on port 5000');
})
