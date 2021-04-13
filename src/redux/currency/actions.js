import axios from "axios";

import {
  FETCH_CURRENCY_STARTED,
  FETCH_CURRENCY_SUCCEEDED,
  FETCH_CURRENCY_FAILED,
} from "./types";

export const fecthCurrencyStarted = () => ({
  type: FETCH_CURRENCY_STARTED,
});

export const fecthCurrencySucceeded = (repoDetails) => ({
  type: FETCH_CURRENCY_SUCCEEDED,
  payload: repoDetails,
});

export const fecthCurrencyFailed = (error) => ({
  type: FETCH_CURRENCY_FAILED,
  error,
});

export const fetchCurrency = () => {
  return (dispatch) => {
      dispatch(fecthCurrencyStarted)
    axios
      .get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => {
        const currency = response.data;
        dispatch(fecthCurrencySucceeded(currency))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fecthCurrencyFailed(errorMsg))
      });
  };
};
