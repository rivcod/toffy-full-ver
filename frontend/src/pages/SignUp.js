// import React, { Component } from "react";
import React, { useState } from "react";
import AppLayout from "../components/AppLayout.js";
// import Logo from "../components/Logo";
// import Email from "../components/Email";
// import Username from "../components/Username";
// import Password from "../components/Password";
import OtherLogin from "../components/OtherLogin";
import { Form, Input } from "antd";

import "../css/bootstrap4-neon-glow.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    // Custom Hook 이전이 무슨..
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
        <div className="SignUp">
          {/* <Logo></Logo> */}
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
};

// class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       username: "",
//       password: ""
//     };
//   }

// // 이메일 인풋창 핸들링
// handleEmail = e => {
//   e.preventDfault ();
//   this.setState({
//     email: e.target.value
//   })
// };

// // 유저네임 인풋창 핸들링
// handleUsername = e => {
//   e.preventDefault();
//   this.setState({
//     username: e.target.value
//   });
// };

// //첫번째 패스워드 입력창 set변환
// handlePW = E => {
//   e.preventDefault();
//   this.setState({
//     pw: e.target.value
//   });
// };

// // 서버로 가입 양식 제출
// handleSubmit = e => {
//   e.preventDefault();
//   const {
//     email,
//     username,
//     password
//   } = this.state;

//   // const SignUp = {
//   //   email : this.state.emailCheck,
//   //   password: this.state.passwordCheck,
//   //   username: this.state.usernameCheck
//   // };

//   render() {
//     return (

//     );
//   }
// }

export default SignUp;
