var express = require('express');

var router = express.Router();



router.get('/', function(req, res, next) {
	console.log(res.status);
	next();
});

io.on('connection', function(socket){
	  socket.on('chat message', function(msg){
	   console.log('message: ' + msg);
	  });
	});


module.exports = router;