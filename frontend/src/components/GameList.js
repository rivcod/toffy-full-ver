import React, { Fragment, } from "react";
import tagConverting from "../js/tagConvert.js"
let check = 0;
const GameList = ({ gameList, loadingGameList, select }) => {
  const selectCasting = Array.from(select)
  check = 0;
  const A = (game, firstPage, lastPage) => {
    //if( (Number(game.id) < lastPage) && (Number(game.id) >= firstPage) ){
    if(game){
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
              <h5>{game.rank}</h5>
            </div>
            <div>
              <h5>{game.title}</h5>
            </div>
            <div id="_price">
              <a
                href={game.href}
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
    } else {
      return ""
    }
  };
  const B = (game, firstPage, lastPage) => {
    check +=1
    if(check>=200){
      check = 0
      return (
      <div class="ht-tm-element alert alert-success" role="alert">
      <h4 class="alert-heading">게임을 찾지 못했습니다.</h4>
      장르 조합을 변경하시거나 &nbsp;
      <a href="Contact" class="alert-link">이곳을 눌러 원하시는 게임을 말씀해주세요.</a>
    </div>
      )
    }
  }
    //}
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
      ) 
      {
        return A(game, firstPage, lastPage)
      } else {
        return B(game, firstPage, lastPage)
      }
    }
  }

  const firstPage = 10;
  const lastPage = 20;
  return (
    <Fragment>
    <div className="GameList">
      {loadingGameList && "로딩중..."}
      {!loadingGameList && gameList && 
          <div className="gameMain">  {
            gameList.map((game) => branchRendering(game, firstPage, lastPage))
          }
          </div>}
        
    </div>
    </Fragment>
  );
};

export default GameList;