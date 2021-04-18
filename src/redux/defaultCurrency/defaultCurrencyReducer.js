import { SET_DEFAULT_CURRENCY } from "./types";

const initialState = {
  defaultCurrency: "RUS",
};

export const defaultCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEFAULT_CURRENCY:
      return {
        defaultCurrency: action.payload,
      };
    default:
      return state;
  }
};
