import React, { Fragment, } from "react";
import tagConverting from "../js/tagConvert.js"

const GameList = ({ gameList, loadingGameList, select }) => {
  let count = 0
  const selectCasting = Array.from(select)

  const A = (game, firstPage, lastPage) => {
    //if( (Number(game.id) < lastPage) && (Number(game.id) >= firstPage) ){
    const nukeOne = (tagCheck) => {
      if (tagCheck !== 0) {
        return tagConverting(parseInt(tagCheck))
      } else {
        return ""
      }
    }
    const tagOne = nukeOne(game.tag1)
    const tagTwo = nukeOne(game.tag2)
    const tagThree = nukeOne(game.tag3)
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
          <div>
            <h5>{game.title}</h5>
          </div>
          <div>
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
            <div id="_tags">
              <button className="ht-tm-element badge badge-primary">
                {tagOne}
              </button>
              <button className="ht-tm-element badge badge-primary">
                {tagTwo}
              </button>
              <button className="ht-tm-element badge badge-primary">
                {tagThree}
              </button>
            </div>
          </div>
        </div>
      </div >
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
    );
    //}
  };
  const branchRendering = (game, firstPage, lastPage) => {
    if (game && selectCasting.length == 0) {
      return A(game, firstPage, lastPage)
    } else {
      if (
        (selectCasting.length == 1 && ((selectCasting.indexOf(game.tag1) != -1) || (selectCasting.indexOf(game.tag2) != -1) || (selectCasting.indexOf(game.tag3) != -1)))
        || (
          (selectCasting.length == 2) && (((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag2) != -1)) || ((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag3) != -1)) | ((selectCasting.indexOf(game.tag2) != -1) && (selectCasting.indexOf(game.tag3) != -1)))
        )
        || (
          selectCasting.length == 3 && ((selectCasting.indexOf(game.tag1) != -1) && (selectCasting.indexOf(game.tag2) != -1) && (selectCasting.indexOf(game.tag3) != -1))
        )
      ) {
        if (count < 300) {
          return A(game, firstPage, lastPage)
        } else {
          return (B(game, firstPage, lastPage))
        }
      } else {
        return ""
      }
    }
  }

  const firstPage = 10;
  const lastPage = 20;
  return (
    <div className="GameList">
      {loadingGameList && "로딩중..."}
      {!loadingGameList &&
        gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
          <div>  {
            gameList.map((game) => branchRendering(game, firstPage, lastPage))
          }
          </div>
        )}
    </div>
  );
};

export default GameList;