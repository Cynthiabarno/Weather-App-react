import React from "react";
import Icon from "./Icon";
import "./Weather.css";

export default function ForecastDay(props) {
  function days() {
    let now = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = now.getDay();
    return days[day];
  }

  return (
    <div>
      <div>{days()}</div>
      <div>
        <Icon code={props.data.weather[0].icon} />
      </div>
      <div>
        {Math.round(props.data.temp.max)} /{" "}
        <span className="mintemp">{Math.round(props.data.temp.min)}</span> °C
      </div>
    </div>
  );
}
