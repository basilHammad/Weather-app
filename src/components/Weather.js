import React from "react";
import { connect } from "react-redux";

import Icon from "./Icon";
import { Spinner } from "./spinner/style";

const Weather = ({ weatherData, loading }) => {
  if (loading) return <Spinner />;
  return (
    <div className="container">
      <div className="cards">
        {weatherData && (
          <>
            <h1 className="city-name">
              {weatherData.name.toUpperCase()},{weatherData.sys.country}
            </h1>
            <Icon weatherData={weatherData} />
            <h1 className="temp">
              {Math.floor(weatherData.main.temp - 273.15)}
              &deg;
            </h1>
            <h2>
              <span>
                {Math.floor(weatherData.main.temp_min - 273.15)}
                &deg;
              </span>
              <span>
                {Math.floor(weatherData.main.temp_max - 273.15)}
                &deg;
              </span>
            </h2>
            <h2>
              <i className="wi wi-humidity"></i>
              <span>{weatherData.main.humidity}</span>
            </h2>
            <h2>{weatherData.weather[0].description.toUpperCase()}</h2>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Weather);
