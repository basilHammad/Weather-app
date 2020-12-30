import * as actions from "../actions/actionTypes";

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
  city: "",
  isSubmited: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.wheatherData,
        loading: false,
      };
    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.errors,
      };
    case actions.INPUT_CHANGE:
      return {
        ...state,
        city: action.value,
      };
    case actions.INPUT_SUBMIT:
      return {
        ...state,
        isSubmited: true,
      };

    default:
      return state;
  }
};

export default reducer;
