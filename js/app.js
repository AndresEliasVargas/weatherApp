'use strict';

let city = [];

const dataCityContainer = document.querySelector('#dataCity');
const weatherContainer = document.querySelector('#dataWeather');
const cityName = document.querySelector('#cityName');

const loadData = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '../data/weather.json', true);
  request.onreadystatechange = getDataCallback;
  request.send();
};

const getDataCallback = e => {
  let request = e.target;

  if (request.readyState == XMLHttpRequest.DONE) {
    if (request.status == 200) {
      let data = JSON.parse(request.responseText);

      data.map(dataCity => {
        let time = new Date(dataCity.time);
        let timeHour = time.getHours();
        let timeMinutes = time.getMinutes();
        let timeSeconds = time.getSeconds();
        let timeFinal = timeHour + ':' + timeMinutes + ':' + timeSeconds;

        let newWeather = new Weather(
          timeFinal,
          dataCity.main.temp,
          dataCity.main.pressure,
          dataCity.main.humidity,
          dataCity.weather[0].main,
          dataCity.weather[0].description
        );

        let newCity = new City(
          dataCity.city.name,
          dataCity.city.country,
          newWeather
        );
        city.push(newCity);

        //console.log(newCity);
      });

      //console.log(data);
      createUI();
    }
  }
};

const createUI = () => {
  city.map(city => new CityUI(city, dataCityContainer, weatherContainer, cityName));
};

loadData();

/*****************************************************
    forEach() — executes a provided function once for each array element. slowly
    map() — creates a new array with the results of calling a provided function on every element in the calling array. fastest
    more info: https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
******************************************************/