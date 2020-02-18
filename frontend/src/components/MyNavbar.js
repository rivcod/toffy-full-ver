import React, { Component } from "react";
// import { Link } from "react-router-dom";

class MyNavbar extends Component {
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
                <a href="\">
                  <img src="static/tfgame/images/logo-white1.png" alt="" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default MyNavbar;
