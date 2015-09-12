var express = require('express');



var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  socket.on('test', function(msg){
    console.log("new msg! ->  " + msg);

    io.emit('test', msg);
  });
  // socket.on('test2', function(msg){
  //   console.log("new msg! 2 ->  " + msg);
  // });
});



