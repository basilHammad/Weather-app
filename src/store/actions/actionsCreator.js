import * as actions from "./actionTypes";
import axios from "axios";

export const inputChange = (e) => {
  return {
    type: actions.INPUT_CHANGE,
    value: e.target.value,
  };
};

export const inputSubmit = () => {
  return {
    type: actions.INPUT_SUBMIT,
    isSubmited: true,
  };
};

export const fetchWeatherStart = () => {
  return {
    type: actions.FETCH_WEATHER_START,
  };
};

export const fetchWeatherSuccess = (wheatherData) => {
  return {
    type: actions.FETCH_WEATHER_SUCCESS,
    wheatherData: wheatherData,
  };
};

export const fetchWeatherFail = (errors) => {
  return {
    type: actions.FETCH_WEATHER_FAIL,
    errors: errors,
  };
};

export const fetchWeather = (cityName) => {
  const updatedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  return (dispatch) => {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${updatedCityName}&appid=4c2b1bdf552823a6af08866619ecd511`;

    dispatch(fetchWeatherStart());
    axios
      .get(API_URL)
      .then((res) => {
        dispatch(fetchWeatherSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchWeatherFail(err.response.data.message));
      });
  };
};

export const handelSubmit = (isValid, cityName) => {
  return (dispatch) => {
    dispatch(inputSubmit());
    if (isValid) {
      dispatch(fetchWeather(cityName));
    }
  };
};
