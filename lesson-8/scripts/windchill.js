var high = document.getElementById("highTemp").innerHTML;
var low = document.getElementById("lowTemp").innerHTML;
var speed = document.getElementById("windSpeed").innerHTML;

high = parseInt(high);
low = parseInt(low);
speed = parseInt(speed);

var average = (high + low) / 2;

var chill = 35.74 + 0.6215 * average - 35.75 * Math.pow(speed, 0.16) + 0.4275 * average * Math.pow(speed, 0.16);

if (average < 50 && speed > 3) {
document.getElementById("windTemp").innerHTML = chill.toFixed(2) + "&deg;F";
} else {
document.getElementById("windTemp").innerHTML = "Unavailable if average is over 50&deg;F or wind speed is under 3mph";
}

 function computeNum() {
	
    var high = get("h").value;
    var h = parseInt(high);
    var low = get("l").value;
    var l = parseInt(low);
    var speed = get("s").value;
    var s = parseInt(speed);
    
    var t = (h+l)/2;
	
	var wind = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
	
    get("output").innerHTML = wind.toFixed(2) ;
}