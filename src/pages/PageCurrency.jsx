import React from "react";

import { Header } from "../components/header";
import { Currency } from "../components/currency";
import { Footer } from "../components/footer";

export const PageCurrency = () => {
  return (
    <div className="currency">
      <Header />
      <Currency />
      <Footer />
    </div>
  );
};
