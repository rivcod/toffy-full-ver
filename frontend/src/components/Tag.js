import React, { Fragment, useState } from "react";

const Tag = ({selectedTags, selectTags, unselectTags}) => {
  const tagToggle = (tags) => {
    const tagCasting = Array.from(selectedTags)
    if(tagCasting!=""){
      for (var tagItem in tagCasting) {
        if(tagCasting.indexOf(tags)==-1){
          selectTags(tags)
          break;
        } else {
          unselectTags(tags)
          break;
        }
      }
    } else {
      selectTags(tags)
    }
  }
    return (
      <div className="ht-tm-codeblock TagsContainer">
        <div className="container py-5 mb5">
          <p>{selectedTags}</p>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("1");
            }}>
            #액션
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("2");
            }}>
            #아케이드
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("3");
            }}>
            #인디
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("4");
            }}>
            #케주얼
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("5");
            }}>
            #어드벤처
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("6");
            }}>
            #시뮬레이션
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("7");
            }}>
            #전략
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("8");
            }}>
            #롤플레잉
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("9");
            }}>
            #스포츠
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("10");
            }}>
            #공포
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("11");
            }}>
            #레이싱
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("12");
            }}>
            #픽셀 그래픽
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("13");
            }}>
            #퍼즐
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("14");
            }}>
            #스토리텔링
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("15");
            }}>
            #판타지
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("16");
            }}>
            #슈팅
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("17");
            }}>
            #생존
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("18");
            }}>
            #FPS
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("19");
            }}>
            #탐험
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("20");
            }}>
            #귀여운
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("21");
            }}>
            #영화
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("22");
            }}>
            #좀비
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("23");
            }}>
            #어두운
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("24");
            }}>
            #미스터리
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("25");
            }}>
            #건설
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("26");
            }}>
            #경영
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("27");
            }}>
            #로그라이크
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("28");
            }}>
            #원터치
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("29");
            }}>
            #전쟁
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("30");
            }}>
            #음악
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("31");
            }}>
            #연애 시뮬레이션
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("32");
            }}>
            #포스트 아포칼립스
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("33");
            }}>
            #중독성
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("34");
            }}>
            #아름다운
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("35");
            }}>
            #로맨스
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("36");
            }}>
            #마법사
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("37");
            }}>
            #카드게임
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("38");
            }}>
            #제2차 세계대전
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("39");
            }}>
            #레이싱
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("40");
            }}>
            #스릴러
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("41");
            }}>
            #비행
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("42");
            }}>
            #리듬
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("43");
            }}>
            #철학적
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("44");
            }}>
            #시간여행
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("45");
            }}>
            #고양이
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("46");
            }}>
            #개
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("47");
            }}>
            #축구
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("48");
            }}>
            #낚시
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("49");
            }}>
            #바이크
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("50");
            }}>
            #골프
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("51");
            }}>
            #당구
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("52");
            }}>
            #추리
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("53");
            }}>
            #농구
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("54");
            }}>
            #프로그래밍
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("55");
            }}>
            #보드
          </button>
          <button className="ht-tm-element badge badge-primary" onClick={() => {
              return tagToggle("1");
            }}>
            #야구
          </button>
        </div>
      </div>
    );
}

export default Tag;
