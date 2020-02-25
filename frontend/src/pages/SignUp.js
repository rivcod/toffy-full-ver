import React, { Component } from "react";
import PropTypes from "prop-types";
// import Logo from "../components/Logo";
import OtherLogin from "../components/OtherLogin";

import "../css/bootstrap4-neon-glow.css";

class SignUp extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, username, password } = this.state;
    const lead = { email, username, password };
    const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { email, username, password } = this.state;
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <div className="card-body">
            <div className="submitForm">
              <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
                <div className="form-group">
                  <div>
                    <label htmlFor="email">이메일</label>
                    <br />
                    <input
                      name="email"
                      value={email}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="username">유저네임</label>
                    <br />
                    <input
                      name="username"
                      value={username}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">비밀번호</label>
                    <br />
                    <input
                      name="password"
                      value={password}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <OtherLogin></OtherLogin>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary _joinclassName"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
