import React, { Fragment, useState } from "react";

const Main = ({ checkTags, onAddTags }) => {
  // 태그 배열
  const [askArr, setAskArr] = useState([]);

  // 버튼에 따라 배열에 추가
  const addArr = (answer) => {
    setAskArr([...askArr, answer]);
  };

  // 버튼 함수 시작
  const OX = (questNum) => {
    if (questNum == "quest1") {
      return (
        <div>
          <div class="row">
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              {" "}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  I'll do it!
                  {/* 해볼게요! */}
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              {" "}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Excatly!
                  {/* 당장 시작해 */}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (questNum == "quest2") {
      return (
        <Fragment>
          <div class="row">
            <div
              onClick={() => {
                addArr("45");
              }}
            >
              {" "}
              {/*cat and dog*/}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  갓냥이!
                  {/* Yess. */}
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("46");
              }}
            >
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  개는 우리의 친구!
                  {/* Nope. */}
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum == "quest3") {
      return (
        <Fragment>
          <div class="row">
            <div
              onClick={() => {
                addArr("10");
              }}
            >
              {" "}
              {/*structure*/}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  언제나
                  {/* My Favorite */}
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  싫어요
                  {/* Nope */}
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum == "quest4") {
      return (
        <Fragment>
          <div class="row">
            <div
              onClick={() => {
                addArr("31");
              }}
            >
              {" "}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  네!
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  아니오
                  {/* Nope. */}
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum == "quest5") {
      return (
        <Fragment>
          <div class="row">
            <div
              onClick={() => {
                addArr("57");
              }}
            >
              {" "}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  있다
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  없다
                  {/* Nope. */}
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum == "quest6") {
      return (
        <Fragment>
          <div class="row">
            <div
              onClick={() => {
                addArr("14");
              }}
            >
              {" "}
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  당연하죠
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div class="text-mono">
                <a
                  href="#!"
                  class="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  별로
                  {/* Nooo... */}
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  };

  // 질문함수 시작

  const quest1 = () => {
    return (
      <Fragment>
        설문조사!
        {OX("quest1")}
      </Fragment>
    );
  };
  const quest2 = () => {
    return (
      <Fragment>
        "댕댕이보다 냥냥이!"
        {/* Do you prefer cat than doggy? */}
        {OX("quest2")}
      </Fragment>
    );
  };
  const quest3 = () => {
    return (
      <Fragment>
        "등골이 서늘해지는 짜릿한 공포를 느끼고 싶다."
        {/* I fancy a thrilling thrill */}
        {OX("quest3")}
      </Fragment>
    );
  };
  const quest4 = () => {
    return (
      <Fragment>
        "좀비물 완전 내 취향!"
        {/* I really love zombie! */}
        {OX("quest4")}
      </Fragment>
    );
  };
  const quest5 = () => {
    return (
      <Fragment>
        "게임에 등장하는 사운드트랙을 따로 찾아본 적이 있다."
        {/* I've been looking for soundtracks in the game. */}
        {OX("quest5")}
      </Fragment>
    );
  };
  const quest6 = () => {
    return (
      <Fragment>
        "스토리가 좋으면 좋을 수록 몰입도가 커진다."
        {/* The better the story, the greater the immersion. */}
        {OX("quest6")}
      </Fragment>
    );
  };
  const greet = () => {
    return (
      <Fragment>
        <h1>{checkTags}</h1>
        "좋아하는 장르는"
        {/* You are interested in... */}
      </Fragment>
    );
  };

  const branchRendering = (num) => {
    const arrCheck = Object.keys(num);
    if (arrCheck.length == 0) {
      return quest1();
    } else if (arrCheck.length == 1) {
      return quest2();
    } else if (arrCheck.length == 2) {
      return quest3();
    } else if (arrCheck.length == 3) {
      return quest4();
    } else if (arrCheck.length == 4) {
      return quest5();
    } else if (arrCheck.length == 5) {
      return quest6();
    } else if (arrCheck.length == 6) {
      return greet();
    }
  };

  return (
    <div id="ht-tm-jumbotron">
      <div class="jumbotron bg-transparent mb-0 radius-0">
        <div class="container">
          <div class="ht-tm-header">
            <div class="row">
              <div class="col-xl-8">
                <h1 class="display-2">
                  #Tap of your tast<span class="vim-caret">e</span>
                </h1>
                <div class="lead mb-3 text-mono text-success">
                  Find the game suits you perfectly on Toffy.
                </div>

                <p class="mt-5 text-grey text-spacey ask">
                  {branchRendering(askArr)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
