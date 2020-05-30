import React, { Fragment,useEffect } from "react";
import tagConverting from "../js/tagConvert.js"

let check = 0;
let Posts = 0;                                                                    
const GameList = ({ gameList, loadingGameList, select, currentPage, totalPosts, postsPerPage, setTotalPosts, setCurrentPage, setPostsPerPage}) => {
  // 페이지네이션 //
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log("currentPage = "+currentPage)
  console.log("postsPerPage = "+postsPerPage)
  console.log("totalPosts = "+totalPosts)

  useEffect (() => {
    return(
    setTotalPosts(Posts))
  },[]);
  // 페이지네이션 끝//
  const selectCasting = Array.from(select)
  check = 0;
  Posts = 0;
  const A = (game) => {
    Posts += 1
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
  const B = (game) => {
    check +=1
    if(check>=200){
      check = 0
      Posts = 0;
      return (
      <div class="ht-tm-element alert alert-success" role="alert">
      <h4 class="alert-heading">게임을 찾지 못했습니다.</h4>
      장르 조합을 변경하시거나 &nbsp;
      <a href="Contact" class="alert-link">이곳을 눌러 원하시는 게임을 말씀해주세요.</a>
    </div>
      )
    }
  }
  const branchRendering = (game) => {
    if (game && selectCasting.length == 0) {
      return A(game)
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
        return A(game)
      } else {
        return B(game)
      }
    }
  }
 
  return (
    <Fragment>
    <div className="GameList">
      {loadingGameList && "로딩중..."}
      {!loadingGameList && gameList && 
          <div className="gameMain">  {
            gameList.map((game) => branchRendering(game))
          }
          </div>}
    </div>
    </Fragment>
  );
};

export default GameList;