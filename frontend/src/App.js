import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Test from "./pages/Test";
import axios from "axios";

import "./css/index.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class App extends Component {
  render() {
    return (
      <div className="font">
        {" "}
        <Route exact path="/" component={Home} />{" "}
        <Route path="/signup" component={SignUp} />{" "}
        <Route path="/signin" component={SignIn} />{" "}
        <Route path="/mypage" component={MyPage} />{" "}
        <Route path="/test" component={Test} />{" "}
      </div>
    );
  }
}
export default App;
