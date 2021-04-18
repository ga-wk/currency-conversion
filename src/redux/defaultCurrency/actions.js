import { SET_DEFAULT_CURRENCY } from "./types";

export const setDefaultCurrency = (currency) => ({
  type: SET_DEFAULT_CURRENCY,
  payload: currency,
});
