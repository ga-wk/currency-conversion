import {
  FETCH_CURRENCY_STARTED,
  FETCH_CURRENCY_SUCCEEDED,
  FETCH_CURRENCY_FAILED,
} from "./types";

const initialState = {
  loading: false,
  currency: [],
  error: "",
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CURRENCY_SUCCEEDED:
      return {
        loading: false,
        currency: action.payload,
        error: "",
      };
    case FETCH_CURRENCY_FAILED:
      return {
        loading: false,
        currency: {},
        error: action.error,
      };
    default:
      return state;
  }
};
