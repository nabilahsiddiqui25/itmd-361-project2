function initMap() {
  // Map options
  var options = {
    zoom: 12,
    center: {lat: 41.8781, lng: -87.6298},
    mapTypeId: 'roadmap'
  };

  // New map object
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Create a new marker object for Illinois Tech
  var marker = new google.maps.Marker({
    position: {lat:41.8349,lng:-87.6270},
    map: map,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var marker = new google.maps.Marker({
    position: {lat:41.8789,lng:-87.6359},
    map: map,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var marker = new google.maps.Marker({
    position: {lat:41.8917,lng:-87.6043},
    map: map,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });


  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Illinois Institute of Technology</h1>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  // Add additional markers using addMarker function
  // Illinois Tech
  //Fixed syntax errors
  addMarker({
	lat:41.8349,lng:-87.6270,
	iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});

addMarker({
	lat:41.8789,lng:-87.6359,
	iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});

addMarker({
	lat:41.8917,lng:-87.6043,
	iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
});
  // Willis Tower
  addMarker({lat:41.8789,lng:-87.6359});
  // Navy Pier
  addMarker({lat:41.8917,lng:-87.6043});

  // Function to add additional markers
  function addMarker(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      //icon: props.iconImage
    });

    //Check for custom icon
    if(props.iconImage){
    	//Set Icon image
    	marker.setIcon(props.iconImage);
    }
  }
}