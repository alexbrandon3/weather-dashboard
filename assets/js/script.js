var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}');
request.send();
request.onload = ()=>{
    if(request === 200){
        console.log(request.response);
    }
    else{
        console.log('error');
    }
}

var city;
// Pairs the current date with the currently selected date
var todayDate = moment().format('M/D/YYYY');
var currentDate = document.getElementById('currentDate');
currentDate.textContent = (city + " " + todayDate)

var day1 = document.getElementById('day1');

// Assigns functionality to search button
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(){

});