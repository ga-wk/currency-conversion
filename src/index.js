import React from "react";
import ReactDOM from "react-dom";

import "./styles/scaffolding.scss";
import "./styles/container.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
