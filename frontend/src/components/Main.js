import React, { Fragment, useState } from "react";

const Main = () => {
  const askArr = []

  const addArr = (param) =>{
    askArr.push(param)
    console.log(askArr)
  }
  const OX = (questNum) => {
    if(questNum =="quest1"){
      return (
        <Fragment>
        <button onClick = {() => {addArr("dog")}}>
          O
        </button>
        <button onClick = {() => {addArr("cat")}}>
          X
        </button>
        </Fragment>
      )
    } else if(questNum =="quest2"){
      return(
        <Fragment>
          <button onClick = {() => {addArr("constructure")}}>
            O
          </button>
          <button onClick = {() => {addArr("X")}}>
            X
          </button>
        </Fragment>
      )
    }
    
  }
  const quest1 = () => {
    return (
      <Fragment>
        "댕댕이보다 냥냥이!"
        {OX("quest1")}
      </Fragment>
    )
  }
  const quest2 = () => {
    return (
      <Fragment>
      "나만의 건축물을 설계하고 건설하고 싶다."
      {OX("quest1")}
      </Fragment>
    );
  }
  const quest3 = () => {
    return (
      <Fragment>
      "등골이 서늘해지는 짜릿한 공포를 느끼고 싶다."
      </Fragment>
    );
  }
  const quest4 = () => {
    return (
      <Fragment>
      "현실 연애 스킬, 게임에서 써볼까?"
      </Fragment>
    );
  }
  const quest5 = () => {
    return (
      <Fragment>
      "귀엽고 아기자기한 그래픽"
      </Fragment>
    );
}
  const quest6 = () => {
    return (
      <Fragment>
      "좀비물 완전 내 취향!"
      </Fragment>
    );
  }
  const quest7 = () => {
    return (
      <Fragment>
      "해결되지 않은 미지의 것에 대한 호기심이 있다."
      </Fragment>
    );
  }
  const quest8 = () => {
    return (
      <Fragment>
      "어두운 분위기가 좋다."
      </Fragment>
    );
  }
  const quest9 = () => {
    return (
      <Fragment>
      "영화 속 이야기의 주인공이 돼보고 싶다."
      </Fragment>
    );
  }


  return (
    <div id="ht-tm-jumbotron">
      <div class="jumbotron bg-transparent mb-0 radius-0">
        <div class="container">
          <div class="ht-tm-header">
            <div class="row">
              <div class="col-xl-8">
                <h1 class="display-2">
                  #Cooking, #Farm Gam<span class="vim-caret">e</span>
                </h1>
                <div class="lead mb-3 text-mono text-success">
                  A Bootstrap theme for 1337 hackers.
                </div>

                <p class="mt-5 text-grey text-spacey ask">
                  {quest1()}
                </p>

                <div class="text-mono">
                  <a
                    href="#!"
                    class="ht-tm-element btn btn-shadow text-mono btn-outline-warning"
                  >
                    Join With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;