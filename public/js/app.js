angular.module('chatroomApp', ['ngRoute'])


	.controller('chatroomCtrl', function(){


		var self = this;

		this.userConnected = false;

		this.username = "";
		this.roomname = "";

		this.login = function() {
			self.userConnected = true;
			// self.username = user_name;
			// self.roomname = room_name;
			alert('welcome');

		}







		/* SocketIO Scripts */
		var socket = io();
		// var socket2 = io('/r1');



		$('form').submit(function(){

			var toServer = {
				msg: $('#inputMsg').val(),
				username: self.username,
				room: self.roomname
			}

		   socket.emit('creatingRoom', toServer);

		   $('#inputMsg').val(''); //reset the input field to empty string

		   return false;
		 });




		socket.on('test', function(serverGreeting) {
			$('#outputMsg').append("<tr><td> <span>" + serverGreeting.user + " :</span> " + serverGreeting.msg + "</td></tr>");

			
		});

	});