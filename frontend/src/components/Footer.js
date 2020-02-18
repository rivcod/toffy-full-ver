import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer py-5">
        <div className="ht-tm-element btn-group btn-group-sm">
          <button
            type="button"
            className="btn dropdown-toggle btn-sm btn-primary"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
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
            <a className="dropdown-item" href="#!">
              English
            </a>
            <a className="dropdown-item" href="#!">
              Korean
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
}

export default Footer;
