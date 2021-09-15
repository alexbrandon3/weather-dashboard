// Pairs the current date with the currently selected date
var todayDate = moment().format("M/D/YYYY");
var currentDate = document.getElementById("currentDate");
var city= "";
currentDate.textContent = city + " " + todayDate;

//Sets dates across the application
var day1 = document.getElementById("day1");
var date1 = document.createElement('h4');
var date1Val = moment().add(1, 'days').format("M/D/YYYY");
date1.textContent = date1Val;
day1.append(date1);
var day2 = document.getElementById("day2");
var date2 = document.createElement('h4');
var date2Val = moment().add(2, 'days').format("M/D/YYYY");
date2.textContent = date2Val;
day2.append(date2);
var day3 = document.getElementById("day3");
var date3 = document.createElement('h4');
var date3Val = moment().add(3, 'days').format("M/D/YYYY");
date3.textContent = date3Val;
day3.append(date3);
var day4 = document.getElementById("day4");
var date4 = document.createElement('h4');
var date4Val = moment().add(4, 'days').format("M/D/YYYY");
date4.textContent = date4Val;
day4.append(date4);
var day5 = document.getElementById("day5");
var date5 = document.createElement('h4');
var date5Val = moment().add(5, 'days').format("M/D/YYYY");
date5.textContent = date5Val;
day5.append(date5);

// Sets elements to be dynamically created 
var currentContainer = document.querySelector('.current-container');
var day0H = document.createElement('p');
var day0T = document.createElement('p');
var day0IndexBox = document.createElement('div');
var day0pre = document.createElement('p');
var day0UV = document.createElement('p');
var day0W = document.createElement('p');

var day1H = document.createElement('p');
var day1I = document.createElement('img');
var day1T = document.createElement('p');
var day1W = document.createElement('p');

var day2H = document.createElement('p');
var day2I = document.createElement('img');
var day2T = document.createElement('p');
var day2W = document.createElement('p');

var day3H = document.createElement('p');
var day3I = document.createElement('img');
var day3T = document.createElement('p');
var day3W = document.createElement('p');

var day4H = document.createElement('p');
var day4I = document.createElement('img');
var day4T = document.createElement('p');
var day4W = document.createElement('p');

var day5H = document.createElement('p');
var day5I = document.createElement('img');
var day5T = document.createElement('p');
var day5W = document.createElement('p');

var historySection = document.querySelector('.bottom-half');

// To capitalize the user's input when placed into div header
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var rootURL = "https://api.openweathermap.org";
var apiKey = "1ea0f80048ab4a59252f7ce58d52fec5";
var lat;
var lon;
var url1;
var url2;
var uvIndex;
var temperatures = [];
var icons = [];
var wind = [];
var humidity = [];
var searchBtn = document.querySelector(".searchBtn");

function getCoordinates(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lat = data[0].lat;
      lon = data[0].lon;
    });
}
function getUV(url) {
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        day0pre.textContent = "UV Index: ";
        day0UV.textContent = data.daily[0].uvi;
        day0IndexBox.setAttribute('class', 'uv');
        currentContainer.append(day0IndexBox);
        day0IndexBox.append(day0pre);
        if(data.daily[0].uvi <= 3){
            day0UV.setAttribute('class', 'low');
        }
        else if(data.daily[0].uvi > 7){
            day0UV.setAttribute('class', 'high');
        }
        else{
            day0UV.setAttribute('class', 'moderate');
        }
        day0IndexBox.append(day0UV);
      });
  }
function getWeather(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (info) {
      temperatures.push(
        info.list[0].main.temp,
        info.list[6].main.temp,
        info.list[14].main.temp,
        info.list[22].main.temp,
        info.list[30].main.temp,
        info.list[38].main.temp
        );
      icons.push(
        info.list[6].weather[0].icon,
        info.list[14].weather[0].icon,
        info.list[22].weather[0].icon,
        info.list[30].weather[0].icon,
        info.list[38].weather[0].icon
        );
      humidity.push(
        info.list[0].main.humidity,
        info.list[6].main.humidity,
        info.list[14].main.humidity,
        info.list[22].main.humidity,
        info.list[30].main.humidity,
        info.list[38].main.humidity
        );
      wind.push(
        info.list[0].wind.speed,
        info.list[6].wind.speed,
        info.list[14].wind.speed,
        info.list[22].wind.speed,
        info.list[30].wind.speed,
        info.list[38].wind.speed
        );
      
      day0T.textContent = "Temp: " + temperatures[0] + '°F';
      day0W.textContent = "Wind: " + wind[0] + ' MPH';
      day0H.textContent = "Humidity: " + humidity[0] + '%';
      currentContainer.append(day0T);
      currentContainer.append(day0W);
      currentContainer.append(day0H);
      day1I.src = `http://openweathermap.org/img/wn/${icons[0]}@2x.png`
      day1T.textContent = "Temp: " + temperatures[1] + '°F';
      day1W.textContent = "Wind: " + wind[1] + ' MPH';
      day1H.textContent = "Humidity: " + humidity[1] + '%';
      day1.append(day1I);
      day1.append(day1T);
      day1.append(day1W);
      day1.append(day1H);
      day2I.src = `http://openweathermap.org/img/wn/${icons[1]}@2x.png`
      day2T.textContent = "Temp: " + temperatures[2] + '°F';
      day2W.textContent = "Wind: " + wind[2] + ' MPH';
      day2H.textContent = "Humidity: " + humidity[2] + '%';
      day2.append(day2I);
      day2.append(day2T);
      day2.append(day2W);
      day2.append(day2H);
      day3I.src = `http://openweathermap.org/img/wn/${icons[2]}@2x.png`
      day3T.textContent = "Temp: " + temperatures[3] + '°F';
      day3W.textContent = "Wind: " + wind[3] + ' MPH';
      day3H.textContent = "Humidity: " + humidity[3] + '%';
      day3.append(day3I);
      day3.append(day3T);
      day3.append(day3W);
      day3.append(day3H);
      day4I.src = `http://openweathermap.org/img/wn/${icons[3]}@2x.png`
      day4T.textContent = "Temp: " + temperatures[4] + '°F';
      day4W.textContent = "Wind: " + wind[4] + ' MPH';
      day4H.textContent = "Humidity: " + humidity[4] + '%';
      day4.append(day4I);
      day4.append(day4T);
      day4.append(day4W);
      day4.append(day4H);
      day5I.src = `http://openweathermap.org/img/wn/${icons[4]}@2x.png`
      day5T.textContent = "Temp: " + temperatures[5] + '°F';;
      day5W.textContent = "Wind: " + wind[5] + ' MPH';
      day5H.textContent = "Humidity: " + humidity[5] + '%';
      day5.append(day5I);
      day5.append(day5T);
      day5.append(day5W);
      day5.append(day5H);    
    });
}

function addCity(){
    historySection.innerHTML = "";
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    for(var i = 0; i < cities.length; i++){
        var cityBtn = document.createElement('button');
        cityBtn.setAttribute('class', 'cityBtn');
        cityBtn.setAttribute('onclick', "search(event)")
        cityBtn.textContent = cities[i];
        historySection.append(cityBtn);
    }
}

addCity();

searchBtn.addEventListener("click", function () {
    var input = document.querySelector(".input").value;
    document.querySelector('.input').value='';
    city = input;
    url1 = `${rootURL}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    getCoordinates(url1)
    .then(function () {
    url2 = `${rootURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    getUV(url2);
    });
    url3 = `${rootURL}/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    getWeather(url3);
    city = capitalize(city);
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    if(cities.includes(city)){
        return;
    }
    else{
        cities.push(city);
        currentDate.textContent = city + " " + todayDate;
        localStorage.setItem("cities", JSON.stringify(cities));
        addCity();
    };
    
});

function search(event){
    var city = event.target.innerHTML;
    console.log(event);
    url1 = `${rootURL}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    getCoordinates(url1)
    .then(function () {
      url2 = `${rootURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
      getUV(url2);
    });
    url3 = `${rootURL}/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    getWeather(url3);
    city = capitalize(city);
    currentDate.textContent = city + " " + todayDate;
    var cities = JSON.parse(localStorage.getItem("cities")) || [];
    localStorage.setItem("cities", JSON.stringify(cities));
    addCity();
  };