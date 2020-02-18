import React, { Component } from "react";

class GameList extends Component {
  render() {
    return (
      <div className="GameList">
        <div class="ht-tm-codeblock _stempt">
        <ul class="nav nav-pills ht-tm-element">
          <li class="nav-item">
            <a class="nav-link active" href="#!">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">IOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Android</a>
          </li>
        </ul>
      </div>
        <table>
          <tbody>
            <tr>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
            </tr>
            <tr>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
            </tr>
            <tr>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
              <Game
                gTitle={this.props.gTitle}
                gCompany={this.props.gCompany}
                gPrice={this.props.gPrice}
              ></Game>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <td>
        <div className="col-sm-20 GameCard">
          <a href="/">
            {
              <img
                src="static/tfgame/images/logo3.png"
                alt="Featured Job"
                className="img-responsive"
              />
            }
          </a>
          <div className="featured-job">
            <div className="title" id="titlePadding">
              <h5>{this.props.gTitle}</h5>
              <p>{this.props.gCompany}</p>
            </div>
            <div id="_price">
              <a
                href="/"
                className="ht-tm-element btn btn-outline-primary btn-sm"
                id="_priceBtn"
              >
                {this.props.gPrice}
              </a>
            </div>
            <div className="data">
              <a className="ht-tm-element badge badge-primary">#어드벤처</a>
              <a className="ht-tm-element badge badge-primary">#인디</a>
              <a className="ht-tm-element badge badge-primary">#전략</a>
            </div>
          </div>
        </div>
      </td>
    );
  }
}

export default GameList;
