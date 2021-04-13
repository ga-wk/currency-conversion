import React, {useEffect} from "react";

import { Header } from "../components/header";
import { Convert } from "../components/convert";
import { Footer } from "../components/footer";
import { applyMiddleware, createStore } from "redux";
import { currencyReducer } from "../redux/currency/currencyReducer";
import logger from "redux-logger";
import thunk from "redux-thunk"

export const PageConverter = () => {
  let store = createStore(currencyReducer, applyMiddleware(logger, thunk));

  store.dispatch({
    type: "GET",
  });

  console.log(store.getState());
  return (
    <div className="page">
      <Header />
      <Convert />
      <Footer />
    </div>
  );
};
