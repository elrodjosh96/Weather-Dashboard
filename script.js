var cityWeather = 'Atlanta'
var weathAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityWeather + '&appid=a55cbfd2e3c5718ac038ceb575faa02d'
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
    var weathAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityWeather + '&appid=a55cbfd2e3c5718ac038ceb575faa02d'
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
            Day1Data(data.name, data.main.temp, data.main.humidity, data.wind.speed);
            Day2Data(data.name, data.main.temp, data.main.humidity, data.wind.speed);
            Day3Data(data.name, data.main.temp, data.main.humidity, data.wind.speed);
            Day4Data(data.name, data.main.temp, data.main.humidity, data.wind.speed);
            Day5Data(data.name, data.main.temp, data.main.humidity, data.wind.speed);
      });
}

function Day1Data(name, temp, humidity, speed) {
    $(".card-title").text(name);
    // $("section").attr("style", "display:inline");
    var tempF = Math.round((temp - 273.15) * 1.8 + 32);
    $("#temp1").text('Temperature: ' + tempF + "°");
    var wind = Math.round(speed);
    $("#wind1").text('Wind: ' + wind + "mph");
    $("#humidity1").text('Humidity: ' + humidity + "%");
  }

  function Day2Data(name, temp, humidity, speed) {
    $(".card-title").text(name);
    // $("section").attr("style", "display:inline");
    var tempF = Math.round((temp - 273.15) * 1.8 + 32);
    $("#temp2").text('Temperature: ' + tempF + "°");
    var wind = Math.round(speed);
    $("#wind2").text('Wind: ' + wind + "mph");
    $("#humidity2").text('Humidity: ' + humidity + "%");
  }
  function Day3Data(name, temp, humidity, speed) {
    $(".card-title").text(name);
    // $("section").attr("style", "display:inline");
    var tempF = Math.round((temp - 273.15) * 1.8 + 32);
    $("#temp2").text('Temperature: ' + tempF + "°");
    var wind = Math.round(speed);
    $("#wind2").text('Wind: ' + wind + "mph");
    $("#humidity2").text('Humidity: ' + humidity + "%");
  }
  function Day4Data(name, temp, humidity, speed) {
    $(".card-title").text(name);
    // $("section").attr("style", "display:inline");
    var tempF = Math.round((temp - 273.15) * 1.8 + 32);
    $("#temp2").text('Temperature: ' + tempF + "°");
    var wind = Math.round(speed);
    $("#wind2").text('Wind: ' + wind + "mph");
    $("#humidity2").text('Humidity: ' + humidity + "%");
  }
  function Day5Data(name, temp, humidity, speed) {
    $(".card-title").text(name);
    // $("section").attr("style", "display:inline");
    var tempF = Math.round((temp - 273.15) * 1.8 + 32);
    $("#temp2").text('Temperature: ' + tempF + "°");
    var wind = Math.round(speed);
    $("#wind2").text('Wind: ' + wind + "mph");
    $("#humidity2").text('Humidity: ' + humidity + "%");
  }
// create el set val text append el to that days card/page(for entire card)

// function CardData(data) {
//     for (var i = 0; i < cityWeather.length; i++) {
//         data.daily[0].weather[0].id
//         data.daily[1].weather[0].id
//         data.daily[2].weather[0].id
//         data.daily[3].weather[0].id
//         data.daily[4].weather[0].id
//         data.daily[5].weather[0].id
//      }
// }



// var lookAheadWeath = 'https://api.openweathermap.org/data/2.5/forecast/daily?q='+weathAPI+'&cnt=5&appid=a55cbfd2e3c5718ac038ceb575faa02d'
// function dailylookaheadAPI(cityWeather) {
//     fetch(lookAheadWeath)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//     })
// }