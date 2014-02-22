$(document).ready(function() {
	var user = false;

	PrivatePub.subscribe("/messages/new", function(data, channel) {
		if(data.message.user == user){
			$("#chat").append('<div class="bubble-me">' + data.message.content + '</div>');
		}
		else{
			$("#chat").append('<div class="bubble-you">' + data.message.content + '</div>');
		}
		
		$('#chat').change();
		$('#chat').animate({ scrollTop: $('#chat').prop("scrollHeight") - $('#chat').height() }, 1000);
	});

	$(function(){
		$.ajax({
			type: "GET",  
			url: "messages/create_user", 
			cached: false, 
			async: false
		})
		.done(function(data) {
			user = data.user
			console.log(user)
		});
	});

	$(function(){
		$("#chat-send").click(function(){  
			post_message(user);
			return false;
		});  
	});

	post_message = function(user){
		var dataString = 'user=' + user + '&content=' + $("input#message").val();
	    $("input#message").val("");

	    $.ajax({  
		  type: "POST",  
		  url: "message",  
		  data: dataString,
		  async: false
		}); 
	}
});