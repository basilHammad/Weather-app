import React from "react";
import { connect } from "react-redux";

import { inputChange, handelSubmit } from "../../store/actions/actionsCreator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = ({ onInputChange, cityName, isSubmited, onSubmit, error }) => {
  const isValid = cityName !== "";
  const errorMessage =
    !isValid && isSubmited ? "City Name Required" : error ? error : null;
  return (
    <div className="form-cont">
      <TextField
        type="text"
        name="city"
        value={cityName}
        autoComplete="off"
        placeholder="Enter city name"
        onChange={(e) => onInputChange(e)}
        error={error ? true : false}
        label={errorMessage}
        margin="dense"
        size="medium"
        color="secondary"
        className="city-name-input"
        autoFocus={true}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSubmit(isValid, cityName)}
      >
        Get Weather
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    cityName: state.city,
    isSubmited: state.isSubmited,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => dispatch(inputChange(e)),
    onSubmit: (isValid, inputValue) =>
      dispatch(handelSubmit(isValid, inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
