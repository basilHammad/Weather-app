import React from "react";

const Icon = ({ weatherData }) => {
  const iconId = +weatherData.weather[0].id;
  let iconClass;

  function timeStringToFloat() {
    const date = weatherData.dt * 1000;
    const timeString = new Date(date).toString().slice(16, 21);
    var hoursMinutes = timeString.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
  const timeFloat = timeStringToFloat();

  switch (true) {
    case timeFloat >= 5 && timeFloat <= 18:
      switch (true) {
        case iconId >= 200 && iconId <= 232:
          iconClass = "wi-day-thunderstorm";
          break;
        case iconId >= 300 && iconId <= 321:
          iconClass = "wi-day-sleet";
          break;
        case iconId >= 500 && iconId <= 531:
          iconClass = "wi-day-rain";
          break;
        case iconId >= 600 && iconId <= 622:
          iconClass = "wi-day-snow";
          break;
        case iconId >= 700 && iconId <= 781:
          iconClass = "wi-day-fog";
          break;
        case iconId === 800:
          iconClass = "wi-day-sunny";
          break;
        case iconId >= 801 && iconId <= 804:
          iconClass = "wi-day-fog";
          break;
        default:
          iconClass = "wi-day-sunny";
      }
      break;
    case timeFloat < 5 || timeFloat > 18:
      switch (true) {
        case iconId >= 200 && iconId <= 232:
          iconClass = "wi-night-thunderstorm";
          break;
        case iconId >= 300 && iconId <= 321:
          iconClass = "wi-night-sleet";
          break;
        case iconId >= 500 && iconId <= 531:
          iconClass = "wi-night-rain";
          break;
        case iconId >= 600 && iconId <= 622:
          iconClass = "wi-night-snow";
          break;
        case iconId >= 700 && iconId <= 781:
          iconClass = "wi-night-fog";
          break;
        case iconId === 800:
          iconClass = "wi-night-clear";
          break;
        case iconId >= 801 && iconId <= 804:
          iconClass = "wi-night-fog";
          break;
        default:
          iconClass = "wi-night-clear";
      }
      break;
    default:
      iconClass = null;
  }

  return (
    <h5 className="py-4">
      <i className={`wi ${iconClass} icone`}></i>
    </h5>
  );
};

export default Icon;
