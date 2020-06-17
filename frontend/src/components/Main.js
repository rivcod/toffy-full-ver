import React, { Fragment, useState } from "react";

const Main = ({ selectedLang }) => {
  // 태그 배열
  const [askArr, setAskArr] = useState([]);
  // 버튼에 따라 배열에 추가
  const addArr = (answer) => {
    setAskArr([...askArr, answer]);
  };

  // 버튼 함수 시작
  const OX = (questNum) => {
    if (questNum === "quest1") {
      return (
        <div>
          <div className="row">
            <div
              onClick={() => {
                addArr("do");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  해볼게요!
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("do");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  당장 시작해!
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (questNum === "quest2") {
      delete askArr["0"]
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("고양이");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  갓냥이!
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("강아지");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  개는 우리의 친구!
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "quest3") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("공포");
              }}
            >
              {" "}
              {/*structure*/}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  언제나
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  싫어요
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "quest4") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("좀비");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
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
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  아니오
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "quest5") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("사운드트랙");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
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
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  없다
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "quest6") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("스토리텔링");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
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
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  별로
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }

    // (English) 버튼함수 시작
    if (questNum === "questEng1") {
      return (
        <div>
          <div className="row">
            <div
              onClick={() => {
                addArr("do");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  I'll do it!
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("do");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Excatly!
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (questNum === "questEng2") {
      delete askArr["0"]
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("Cat");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Yess.
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("Dog");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Nope.
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "questEng3") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("Horror");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  My Favorite
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Nope
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "questEng4") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("Zombie");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Yess.
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Nope.
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "questEng5") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("Soundtrack");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Yess.
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Nope.
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else if (questNum === "questEng6") {
      return (
        <Fragment>
          <div className="row">
            <div
              onClick={() => {
                addArr("Stroytelling");
              }}
            >
              {" "}
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Yess.
                </a>
              </div>
            </div>
            <div
              onClick={() => {
                addArr("0");
              }}
            >
              <div className="text-mono">
                <a
                  href="#!"
                  className="ht-tm-element btn btn-outline-primary btn-shadow text-mono"
                >
                  Nooo...
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  };

  // (한국어)질문함수 시작
  const quest1 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">💡설문조사!</span>
        {OX("quest1")}
      </Fragment>
    );
  };
  const quest2 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"🐶댕댕이보다 🐱냥냥이!"</span>
        {OX("quest2")}
      </Fragment>
    );
  };
  const quest3 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"등골이 서늘해지는 짜릿한 😱공포를 느끼고 싶다."</span>
        {OX("quest3")}
      </Fragment>
    );
  };
  const quest4 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"🧟좀비물 완전 내 취향!"</span>
        {OX("quest4")}
      </Fragment>
    );
  };
  const quest5 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"게임에 등장하는 🎵사운드트랙을 따로 찾아본 적이 있다."</span>
        {OX("quest5")}
      </Fragment>
    );
  };
  const quest6 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"✍🏻스토리가 좋으면 좋을 수록 몰입도가 커진다."</span>
        {OX("quest6")}
      </Fragment>
    );
  };
  const tagPush =(num) => {
    if(askArr[num]!=="0"){
      return (<button className="ht-tm-element badge badge-primary main-badge" disabled='disabled'>{askArr[num]}</button>);
    }
  }
  
  const greet = () => {
    return (
      <Fragment>
        "좋아하는 장르는"
        <br></br>
        {tagPush("1")}
        {tagPush("2")}
        {tagPush("3")}
        {tagPush("4")}
        {tagPush("5")}
      </Fragment>
    );
  };

  // (English)질문함수 시작
  const questEng1 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">💡Survey!</span>
        {OX("questEng1")}
      </Fragment>
    );
  };
  const questEng2 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"Do you prefer 🐱cat than 🐶doggy?"</span>
        {OX("questEng2")}
      </Fragment>
    );
  };
  const questEng3 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"I fancy a thrilling 😱thrill."</span>
        {OX("questEng3")}
      </Fragment>
    );
  };
  const questEng4 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"I really love 🧟zombie"</span>
        {OX("questEng4")}
      </Fragment>
    );
  };
  const questEng5 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"I've been looking for 🎵soundtracks in the game."</span>
        {/*  */}
        {OX("questEng5")}
      </Fragment>
    );
  };
  const questEng6 = () => {
    return (
      <Fragment>
        <span role="img" aria-label="">"The better the ✍🏻story, the greater the immersion."</span>
        {OX("questEng6")}
      </Fragment>
    );
  };
  
  const greetEng = () => {
    return (
      <Fragment>
        "You are interested in..."
        <br></br>
        {tagPush("1")}
        {tagPush("2")}
        {tagPush("3")}
        {tagPush("4")}
        {tagPush("5")}
      </Fragment>
    );
  };

  const branchRendering = (num) => {
    const arrCheck = Object.keys(num);
    if(selectedLang==="한국어"){
      if (arrCheck.length === 0) {
        return quest1();
      } else if (arrCheck.length === 1) {
        return quest2();
      } else if (arrCheck.length === 2) {
        return quest3();
      } else if (arrCheck.length === 3) {
        return quest4();
      } else if (arrCheck.length === 4) {
        return quest5();
      } else if (arrCheck.length === 5) {
        return quest6();
      } else if (arrCheck.length === 6) {
        return greet();
      }
    } else if(selectedLang==="English"){
      if (arrCheck.length === 0) {
        return questEng1();
      } else if (arrCheck.length === 1) {
        return questEng2();
      } else if (arrCheck.length === 2) {
        return questEng3();
      } else if (arrCheck.length === 3) {
        return questEng4();
      } else if (arrCheck.length === 4) {
        return questEng5();
      } else if (arrCheck.length === 5) {
        return questEng6();
      } else if (arrCheck.length === 6) {
        return greetEng();
      }
    }
  };
  const entrance = (lang) => {
    if(lang==="한국어"){
      return "당신에게 딱 맞는 게임을 찾아보세요."
    } else if(lang==="English") {
      return "Find the game suits you perfectly on Toffy."
    }
  }
  return (
    <div id="ht-tm-jumbotron">
      <div className="jumbotron bg-transparent mb-0 radius-0">
        <div className="container">
          <div className="ht-tm-header">
            <div className="row">
              <div className="col-xl-8">
                <h1 className="display-2">
                  #Tap off your tast<span className="vim-caret">e</span>
                </h1>
                <div className="lead mb-3 text-mono text-success">
                  {entrance(selectedLang)}
                </div>

                <div className="mt-5 text-grey text-spacey ask">
                  {branchRendering(askArr)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

