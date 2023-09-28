import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TemperatureConversion(props) {
  let [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="temperatureConversion">
        <span className="temp">{Math.round(props.temp)}</span>
        <span className="celcius">°C |</span>
        <span className="fahrenheit">
          <a href="/" className="text-decoration-none" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.temp * 9) / 5 + 32;
    return (
      <span className="temperatureConversion">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="celcius">
          {" "}
          <a href="/" className="text-decoration-none" onClick={showCelcius}>
            °C
          </a>{" "}
          |
        </span>
        <span className="fahrenheit">°F</span>
      </span>
    );
  }
}
