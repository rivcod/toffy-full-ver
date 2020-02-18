import React, { Component } from "react";
import Logo from "../components/Logo";
import Email from "../components/Email";
import Username from "../components/Username";
import Password from "../components/Password";
import OtherLogin from "../components/OtherLogin";

import "../css/bootstrap4-neon-glow.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }


  render() {
    return (
      <div className="SignUp">
        <Logo></Logo>
        <div className="card-body">
          <div className="submitForm">
            <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
              <div className="form-group">
                <Email
                  handleEmail={this.handleEmail}
                  checkEmail={this.checkEmail}
                  value={this.state.email}
                />
                <Username
                  handleUsername={this.handleUsername}
                  checkUsername={this.checkUsername}
                  value={this.state.username}
                />
                <Password
                  handlePassword={this.handlePassword}
                  checkPassword={this.checkPassword}
                  value={this.state.password}
                />
              </div>
            </div>
            <OtherLogin></OtherLogin>

            {/* <button onClick={this.handleSubmit} className="btn btn-primary _joinclassName">
          Join
        </button> */}
          </div>

          {/* <a href="SignIn">or Login</a> */}
        </div>
      </div>
    );
  }
}

export default SignUp;
