import React, { Component } from "react";

class Password extends Component {
  render() {
    return (
      <input
        type="password"
        className="form-control"
        id="_password"
        aria-describedby="_password"
        placeholder="Enter password"
      ></input>
    );
  }
}

export default Password;
