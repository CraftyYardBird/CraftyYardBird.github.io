// JavaScript Document

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/5173a979d90fec61/conditions/q/CA/San_Francisco.json',);

weatherObject.send();

weatherObject.onload = function () {
    
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    
    console.log(weatherInfo);
}