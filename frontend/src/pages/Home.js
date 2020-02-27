import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Tags from "../components/Tags";
import GameList from "../components/GameList";
import Mail from "../components/Mail";
import Footer from "../components/Footer";

import "../css/bootstrap4-neon-glow.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [
        { gTitle: "Goooze", gCompany: "Company", gPrice: "$ 25" },
        { gTitle: "Goooze", gCompany: "Company", gPrice: "$ 25" },
        { gTitle: "Goooze", gCompany: "Company", gPrice: "$ 25" },
        { gTitle: "Goooze", gCompany: "Company", gPrice: "$ 25" }
      ]
    };
  }

  render() {
    return (
      <div className="Home">
        <Navbar></Navbar>
        <Main></Main>
        <Tags></Tags>
        <GameList
          gTitle={this.state.gameList[1].gTitle}
          gCompany={this.state.gameList[1].gCompany}
          gPrice={this.state.gameList[1].gPrice}
        ></GameList>
        <Mail></Mail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;



























