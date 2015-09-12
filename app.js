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








io.on('connection', function(client) {


	client.on('creatingRoom', function(response){

		var greeting = {
			msg: response.msg, 
			user: response.username,
			namespace: response.room,
			status: 'success'
		}
    io.emit('test', greeting); //return back to client greeting

  });
});





/* not working.......  yet */
// io.on('connection', function(client) {


// 	client.on('creatingRoom', function(response){

// 		var greeting = {
// 			msg: response.msg, 
// 			user: response.username,
// 			namespace: response.room,
// 			status: 'success'
// 		}

// 		connectToNamespace(greeting);

//     // io.emit('test', greeting); //return back to client greeting
//   });
// });



// function connectToNamespace(greeting) {

// 	var nsp = io.of(greeting.namespace);

// 	nsp.on('connection', function(client) {

// 		console.log('hello ' + greeting.user + "  connected to: " + nsp.name);


// 		client.sockets.emit('test', greeting);
// 		client.on('debug', function(msg) {
// 			console.log(msg);
// 		});

// 		// greeting.namespace.emit('test', greeting); //return back to client greeting
// 	});



// }



















http.listen(3000, function(){
  console.log("Listening on port 3000");
});


/* src="https://github.com/rauchg/chat-example/blob/master/index.js" */