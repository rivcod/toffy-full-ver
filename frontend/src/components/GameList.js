import React, { Fragment, } from "react";

const GameList = ({ gameList, loadingGameList, select }) => {
  let count = 0
  const selectCasting = Array.from(select)

  const A = (game, firstPage, lastPage) => {
    count += 1
    //if( (Number(game.id) < lastPage) && (Number(game.id) >= firstPage) ){
    return (
      <div className="col-sm-20 GameCard">
        
        <div className="featured-job">
        <a href={game.href}>
          {
            <img
              src={game.image}
              alt="Featured Job"
              className="img-responsive"
            />
          }
        </a>
          <div className="title" id="titlePadding">
            <h5>{game.title}</h5>
            <h5>{game.rank}</h5>
            
          </div>
          <div id="_price">
            <a
              href="/"
              className="ht-tm-element btn btn-outline-primary btn-sm"
              id="_priceBtn"
            >
              {game.price}
            </a>
          </div>
        </div>
      </div>
    );
    //}
  };
  const B = (game, firstPage, lastPage) => {
    count = 1
    //if( (Number(game.id) < lastPage) && (Number(game.num) >= firstPage) ){
    return (
      
      <div className="featured-job">
        <a href={game.href}>
        {
          <img
            src={game.image}
            alt="Featured Job"
            className="img-responsive"
          />
        }
      </a>
        <div className="title" id="titlePadding">
          <h5>{game.title}</h5>
          <h5>{game.rank}</h5>
          
        </div>
        <div id="_price">
          <a
            href="/"
            className="ht-tm-element btn btn-outline-primary btn-sm"
            id="_priceBtn"
          >
            {game.price}
          </a>
        </div>
      </div>
      // <Fragment>
      //   <br />
      //   <span key={game.id}>
      //     {game.title}
      //     {game.price}
      //     <a href={game.href}>앱스토어 가기</a>
      //     <img src={game.image}></img>
      //     {game.rank}
      //   </span>
      // </Fragment>
    );
    //}
  };
  const branchRendering = (game, firstPage, lastPage) => {
    if (game) {
      if (
        (selectCasting.length == 1 && ((selectCasting.indexOf(game.tag1) != -1) || (selectCasting.indexOf(game.tag2) != -1) || (selectCasting.indexOf(game.tag3) != -1)))
        || (
          (selectCasting.length == 2) && (((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag2) != -1)) || ((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag3) != -1)) | ((selectCasting.indexOf(game.tag2) != -1) && (selectCasting.indexOf(game.tag3) != -1)))
        )
        || (
          selectCasting.length == 3 && ((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag2) != -1) && (selectCasting.indexOf(game.tag3) != -1))
        )
      ) {
        if (count < 4) {
          return A(game, firstPage, lastPage)
        } else {
          return (B(game, firstPage, lastPage))
        }
      } else {
        return ""
      }
    } else {
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
          <div className="GameList">  {
            gameList.map((game) => branchRendering(game, firstPage, lastPage)) //커런트 게임
          }
          </div>
        )}
    </div>
  );
};

export default GameList;