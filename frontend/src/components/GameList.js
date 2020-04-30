import React, {  Fragment } from "react";

const GameList = ({ gameList, loadingGameList }) => {
  let count = 0
  const A = (game) => {
    count += 1
    console.log("a")
    return (
        <span key={game.id}>
          {game.title}
          {game.price}
          <a href={game.href}>앱스토어 가기</a>
          <img src={game.image}></img>
          {game.rank}
        </span>
    );
  };
  const B = (game) => {
    count=1
    console.log("b")
    //const trOpen = () => {return {__html : '<tr>'}}; <div dangerouslySetInnerHTML={trOpen()} />
    //const trClose = () => {return {__html : '/<tr>'}};<div dangerouslySetInnerHTML={trClose()}/>
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
  };
  const branchRendering = (game) => {
    if(game){
      if(count<4){
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
          {loadingGameList && "로딩중..."}
          {!loadingGameList &&
          gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
              <Fragment>
                {
                gameList.map((game) => branchRendering(game))
                }
              </Fragment>
            )}
    </div>
  );
};

export default GameList;