import React from "react";

const Footer = ({ selectedLang, selectLang }) => {
  const setClassNameToggle = () => {
    const prevClassName = document.getElementsByClassName("dropdown-menu")[0];
    prevClassName.classList.toggle("show");
  };
  return (
    <div className="footer py-5">
      <div className="ht-tm-element btn-group btn-group-sm">
        <button
          type="button"
          className="btn dropdown-toggle btn-sm btn-primary"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => setClassNameToggle()}
        >
          {selectedLang}
        </button>
        <div
          className="dropdown-menu"
          x-placement="bottom-start"
          style={{
            position: "absolute",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(0px, 31px, 0px)",
          }}
        >
          <a href="#!"
            className="dropdown-item"
            onClick={() => {
              return setClassNameToggle(), selectLang("English");
            }}
          >
            English
          </a>
          <a href="#!"
            className="dropdown-item"
            onClick={() => {
              return setClassNameToggle(), selectLang("한국어");
            }}
          >
            한국어
          </a>
        </div>
      </div>
      <a href="https://github.com/pianist5555/toffy-full-ver" className="ht-tm-element btn btn-primary fa-github">
          GitHub
        </a>
      <p className="notice">
        Thank you for visiting. If you have trouble or find a bug, Please write
        it down on Contact page.
      </p>
    </div>
  );
};

export default Footer;
