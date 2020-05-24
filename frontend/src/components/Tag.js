import React, { Fragment, useState } from "react";
let num = false;

const Tag = ({ selectedTags, selectTags, unselectTags }) => {
  const tagToggle = (tags) => {
    const tagCasting = Object.entries(selectedTags);
    if (tagCasting != "") {
      for (var tagItem in tagCasting) {
        console.log("tagItem  =" + tagItem);
        console.log("tags  =" + tags);
        if (tags != tagItem && num == false) {
          num = true;
          selectTags(tags);
          console.log("생성" + tagItem);
          break;
        } else {
          num = false;
          unselectTags(tags);
          console.log("제거");
          break;
        }
      }
    } else {
      selectTags(tags);
      num = true;
      console.log("초기화");
    }
  };
  return (
    <div className="ht-tm-codeblock TagsContainer">
      <div className="container py-5 mb5">
        <p>{selectedTags}</p>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return tagToggle(1);
          }}
        >
          #액션
          {/* action */}
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("2"), tagToggle(2);
          }}
        >
          #아케이드
          {/* arcade */}
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("3");
          }}
        >
          #인디
          {/* indie */}
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("4");
          }}
        >
          #캐주얼
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("5");
          }}
        >
          #어드벤처
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("6");
          }}
        >
          #시뮬레이션
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("7");
          }}
        >
          #전략
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("8");
          }}
        >
          #롤플레잉
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("9");
          }}
        >
          #스포츠
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("10");
          }}
        >
          #공포
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("11");
          }}
        >
          #레이싱
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("12");
          }}
        >
          #픽셀 그래픽
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("13");
          }}
        >
          #퍼즐
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("14");
          }}
        >
          #스토리텔링
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("15");
          }}
        >
          #판타지
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("16");
          }}
        >
          #슈팅
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("17");
          }}
        >
          #생존
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("18");
          }}
        >
          #FPS
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("19");
          }}
        >
          #탐험
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("20");
          }}
        >
          #귀여운
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("21");
          }}
        >
          #영화
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("22");
          }}
        >
          #좀비
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("23");
          }}
        >
          #어두운
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("24");
          }}
        >
          #미스터리
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("25");
          }}
        >
          #건설
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("26");
          }}
        >
          #경영
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("27");
          }}
        >
          #로그라이크
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("28");
          }}
        >
          #원터치
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("29");
          }}
        >
          #전쟁
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("30");
          }}
        >
          #음악
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("31");
          }}
        >
          #연애 시뮬레이션
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("32");
          }}
        >
          #포스트 아포칼립스
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("33");
          }}
        >
          #중독성
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("34");
          }}
        >
          #아름다운
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("35");
          }}
        >
          #로맨스
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("36");
          }}
        >
          #마법사
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("37");
          }}
        >
          #카드게임
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("38");
          }}
        >
          #제2차 세계대전
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("39");
          }}
        >
          #레이싱
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("40");
          }}
        >
          #스릴러
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("41");
          }}
        >
          #비행
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("42");
          }}
        >
          #리듬
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("43");
          }}
        >
          #철학적
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("44");
          }}
        >
          #시간여행
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("45");
          }}
        >
          #고양이
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("46");
          }}
        >
          #개
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("47");
          }}
        >
          #축구
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("48");
          }}
        >
          #낚시
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("49");
          }}
        >
          #바이크
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("50");
          }}
        >
          #골프
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("51");
          }}
        >
          #당구
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("52");
          }}
        >
          #추리
          {/* reasoning */}
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("53");
          }}
        >
          #농구
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("54");
          }}
        >
          #프로그래밍
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("55");
          }}
        >
          #보드
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("56");
          }}
        >
          #야구
        </button>
        <button
          className="ht-tm-element badge badge-primary"
          onClick={() => {
            return selectTags("57");
          }}
        >
          #사운드트랙
          {/* soundtrack */}
        </button>
      </div>
    </div>
  );
};

export default Tag;
