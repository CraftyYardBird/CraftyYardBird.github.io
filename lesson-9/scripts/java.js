var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/be9da62e0d0d19a0/conditions/q/TN/Franklin.json', true);

weatherObject.send();
weatherObject.onload = function()
{
    var weatherInfo = JSON.parse(weatherObject.responseText);    
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.dewpoint_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('summary').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('hum').innerHTML = weatherInfo.current_observation.relative_humidity;
    document.getElementById('Windmpr').innerHTML = weatherInfo.current_observation.wind_mph;
     document.getElementById('story').src = weatherInfo.current_observation.history_url;
    
    
    
    
    
}