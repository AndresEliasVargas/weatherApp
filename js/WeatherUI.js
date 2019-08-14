'use strict';

class WeatherUI {
  constructor(pWeather, pInformationContainer) {
    this.weather = pWeather;
    this.informationContainer = pInformationContainer;

    //Create Elements
    this.mainContainer = document.createElement('div');
    this.containerLeft = document.createElement('div');
    this.containerRight = document.createElement('div');
    this.container = document.createElement('div');
    this.time = document.createElement('p');
    this.temperature = document.createElement('p');
    this.pressure = document.createElement('p');
    this.humidity = document.createElement('p');
    this.weatherInfo = document.createElement('p');
    this.description = document.createElement('p');
    this.horizontalRule = document.createElement('hr');

    //CSS
    this.mainContainer.classList.add('row');
    this.containerLeft.classList.add('col-lg-3');
    this.containerRight.classList.add('col-lg-3');
    this.container.classList.add(
      'text-white',
      'col-lg-6',
      'mt-3',
      'pt-3',
      'mt-md-5',
      'pt-md-4',
      'pt-lg-5',
      'display-6'
    );
    this.horizontalRule.classList.add('bg-white');

    //ID
    this.container.setAttribute('id', 'weatherContainer');

    //text impression
    this.time.innerHTML = 
      '<strong><i class="far fa-clock mr-4 ml-1"></i>Time: </strong>' + 
      '<span class="positionInfoMobile">' + this.weather.time + '</span>';

    this.temperature.innerHTML =
      '<strong><i class="fas fa-thermometer-half mr-4-5 ml-2-5"></i>Temperature: </strong>' + 
      '<span class="positionInfoMobile">' + this.weather.temperature + '</span>';

    this.pressure.innerHTML =
      '<strong><i class="fas fa-tachometer-alt mr-3-5 ml-1"></i>Pressure: </strong>' + 
      '<span class="positionInfoMobile">' + this.weather.pressure + '</span>';

    this.humidity.innerHTML =
      '<strong><i class="fas fa-tint mr-4-5 ml-2"></i>Humidity: </strong>' + 
      '<span class="positionInfoMobile">' + this.weather.humidity + '</span>';

    this.weatherInfo.innerHTML =
      '<strong>Weather: </strong>' +
      '<span class="positionInfoMobileWeather">' + this.renderWeatherInfoWithIcon(this.weather.weather) + '</span>';

    this.description.innerHTML =
      '<strong>Description: </strong>' + 
      '<span class="positionInfoMobileWeather">' + this.weather.description.charAt(0).toUpperCase() + 
      this.weather.description.slice(1).toLowerCase() + '</span>';

    //appends
    this.informationContainer.appendChild(this.mainContainer);
    this.mainContainer.append(
      this.containerLeft,
      this.container,
      this.containerRight
    );
    this.container.append(
      this.time,
      this.temperature,
      this.pressure,
      this.humidity,
      this.horizontalRule,
      this.weatherInfo,
      this.description
    );
  }

  //Select the respective icon depends on the type of weather
  renderWeatherInfoWithIcon = icon => {
    //Template literals o template strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `${icon} ${weatherConditions[icon.toUpperCase()]}`;
  };
}

//Simulation of the Map's in js, specification: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
const weatherConditions = {
  HAZE: '<i class="fas fa-snowflake ml-2"></i>',
  CLOUDS: '<i class="fas fa-cloud ml-2"></i>',
  MIST: '<i class="fas fa-water ml-2"></i>',
  RAIN: '<i class="fas fa-cloud-rain ml-2"></i>',
  CLEAR: '<i class="fas fa-sun ml-1"></i>',
  STORM: '<i class="fas fa-poo-storm ml-2"></i>'
};

//openWeather