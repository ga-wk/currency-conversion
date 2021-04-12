import React from "react";

import { Header } from "../components/header";
import { Convert } from "../components/convert";
import { Footer } from "../components/footer";

export const PageConverter = () => {
  return (
    <div className="convertor">
      <Header />
      <Convert />
      <Footer />
    </div>
  );
};