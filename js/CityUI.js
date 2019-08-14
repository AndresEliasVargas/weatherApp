'use strict';

class CityUI {
  constructor(pCity, pCityContainer, pWeatherContainer, pCityName) {
    this.city = pCity;
    this.cityContainer = pCityContainer;
    this.weatherContainer = pWeatherContainer;
    this.cityNameHeader = pCityName;

    //create elements
    this.mainContainer = document.createElement('div');

    this.leftContainer = document.createElement('div');
    this.rightContainer = document.createElement('div');
    this.container = document.createElement('div');

    this.containerRow = document.createElement('div');
    this.containerColLef = document.createElement('div');
    this.containerColRig = document.createElement('div');

    this.cityName = document.createElement('p');
    this.countryName = document.createElement('p');

    //icon container
    this.containerIcon = document.createElement('div');
    this.icon = document.createElement('i');

    //css
    this.mainContainer.classList.add('row');
    this.leftContainer.classList.add('col-lg-2');
    this.container.classList.add(
      'bg-containerMenu',
      'text-white',
      'mb-3',
      'pl-3',
      'py-1',
      'col-12',
      'col-lg-8',
      'pointer'
    );
    this.rightContainer.classList.add('col-lg-2');

    this.containerRow.classList.add('row');
    this.containerColLef.classList.add(
      'col-12',
      'col-md-3',
      'display-5',
      'pt-1',
      'text-center'
    );
    this.containerColRig.classList.add('col-12','col-md-9');

    this.icon.classList.add('fas', 'fa-temperature-high');

    //text impression
    this.cityName.innerHTML = '<strong>' + this.city.city + '</strong>';
    this.countryName.innerHTML = this.city.country;

    //appends
    this.cityContainer.appendChild(this.mainContainer);
    this.mainContainer.append(
      this.leftContainer,
      this.container,
      this.rightContainer
    );
    this.container.appendChild(this.containerRow);
    this.containerRow.append(
      this.containerColLef, 
      this.containerColRig
    );
    this.containerColLef.appendChild(this.icon);
    this.containerColRig.append(
      this.cityName, 
      this.countryName
    );

    //call to action
    this.container.onclick = this.onClickCity.bind(this);
  }

  clearContainer() {
    this.weatherContainer.innerHTML = '';
    this.cityNameHeader.innerHTML = '';
  }

  onClickCity() {
    console.log(this.city);
    this.clearContainer();

    window.scrollTo(0, 0);
    this.cityNameHeader.innerHTML = this.city.city;

    let newWeather = new WeatherUI(
      this.city.weather,
      this.weatherContainer
    );
  }
}
