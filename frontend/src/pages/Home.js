import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Tags from "../components/Tags";
import Mail from "../components/Mail";
import Footer from "../components/Footer";
import GameListContainer from "../containers/GameListContainer";
import Pagination from '../components/Pagination'
import "../css/bootstrap4-neon-glow.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>
        <Main></Main>
        <Tags></Tags>
        <GameListContainer></GameListContainer>
        <Pagination></Pagination>
        <Mail></Mail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;



























