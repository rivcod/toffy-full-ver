import React, { Fragment, useState } from "react";

const Main = () => {

  const quest1 = () => {
    return (
      "댕댕이보다 냥냥이!"
    );
  }
  const quest2 = () => {
    return (
      "나만의 건축물을 설계하고 건설하고 싶다."
    );
  }
  const quest3 = () => {
    return (
      "등골이 서늘해지는 짜릿한 공포를 느끼고 싶다."
    );
  }
  const quest4 = () => {
    return (
      "현실 연애 스킬, 게임에서 써볼까?"
    );
  }
  const quest5 = () => {
    return (
      "귀엽고 아기자기한 그래픽"
    );
}
  const quest6 = () => {
    return (
      "좀비물 완전 내 취향!"
    );
  }
  const quest7 = () => {
    return (
      "해결되지 않은 미지의 것에 대한 호기심이 있다."
    );
  }
  const quest8 = () => {
    return (
      "어두운 분위기가 좋다."
    );
  }
  const quest9 = () => {
    return (
      "영화 속 이야기의 주인공이 돼보고 싶다."
    );
  }


  return (
    // <div id="ht-tm-jumbotron">
    //   <div class="jumbotron bg-transparent mb-0 radius-0">
    //     <div class="container">
    //       <div class="ht-tm-header">
    //         <div class="row">
    //           <div class="col-xl-8">
    //             <div className="survey">
    //               <Fragment>
    //                 {
    //                   "댕댕이보다 냥냥이!"
    //                 }
    //               </Fragment>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
