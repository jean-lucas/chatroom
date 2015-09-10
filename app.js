var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

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