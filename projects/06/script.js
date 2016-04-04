//Happy-api

//created by Michael Braverman on March 12, 2016

// DOM elements
var weatherJSON;

var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var cityQuery = 'London';
// var unitsQuerry = "&units=metric";
var apiKey = '&appid=1443037f1c189d1ce823cad39ed20d3a';

function preload() {
  var url = baseURL + cityQuery + apiKey;
  weatherJSON = loadJSON(url);
}

function setup() {
  console.log(weatherJSON);

  noCanvas();
  var p = createP(weatherJSON.country);
}


function draw() {
}

function getWeather(data) {
  weatherJSON = data;
}
