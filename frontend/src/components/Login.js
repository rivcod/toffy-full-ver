import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="submitForm">
          <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
            <form>
              <div className="form-group">
                <input
                  type="username"
                  className="form-control"
                  id="_username"
                  aria-describedby="_username"
                  placeholder="Email or Username"
                ></input>
                <input
                  type="password"
                  className="form-control"
                  id="_password"
                  aria-describedby="_password"
                  placeholder="Password"
                ></input>
              </div>
              {/* <button type="submit" className="btn btn-primary _joinclassName">
                Log In
              </button> */}
              <div class="text-mono">
                <button
                  type="submit"
                  className="btn btn-primary _joinclassName"
                >
                  Join
                </button>
              </div>
            </form>
            <div id="_apiJoinclassName">
              {/* <p>or</p> */}

              <a
                href="#!"
                class="ht-tm-element btn btn-shadow text-mono btn-warning"
              >
                <span class="fa fa-download mr-2"></span>Login With Google
              </a>
              <a
                href="#!"
                class="ht-tm-element btn btn-shadow text-mono btn-warning"
              >
                <span class="fa fa-download mr-2"></span>Login With Facebook
              </a>
            </div>
            <a href="SignUp">or Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
