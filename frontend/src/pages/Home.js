import React, { Component } from "react";
import Navbar from "../components/Navbar";
import TagContainer from "../containers/TagContainer";
import Mail from "../components/Mail";
import Footer from "../components/Footer";
import GameListContainer from "../containers/GameListContainer";
import MainContainer from "../containers/MainContainer";
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
        <MainContainer></MainContainer>
        <TagContainer></TagContainer>
        <GameListContainer></GameListContainer>
        <Mail></Mail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;



























