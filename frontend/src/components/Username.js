import React, { Component } from "react";

class Username extends Component {
  render() {
    return (
      <input
        type="username"
        className="form-control"
        id="_username"
        aria-describedby="_username"
        placeholder="Enter Username"
      ></input>
    );
  }
}

export default Username;
