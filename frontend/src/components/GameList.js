import React, { Component } from "react";
import axios from "axios";
import GameListApi from "./GameListApi"

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class GameList extends Component {

  state = {
    value: "",
    gameList: []
  };
  
  // 1.렌더링이 되면 _renderText() 함수를 호출
  componentDidMount() {
    this._renderText();
  }

  render() {
    const { gameList } = this.state;
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
        
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
  // 2. 호출된 _renderText 함수는 장고 Model에 있는 Data를 Json으로 보여주는 페이지에서 Data를 가져와 SetState해줌
  _renderText = () => {
    axios
    // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
    .get("/api/tfgame/")
    .then(res => this.setState({ gameList: res.data })) // res에 데이터들이 담겨짐, state의 textList에 res의 데이터를 저장
    .catch(err => console.log(err));
  };
}

export default GameList;