PrivatePub.subscribe("/messages/new", function(data, channel) {
	//$("#chat").append('<div class="bubble-me">' + data.message.content + '</p>');
	//$("#chat").append('<div class="bubble-you">' + data.message.content + '</p>');
	$("#chat").append('<div class="bubble-you">' + data.message.content + '</div>');
	$('#chat').change();
	$('#chat').animate({ scrollTop: $('#chat').prop("scrollHeight") - $('#chat').height() }, 1000);
});

$(document).ready(function() {
	$(function(){
		$("#chat-send").click(function(){  
			post_message();
			return false;
		});  
	});

	post_message = function(){
		var dataString = 'content=' + $("input#message").val();
	    $("input#message").val("");

	    $.ajax({  
		  type: "POST",  
		  url: "message",  
		  data: dataString,
		  async: false
		}); 
	}
});