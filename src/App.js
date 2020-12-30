import React from "react";
import { connect } from "react-redux";

import "weather-icons/css/weather-icons.css";
import "./app.css";
import Weather from "./components/Weather";
import Form from "./components/form/Form";

const App = ({ loading }) => {
  return (
    <div
      className="App"
      style={{
        background: "url(/imgs/blur-background-1187974.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        width: "100%",
        height: "100%",
        paddingTop: "40px",
      }}
    >
      <Form />
      <Weather />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    isSubmited: state.isSubmited,
  };
};

export default connect(mapStateToProps)(App);
