import React, { Component } from "react";
import NavbarContainer from "../containers/NavbarContainer";
import TagContainer from "../containers/TagContainer";
import FooterContainer from "../containers/FooterContainer";
import GameListContainer from "../containers/GameListContainer";
import MainContainer from "../containers/MainContainer";
import PaginationContainer from '../containers/PaginationContainer'
import "../css/bootstrap4-neon-glow.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavbarContainer></NavbarContainer>
        <MainContainer></MainContainer>
        <TagContainer></TagContainer>
        <GameListContainer></GameListContainer>
        <PaginationContainer></PaginationContainer>
        <FooterContainer></FooterContainer> 
      </div>
    );
  }
}

export default Home;



























