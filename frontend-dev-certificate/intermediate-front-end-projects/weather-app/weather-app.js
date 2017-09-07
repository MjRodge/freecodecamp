var userLon = "";
var userLat = "";
var apiLink = "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=6493ecfdc8243d318bd51c9b3c86d235&";
var defaultUnit = "metric";

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userLat = position.coords.latitude;
      userLon = position.coords.longitude;
      getWeather(userLat, userLon, defaultUnit);
      getMap(userLat, userLon);
    });
  } else {
    console.log("Geolocation not supported");
  }

  function getWeather(lat, lon, unit) {
    var url = apiLink+"lat="+lat+"&lon="+lon+"&units="+unit;
    $.getJSON(url, function(localWeather){
      var city = localWeather.name;
      var country = localWeather.sys.country;
      $("#location").html(city+", "+country);
      if ($("#unitSwitch").is(":checked")) {
        var temp = localWeather.main.temp+"<span id='unit'>&deg;F</span>";
        $("#currentTemp").html(temp);
      } else {
        var temp = localWeather.main.temp+"<span id='unit'>&deg;C</span>";
        $("#currentTemp").html(temp);
      }
      var iconID = localWeather.weather[0].id;
      $("#icon").html("<i class='owf owf-"+iconID+" owf-5x'></i>");
      var description = localWeather.weather[0].main;
      $("#description").html(description);
    });
  }

  //Courtesy of http://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php
  function capitaliseString(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function unitSwitch() {
    $('#unitSwitch').on('click', function() {
      if ($("#unitSwitch").is(":checked")) {
        getWeather(userLat, userLon, "imperial");
      } else {
        getWeather(userLat, userLon, "metric");
      };
    });
  }
  unitSwitch();

  function getMap(lat, lon) {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(lat, lon),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("mapBackground"), mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lon),
      map: map,
      title: 'You Are Here'
    });
    marker.setMap(map);
  }

});
