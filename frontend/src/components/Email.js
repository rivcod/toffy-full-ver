import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="_email"
        aria-describedby="_email"
        placeholder="Enter email"
      ></input>
    );
  }
}

export default Email;
