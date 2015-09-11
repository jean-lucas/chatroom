var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



io.on('connection', function(socket){
  socket.on('test', function(msg){
    console.log("new msg! ->  " + msg);

    io.emit('test', msg);
  });
  // socket.on('test2', function(msg){
  //   console.log("new msg! 2 ->  " + msg);
  // });
});

http.listen(3000, function(){
  console.log("Listening on port 3000");
});


/* src="https://github.com/rauchg/chat-example/blob/master/index.js" */