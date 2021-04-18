import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrency } from "../redux/currency/actions.js";

import { Header } from "../components/header";
import { Convert } from "../components/convert";
import { Footer } from "../components/footer";
import { setDefaultCurrency } from "../redux/defaultCurrency/actions.js";
import store from "../redux/store.js";

const PageConverter = ({ currencyData, fetchCurrency }) => {
  //Обновление данных каждые 10сек
  useEffect(() => {
    fetchCurrency();

    const intervalId = setInterval(() => {
      fetchCurrency();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [fetchCurrency]);

  //Начальная валюта
  if (!localStorage.getItem("cur")) {
    localStorage.setItem("cur", "RUS");
  }
  store.dispatch(setDefaultCurrency(localStorage.getItem("cur")));

  return !currencyData.loading ? (
    <h2>Loading</h2>
  ) : currencyData.error ? (
    <h2>{currencyData.error}</h2>
  ) : (
    <div className="page">
      <Header />
      <Convert />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currencyData: state.currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrency: () => dispatch(fetchCurrency()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageConverter);
