import React, { useState, Fragment, useCallback, useEffect } from "react";

const GameList = ({ gameList, loadingGameList }) => {
  let count = 1
  const A = (game) => {
    count += 1
    console.log("a")
    return (
        <td key={game.id}>
          {game.title}
          {game.price}
          <a href={game.href}>앱스토어 가기</a>
          <img src={game.image}></img>
          {game.rank}
        </td>
    );
  };
  const B = (game) => {
    count=1
    console.log("b")
    return (
      <tr>
        <td key={game.id}>
          {game.title}
          {game.price}
          <a href={game.href}>앱스토어 가기</a>
          <img src={game.image}></img>
          {game.rank}
        </td>
      </tr>
    );
  };
  const branchRendering = (game) => {
    if(game){
      if(count<=4){
        console.log("what is count? = " + count)
        return A(game)
      } else {
        return B(game)
      }
    } else{
      return "No Data"
    }
  }

  return (
    <div className="GameList">
      <table>
        <tbody>
          {loadingGameList && "로딩중..."}
          {!loadingGameList &&
          gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
              <Fragment>
                {
                gameList.map((game) => branchRendering(game))
                }
              </Fragment>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;