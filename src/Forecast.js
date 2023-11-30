import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import { ThreeDots } from "react-loader-spinner";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col-md-2" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=5201594abea9f3e38b70e65b11a80c24&units=metric`;
    axios.get(apiUrl).then(showForecast);

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
