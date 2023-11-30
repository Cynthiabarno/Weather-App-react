import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Icon from "./Icon";
import Time from "./Time";
import Forecast from "./Forecast";
import "./Weather.css";
import TemperatureConversion from "./TemperatureConversion";
import Options from "./Options";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5201594abea9f3e38b70e65b11a80c24&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="weather">
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <div class="d-flex justify-content-start">
              <input
                type="search"
                className="form-control w-50"
                id="exampleDataList"
                list="datalistOptions"
                placeholder="Enter your city..."
                onChange={handleChange}
              />
              <Options />

              <input type="submit" className="btn btn-primary" value="Search" />
            </div>
          </form>

          <h1 id="city">{weather.entry}</h1>
          <h2 id="time">
            <Time />
          </h2>
          <h2 id="temperature-description" className="description">
            {weather.description}
          </h2>
          <div className="row">
            <div className="col-sm">
              <span className="mt-3">
                <Icon code={weather.icon} />
              </span>
              <span>
                <TemperatureConversion temp={weather.temperature} />
              </span>
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
          <Forecast coordinates={weather.coords} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        height="30"
        width="30"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
}
