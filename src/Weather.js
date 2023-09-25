import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      entry: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99b8f9330a1bfba3a85e523fd3c2e528&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter City Name"
            id="enter-city"
            autocomplete="off"
            onChange={handleChange}
          />
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <h1 id="city">{weather.entry}</h1>
        <h2 id="time">Tuesday, 11:00</h2>
        <h2 id="temperature-description" className="description">
          {weather.description}
        </h2>
        <div class="row">
          <div class="col-sm">
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
                alt="cloudy"
                width="60px"
              />
            </span>
            <span class="temp">{Math.round(weather.temperature)}</span>
            <span class="celcius">°C |</span>
            <span class="fahrenheit">°F</span>
          </div>
          <div class="col-sm">
            <div class="info">
              Humidity: <span id="humidity">{weather.humidity}</span>%
            </div>
            <div class="info">
              Wind: <span id="wind">{Math.round(weather.wind)}</span>km/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter City Name"
            id="enter-city"
            autocomplete="off"
            onChange={handleChange}
          />
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </form>
        <h1 id="city">Nairobi</h1>
        <h2 id="time">Tuesday, 11:00</h2>
        <h2 id="temperature-description">Overcast Clouds</h2>
        <div class="row">
          <div class="col-sm">
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
                alt="cloudy"
                width="60px"
              />
            </span>
            <span class="temp">14</span>
            <span class="celcius">°C |</span>
            <span class="fahrenheit">°F</span>
          </div>
          <div class="col-sm">
            <div class="info">
              Humidity: <span id="humidity">92</span>%
            </div>
            <div class="info">
              Wind: <span id="wind">1</span>km/h
            </div>
          </div>
        </div>
      </div>
    );
  }
}
