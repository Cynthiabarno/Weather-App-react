import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div class="row">
      <div class="col-sm-2">
        <div>Tue</div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>26 / 14 °C</div>
      </div>
      <div class="col-sm">
        <div>Wed</div>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>28 / 15 °C</div>
      </div>
      <div class="col-sm-2">
        <div>Thu</div>
        <div>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>27 / 14 °C</div>
      </div>
      <div class="col-sm-2">
        <div>Fri</div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>28 / 14 °C</div>
      </div>
      <div class="col-sm-2">
        <div>Sat</div>
        <div>
          <ReactAnimatedWeather
            icon="SLEET"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>28 / 17 °C</div>
      </div>
      <div class="col-sm">
        <div>Sun</div>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#00bbf0"
            size={40}
            animate={true}
          />
        </div>
        <div>28 / 14 °C</div>
      </div>
    </div>
  );
}
