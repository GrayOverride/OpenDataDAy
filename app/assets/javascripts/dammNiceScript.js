$( document ).ready(function() {
  var coordinates;
  
  $(function(){
    $.ajax({
      type: "GET",  
      url: "messages/get_data", 
      cached: false, 
      async: false
    })
    .done(function(data) {
      coordinates = data;
      console.log(coordinates);
    });
  });

var map;
function initialize() {
  var mapOptions = {
    zoom: 13
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var testpos = new google.maps.LatLng(56.166773, 14.889221);
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        //content: text skrivs här
      });
      var chitIcon = "app/assets/images/marker.png,";
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title:"Hello World!"
      icon = chitIcon,
});

      map.setCenter(pos);
    }, 
    function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(56.166773, 14.889221),

    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);


});