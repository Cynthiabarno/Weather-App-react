import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import Time from "./Time";
import Forecast from "./Forecast";
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
      <div className="weather">
        <div className="container">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City Name"
              id="enter-city"
              autocomplete="off"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <h1 id="city">{weather.entry}</h1>
          <h2 id="time">
            <Time />
          </h2>
          <h2 id="temperature-description" className="description">
            {weather.description}
          </h2>
          <div class="row">
            <div class="col-sm">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="#00bbf0"
                size={40}
                animate={true}
              />

              <span className="temp">{Math.round(weather.temperature)}</span>
              <span className="celcius">°C |</span>
              <span className="fahrenheit">°F</span>
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
          <hr />
          <Forecast />
        </div>
        <p className="barno">
          <a
            href="https://github.com/Cynthiabarno/Weather-App-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          {""}
          by Cynthia Barno
        </p>
      </div>
    );
  } else {
    return (
      <div className="weather">
        <div className="container">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter City Name"
              id="enter-city"
              autocomplete="off"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          <h1 id="city">Nairobi</h1>
          <h2 id="time">
            {" "}
            <Time />
          </h2>
          <h2 id="temperature-description">Overcast Clouds</h2>
          <div class="row">
            <div class="col-sm">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="#00bbf0"
                size={40}
                animate={true}
              />
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
          <hr />
          <Forecast />
        </div>
        <p className="barno">
          <a
            href="https://github.com/Cynthiabarno/Weather-App-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          {""}
          by Cynthia Barno
        </p>
      </div>
    );
  }
}
