import React, { Fragment, useState } from "react";

const Main = () => {
  // 정답 배열
  const [askArr, setAskArr] = useState([]);

  // 버튼에 따라 배열에 추가
  const addArr = (answer) => {
    setAskArr([
      ...askArr,
      {
        answer
      }
    ]);
  };
  // 버튼 함수 시작
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
    } else if(questNum =="quest3"){
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
    } else if(questNum =="quest4"){
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
    } else if(questNum =="quest5"){
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
    } else if(questNum =="quest6"){
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
    } else if(questNum =="quest7"){
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
    } else if(questNum =="quest8"){
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
    } else if(questNum =="quest9"){
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
    } else if(questNum =="quest10"){
      return(
        addArr("done")
      )
    }
    
  }
  // 질문함수 시작
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
      {OX("quest2")}
      </Fragment>
    );
  }
  const quest4 = () => {
    return (
      <Fragment>
      "현실 연애 스킬, 게임에서 써볼까?"
      {OX("quest3")}
      </Fragment>
    );
  }
  const quest5 = () => {
    return (
      <Fragment>
      "귀엽고 아기자기한 그래픽"
      {OX("quest4")}
      </Fragment>
    );
}
  const quest6 = () => {
    return (
      <Fragment>
      "좀비물 완전 내 취향!"
      {OX("quest6")}
      </Fragment>
    );
  }
  const quest7 = () => {
    return (
      <Fragment>
      "해결되지 않은 미지의 것에 대한 호기심이 있다."
      {OX("quest7")}
      </Fragment>
    );
  }
  const quest8 = () => {
    return (
      <Fragment>
      "어두운 분위기가 좋다."
      {OX("quest8")}
      </Fragment>
    );
  }
  const quest9 = () => {
    return (
      <Fragment>
      "영화 속 이야기의 주인공이 돼보고 싶다."
      {OX("quest9")}
      </Fragment>
    );
  }
  const greet = () => {
    return (
      <Fragment>
      "축하합니다 설문조사를 완료했습니다. 블라블라"
      {OX("quest10")}
      </Fragment>
    );
  }

  const branchRendering = (num) => {
    if(!num[0]){
      return quest1()
    } else if(num[0]){
      return quest2()
    } else if(num[1]){
      return quest3()
    } else if(num[2]){
      return quest4()
    } else if(num[3]){
      return quest5()
    } else if(num[4]){
      return quest6()
    } else if(num[5]){
      return quest7()
    } else if(num[6]){
      return quest8()
    } else if(num[7]){
      return quest9()
    } else if(num[8]){
      return greet()
    }
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
                  {
                    branchRendering(askArr)
                  }
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