function showPosition(position){
	document.getElementById("Latitude").value  =  position.coords.latitude;
	document.getElementById("Longitude").value =  position.coords.longitude;
	
}

if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(showPosition);
	
}else{
	document.getElementById("Latitude").value  =  0;
	document.getElementById("Longitude").value =  0;
}




