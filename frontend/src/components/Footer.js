import React, { Component } from "react";

const Footer = () => {
  const setClassNameToggle = () => {
    const prevClassName = document.getElementsByClassName("dropdown-menu")[0]
    prevClassName.classList.toggle ("show");
  }
    return (
      <div className="footer py-5">
        <div className="ht-tm-element btn-group btn-group-sm">
          <button
            type="button"
            className="btn dropdown-toggle btn-sm btn-primary"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => setClassNameToggle()}>
            Languages
          </button>
          <div
            className="dropdown-menu"
            x-placement="bottom-start"
            style={{
              position: "absolute",
              willChange: "transform",
              top: "0px",
              left: "0px",
              transform: "translate3d(0px, 31px, 0px)"
            }}
          >
            <a className="dropdown-item" onClick={() => setClassNameToggle()}>
              English
            </a>
            <a className="dropdown-item" onClick={() => setClassNameToggle()}>
              한국어
            </a>
          </div>
        </div>
        <p>
          Thank you for downloading this theme. If you have trouble or find a
          bug, please open an issue on GitHub:
        </p>
      </div>
    );
}

export default Footer;
