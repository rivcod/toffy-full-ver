import React from "react";

const GameList = ({ gameList, loadingGameList }) => {
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
          {loadingGameList && '로딩중...'}
        {!loadingGameList && gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
          <ul>
            {gameList.map(game => ( // gameListContainer에서 넣어준 props 객체를 map 함수를 사용하여 game 변수에 순차적으로 담고 game 변수에 대입된 프로퍼티들을 꺼내어 표현
              <li key={game.id}> 
                {game.title}
                {game.company}
                {game.price}
                <a href={game.os}>앱스토어 가기</a>
                {game.release}
                <img src={game.image}></img>
                {game.rank}
              </li>
            ))}
          </ul>
        )}
          </tbody>
        </table>
      </div>
    );
  }

export default GameList;