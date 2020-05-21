import React, {  Fragment, useState } from "react";

const GameList = ({ gameList, loadingGameList }) => {
  let count = 0

  const A = (game, firstPage, lastPage) => {
    count += 1
    if( (Number(game.id) < lastPage) && (Number(game.id) >= firstPage) ){
      return (
        <span key={game.num}>
          {game.title}
          {game.price}
          <a href={game.href}>앱스토어 가기</a>
          <img src={game.image}></img>
          {game.rank}
        </span>
      );
    }
  };
  const B = (game, firstPage, lastPage) => {
    count=1
    if( (Number(game.id) < lastPage) && (Number(game.num) >= firstPage) ){
      return (
        <Fragment>
          <br/>
          <span key={game.id}>
            {game.title}
            {game.price}
            <a href={game.href}>앱스토어 가기</a>
            <img src={game.image}></img>
            {game.rank}
          </span>
        </Fragment>
      );
    } 
  };
  const branchRendering = (game,firstPage,lastPage) => {
    if(game){
      if(count<4){
        return A(game,firstPage,lastPage)
      } else {
        return B(game,firstPage,lastPage)
      }
    } else{
      return "No Data"
    }
  }

  const firstPage = 10;
  const lastPage = 20;
  return (
    <div className="GameList">
          {loadingGameList && "로딩중..."}
          {!loadingGameList &&
          gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
              <Fragment>
                {
                gameList.map((game) => branchRendering(game,firstPage,lastPage)) //커런트 게임
                }
              </Fragment>
            )}
    </div>
  );
};

export default GameList;