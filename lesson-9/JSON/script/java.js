var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/be9da62e0d0d19a0/conditions/q/CA/San_Francisco.json', true);

weatherObject.send();
weatherObject.onload = function()
{
    var weatherInfo = JSON.parse(weatherObject.responseText);    
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.dewpoint_f;
    document.getElementById('icon').src = weatherInfo.current_observation.icon_url;
    
    
    
}