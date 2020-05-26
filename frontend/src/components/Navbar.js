import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white1.png";
//import Typekit from 'react-typekit';

class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "../static/tfgame/js/navigation.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="navbar-dark text-white _floating">
        <div className="container">
          <nav className="navbar px-0 navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control _searchFormControl"
                  placeholder="Search"
                ></input>

                <div className="_mainSignUp">
                  {/* <a href="mypage" id="_taste"> */}
                  <Link to="/Contact">Contact</Link>
                  {/* </a> */}
                </div>

                <div className="_tasteBox"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
