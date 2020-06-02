import React, {useEffect } from "react";
import tagConverting from "../js/tagConvert.js"

let check = 0;
let Posts = 0;                                                                    
const GameList = ({ gameList, loadingGameList, select, currentPage, setTotalPosts, selectedLang, selectedGame}) => {
  // 페이지네이션 //
  let firstValue = (currentPage * 12) - 12
  let markValue = 0
  if(currentPage===1){
    firstValue = 0
  }
  useEffect(() => {
      setTotalPosts(Posts);
  });

  // 페이지네이션 끝//
  const selectCasting = Array.from(select)
  check = 0;
  Posts = 0;
  const A = (game) => {
    Posts += 1
    markValue +=1
    //검색
    const regGameName = String(game.title).replace(/\s/gi, "").toUpperCase()
    const regGameNameComparison = String(selectedGame.gameName).replace(/\s/gi, "").toUpperCase()
    if(selectedGame.gameName==="all"){
      if(firstValue < markValue&&markValue < firstValue+13){
        if(game){
            const nukeOne = (tagCheck) => {
              if (tagCheck !== 0) {
                return tagConverting(parseInt(tagCheck),selectedLang)
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
      } else{
        return ""
      }
    } else if(regGameName.indexOf(regGameNameComparison)!==-1){
      if(game){
        const nukeOne = (tagCheck) => {
          if (tagCheck !== 0) {
            return tagConverting(parseInt(tagCheck),selectedLang)
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
    } else {
      return B("searching")
    }
  };
  const B = (arg) => {
    check +=1
    if(check>=200){
      check = 0
      Posts = 0;
      if(arg!=="searching"){
        if(selectedLang==="한국어"){
          return (
            <div class="ht-tm-element alert alert-success" role="alert">
            <h4 class="alert-heading">게임을 찾지 못했습니다.</h4>
            장르 조합을 변경하시거나 &nbsp;
            <a href="Contact" class="alert-link">이곳을 눌러 원하시는 게임을 말씀해주세요.</a>
          </div>
          )
        } else if (selectedLang==="English"){
          return (
            <div class="ht-tm-element alert alert-success" role="alert">
            <h4 class="alert-heading">Game not found.</h4>
            Change genre combinations, or &nbsp;
            <a href="Contact" class="alert-link">Click here to tell us the game you want.</a>
          </div>
          )
        }
      } else {
        if(selectedLang==="한국어"){
          return (
            <div class="ht-tm-element alert alert-primary" role="alert">
            <h4 class="alert-heading">게임을 찾지 못했습니다.</h4>
            검색어를 변경하시거나 &nbsp;
            <a href="Contact" class="alert-link">이곳을 눌러 원하시는 게임을 말씀해주세요.</a>
          </div>
          )
        } else if (selectedLang==="English"){
          return (
            <div class="ht-tm-element alert alert-primary" role="alert">
            <h4 class="alert-heading">Game not found.</h4>
            Change search value, or &nbsp;
            <a href="Contact" class="alert-link">Click here to tell us the game you want.</a>
          </div>
          )
        }
      }
    }
  }
  const branchRendering = (game) => {
    if (game && selectCasting.length === 0) {
      return A(game)
    } else {
      if (
        (selectCasting.length === 1 && ((selectCasting.indexOf(game.tag1) !== -1) || (selectCasting.indexOf(game.tag2) !== -1) || (selectCasting.indexOf(game.tag3) !== -1)))
        || (
          (selectCasting.length === 2) && (((selectCasting.indexOf(game.tag1) !== -1) && (selectCasting.indexOf(game.tag2) !== -1)) || ((selectCasting.indexOf(game.tag1) !==-1) && (selectCasting.indexOf(game.tag3) !== -1)) | ((selectCasting.indexOf(game.tag2) !== -1) && (selectCasting.indexOf(game.tag3) !== -1)))
        )
        || (
          selectCasting.length === 3 && ((selectCasting.indexOf(game.tag1) !== -1) && (selectCasting.indexOf(game.tag2) !== -1) && (selectCasting.indexOf(game.tag3) !== -1))
        )
      ) 
      {
        return A(game)
      } else {
        return B(game)
      }
    }
  }
 //로딩 애니메이션
  const loadingAnime = () => {
    if(loadingGameList){
    return(
      <div class="ht-tm-codeblock mt-5">
        <div class="progress ht-tm-element">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}></div>
        </div>
      </div>
    );}
  }

  return (
    <div className="GameList">
      {loadingAnime()}
      {!loadingGameList && gameList && 
          <div className="gameMain">  {
            gameList.map((game) => branchRendering(game))
          }
          </div>}
    </div>
  );
};

export default GameList;