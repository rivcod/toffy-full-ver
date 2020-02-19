import React, { Component } from "react";

class GameList extends Component {

  state = {
    value: "",
    gameList: []
  };
  // 1.렌더링 하기전 _renderText() 함수를 호출
  componentDidMount() {
    this._renderText();
  }

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
        {/* 3. state에 담긴 textList에서 Data(파라미터가 text로 표현되어있음)를 있는대로 
            다꺼내서 화면에 return (index는 자동으로 지정됨) */}
        {gameList.map((text, index) => {
          return (
            <GameListApi
              title={text.title}
              key={index}
              company={text.company}
              price={text.price}
              os={text.os}
              release={text.release}
              image={text.image}
              rank={text.rank}
            />
          );
        })}
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

// 2. 호출된 _renderText 함수는 장고 Model에 있는 Data를 Json으로 보여주는 페이지에서 Data를 가져와 SetState해줌
_renderText = () => {
  axios
  // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
    .get("/api/tfgame/")
    .then(res => this.setState({ gameList: res.data })) // res에 데이터들이 담겨짐, state의 textList에 res의 데이터를 저장
    .catch(err => console.log(err));
};

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
