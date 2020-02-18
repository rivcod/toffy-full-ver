import React, { Component } from "react";
import Logo from "../components/Logo";
import Login from "../components/Login";
import Footer from "../components/Footer";

import "../css/bootstrap4-neon-glow.css";

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Logo></Logo>
        <Login></Login>
        <Footer></Footer>
      </div>
    );
  }
}

export default SignIn;
