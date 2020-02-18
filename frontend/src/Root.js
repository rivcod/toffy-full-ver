import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./css/bootstrap4-neon-glow.css";
import "./css/index.css";

const Root = () => (
  <BrowserRouter>
    {" "}
    <App />{" "}
  </BrowserRouter>
);

export default Root;
