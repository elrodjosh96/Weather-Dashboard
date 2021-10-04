var cityWeather = 'Chicago'
var weathAPI = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityWeather + '&appid=a55cbfd2e3c5718ac038ceb575faa02d'
fetch(weathAPI) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          console.log(data)

      });
document.getElementById('search-btn').addEventListener('click', function(event){
    cityWeather = document.getElementById('citysearch').value
    console.log(cityWeather) 
    APIcall(cityWeather);

})

function APIcall(cityWeather) {
    var weathAPI = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityWeather + '&appid=a55cbfd2e3c5718ac038ceb575faa02d'
fetch(weathAPI) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          console.log(data)
          var lattitude = data.coord.lat
          var longitude = data.coord.lon
          var latlongUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lattitude+'&lon='+longitude+'&exclude=minutely,alerts,hourly&appid=a55cbfd2e3c5718ac038ceb575faa02d'
          fetch(latlongUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            })

      });
}

// create el set val text append el to that days card/page(for entire card)
// 