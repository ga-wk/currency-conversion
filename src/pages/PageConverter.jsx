import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCurrency } from "../redux/currency/actions.js";

import { Header } from "../components/header";
import { Convert } from "../components/convert";
import { Footer } from "../components/footer";

const PageConverter = ({ currencyData, fetchCurrency }) => {
  useEffect(() => {
    fetchCurrency();
  }, []);

  return currencyData.loading ? (
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
