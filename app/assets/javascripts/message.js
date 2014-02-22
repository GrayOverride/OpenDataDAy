PrivatePub.subscribe("/messages/new", function(data, channel) {
  $("#chat").append("<p>" + data.message.content + "</p>");
});

$(document).ready(function() {
	$(function(){
	  $("#chat-send").click(function(){  
	    var dataString = 'content=' + $("input#message").val();
	    $("input#message").val("");

	    $.ajax({  
		  type: "POST",  
		  url: "message",  
		  data: dataString,
		  async: false
		});

		return false; 
	  });  
	});
});