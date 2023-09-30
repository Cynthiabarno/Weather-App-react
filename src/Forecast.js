import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState("");

  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div class="row">
        {forecast.map((dailyForecast, index) => {
          if (index < 6) {
            return (
              <div class="col-sm-2" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=5201594abea9f3e38b70e65b11a80c24&units=metric`;
    axios.get(apiUrl).then(showForecast);

    return "loading..";
  }
}
