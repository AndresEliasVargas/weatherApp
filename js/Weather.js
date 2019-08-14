'use strict';

class Weather {
    constructor(pTime, pTemperature, pPressure, pHumidity, pWeatherName, pWeatherDescription){
        this.time = pTime;
        this.temperature = pTemperature;
        this.pressure = pPressure;
        this.humidity = pHumidity;
        this.weather = pWeatherName;
        this.description = pWeatherDescription;
    }
};