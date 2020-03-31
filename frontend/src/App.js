import React, { Component } from "react";
import { Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Test from "./pages/Test";

import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="font">
        {" "}
        <Route exact path="/" component={Home} />{" "}
        <Route path="/mypage" component={MyPage} />{" "}
        <Route path="/test" component={Test} />{" "}
      </div>
    );
  }
}
export default App;
