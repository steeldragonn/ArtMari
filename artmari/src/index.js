import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Nav from "/artmari/components/Nav.js";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
