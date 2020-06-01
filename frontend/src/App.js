import React, { Component } from "react";
import { Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Test from "./pages/Test";
import GameListContainer from './containers/GameListContainer'

import "./css/index.css";


class App extends Component {

  componentDidMount(){
    document.title = "Toffy"
  }

  render() {
    return (
      <div className="font">
        {" "}
        <Route path="/g" component={GameListContainer} />{" "}
        <Route exact path="/" component={Home} />{" "}
        <Route path='/contact'render={() => <MyPage lang={""} />}/>{" "}
        <Route path="/test" component={Test} />{" "}
      </div>
    );
  }
}
export default App;
