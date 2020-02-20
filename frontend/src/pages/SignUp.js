// import React, { Component } from "react";
import React, { useState } from "react";
import AppLayout from "../components/AppLayout.js";
// import Logo from "../components/Logo";
import OtherLogin from "../components/OtherLogin";
import { Form, Input, Button } from "antd";

import "../css/bootstrap4-neon-glow.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <AppLayout>
      {/* <Logo></Logo> */}
      <div className="SignUp">
        <Form onSubmit={onSubmit}>
          <div className="card-body">
            <div className="submitForm">
              <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
                <div className="form-group">
                  <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input
                      name="user-email"
                      value={email}
                      required
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div>
                    <label htmlFor="username">유저네임</label>
                    <br />
                    <Input
                      name="username"
                      value={username}
                      required
                      onChange={onChangeUsername}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">비밀번호</label>
                    <br />
                    <Input
                      name="password"
                      value={password}
                      required
                      onChange={onChangePassword}
                    />
                  </div>
                  <OtherLogin></OtherLogin>
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn btn-primary _joinclassName"
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </AppLayout>
  );
};

export default SignUp;
