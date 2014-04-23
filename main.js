
/********************************
SETS UP THE MAP
**********************************/
var map;

/*function loadCambridge (){*/


function getLocation()
  {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{
  	console.log("Geolocation is not supported by this browser.")}
  }
function showPosition(position){
  var lat=position.coords.latitude;
  var lng=position.coords.longitude; 
  



	var here = new google.maps.LatLng(lat,lng);
	//var cambridge = new google.maps.LatLng(42.364081,-71.101503);

	var mapOptions = {
		center:cambridge,
		zoom: 16
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var styles = [
	  {
	    stylers: [
	      { hue: "#110d24" },
	      { saturation: -100 }
	    ]
	  },{
	    featureType: "road",
	    elementType: "geometry",
	    stylers: [
	      { lightness: 100 },
	      { visibility: "simplified" }
	    ]
	  },{
	    featureType: "road",
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];

	map.setOptions({styles: styles});	

