import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white1.png";

 const Navbar = ({selectedGame, selectGame}) => {
  const para = document.location.href.split("/")[3];
  useEffect(() => {
    if(para === "Contact"){
      const myDiv = document.getElementById("inputBlank");
      myDiv.setAttribute('readonly',true)
      myDiv.setAttribute('placeholder',"Search is not available here.")
      console.log("myDiv = "+myDiv.value)
    }
  });

  let nav = document.getElementsByClassName("_floating");
  window.onscroll = function sticky() {
    if(window.pageYOffset > nav[0].offsetTop) {
      nav[0].classList.add("navCustom");
    } else {
      nav[0].classList.remove("navCustom");
    }
  }

  const handleChange = e => {
    if(e.target.value!==""){
      selectGame({
        [e.target.name]: e.target.value
      });
    } else {
      selectGame({
        [e.target.name]: "all"
      });
    }
    
  };

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
                name="gameName"
                placeholder="Search"
                id="inputBlank"
                onChange={handleChange}
              ></input>
              <div className="_mainSignUp">
                <Link to="/Contact">Contact</Link>
              </div>
              <div className="_tasteBox"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
