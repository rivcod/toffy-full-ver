import React from "react";

const Tag = ({selectedTags, selectedColors, selectTags, unselectTags, setCurrentPage, selectedLang}) => {
  const colorCasting = Array.from(selectedColors)
  const colorToggle = (tags) => {
    if(colorCasting.indexOf(String(tags))!==-1){
      return true;
    } else {
      return false;
    }
  }
  const tagToggle = (tags) => {
    const tagCasting = Array.from(selectedTags)
    setCurrentPage(1) // 페이지네이션 초기화
    if(tagCasting!=""){
      for (var tagItem in tagCasting) {
        if(tagCasting.indexOf(tags)===-1){
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
  if(selectedLang==="한국어"){
    return (
      <div className="ht-tm-codeblock TagsContainer">
        <div className="container py-5 mb5">
          <button className={colorToggle(1) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" }  onClick={() => {
              return (tagToggle("1"));
            }}>
            #액션
          </button>
          <button className={colorToggle(2) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("2");
            }}>
            #아케이드
          </button>
          <button className={colorToggle(3) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("3");
            }}>
            #인디
          </button>
          <button className={colorToggle(4) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("4");
            }}>
            #케주얼
          </button>
          <button className={colorToggle(5) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("5");
            }}>
            #어드벤처
          </button>
          <button className={colorToggle(6) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("6");
            }}>
            #시뮬레이션
          </button>
          <button className={colorToggle(7) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("7");
            }}>
            #전략
          </button>
          <button className={colorToggle(8) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("8");
            }}>
            #롤플레잉
          </button>
          <button className={colorToggle(9) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("9");
            }}>
            #스포츠
          </button>
          <button className={colorToggle(10) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("10");
            }}>
            #공포
          </button>
          <button className={colorToggle(12) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("12");
            }}>
            #픽셀 그래픽
          </button>
          <button className={colorToggle(13) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("13");
            }}>
            #퍼즐
          </button>
          <button className={colorToggle(14) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("14");
            }}>
            #스토리텔링
          </button>
          <button className={colorToggle(15) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("15");
            }}>
            #판타지
          </button>
          <button className={colorToggle(16) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("16");
            }}>
            #슈팅
          </button>
          <button className={colorToggle(17) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("17");
            }}>
            #생존
          </button>
          <button className={colorToggle(18) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("18");
            }}>
            #FPS
          </button>
          <button className={colorToggle(19) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("19");
            }}>
            #탐험
          </button>
          <button className={colorToggle(20) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("20");
            }}>
            #귀여운
          </button>
          <button className={colorToggle(21) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("21");
            }}>
            #영화
          </button>
          <button className={colorToggle(22) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("22");
            }}>
            #좀비
          </button>
          <button className={colorToggle(23) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("23");
            }}>
            #어두운
          </button>
          <button className={colorToggle(24) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("24");
            }}>
            #미스터리
          </button>
          <button className={colorToggle(25) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("25");
            }}>
            #건설
          </button>
          <button className={colorToggle(26) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("26");
            }}>
            #경영
          </button>
          <button className={colorToggle(27) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("27");
            }}>
            #로그라이크
          </button>
          <button className={colorToggle(28) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("28");
            }}>
            #원터치
          </button>
          <button className={colorToggle(29) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("29");
            }}>
            #전쟁
          </button>
          <button className={colorToggle(30) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("30");
            }}>
            #음악
          </button>
          <button className={colorToggle(31) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("31");
            }}>
            #연애 시뮬레이션
          </button>
          <button className={colorToggle(32) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("32");
            }}>
            #포스트 아포칼립스
          </button>
          <button className={colorToggle(33) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("33");
            }}>
            #중독성
          </button>
          <button className={colorToggle(34) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("34");
            }}>
            #아름다운
          </button>
          <button className={colorToggle(35) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("35");
            }}>
            #로맨스
          </button>
          <button className={colorToggle(36) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("36");
            }}>
            #마법사
          </button>
          <button className={colorToggle(37) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("37");
            }}>
            #카드게임
          </button>
          <button className={colorToggle(38) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("38");
            }}>
            #제2차 세계대전
          </button>
          <button className={colorToggle(39) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("39");
            }}>
            #레이싱
          </button>
          <button className={colorToggle(40) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("40");
            }}>
            #스릴러
          </button>
          <button className={colorToggle(41) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("41");
            }}>
            #비행
          </button>
          <button className={colorToggle(42) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("42");
            }}>
            #리듬
          </button>
          <button className={colorToggle(43) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("43");
            }}>
            #철학적
          </button>
          <button className={colorToggle(44) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("44");
            }}>
            #시간여행
          </button>
          <button className={colorToggle(45) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("45");
            }}>
            #고양이
          </button>
          <button className={colorToggle(46) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("46");
            }}>
            #개
          </button>
          <button className={colorToggle(47) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("47");
            }}>
            #축구
          </button>
          <button className={colorToggle(48) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("48");
            }}>
            #낚시
          </button>
          <button className={colorToggle(49) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("49");
            }}>
            #바이크
          </button>
          <button className={colorToggle(50) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("50");
            }}>
            #골프
          </button>
          <button className={colorToggle(51) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("51");
            }}>
            #당구
          </button>
          <button className={colorToggle(52) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("52");
            }}>
            #추리
          </button>
          <button className={colorToggle(53) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("53");
            }}>
            #농구
          </button>
          <button className={colorToggle(54) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("54");
            }}>
            #프로그래밍
          </button>
          <button className={colorToggle(55) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("55");
            }}>
            #보드
          </button>
          <button className={colorToggle(56) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("56");
            }}>
            #야구
          </button>
          <button className={colorToggle(57) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("57");
            }}>
            #사운드트랙
          </button>
        </div>
      </div>
    );
  } else if(selectedLang==="English"){
    return (
      <div className="ht-tm-codeblock TagsContainer">
        <div className="container py-5 mb5">
          <button className={colorToggle(1) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" }  onClick={() => {
              return (tagToggle("1"));
            }}>
            #Action
          </button>
          <button className={colorToggle(2) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("2");
            }}>
            #Arcade
          </button>
          <button className={colorToggle(3) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("3");
            }}>
            #Indie
          </button>
          <button className={colorToggle(4) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("4");
            }}>
            #Casual
          </button>
          <button className={colorToggle(5) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("5");
            }}>
            #Adventure
          </button>
          <button className={colorToggle(6) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("6");
            }}>
            #Simulation
          </button>
          <button className={colorToggle(7) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("7");
            }}>
            #Strategy
          </button>
          <button className={colorToggle(8) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("8");
            }}>
            #Roleplay
          </button>
          <button className={colorToggle(9) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("9");
            }}>
            #Sports
          </button>
          <button className={colorToggle(10) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("10");
            }}>
            #Horror
          </button>
          <button className={colorToggle(11) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("11");
            }}>
            #Racing
          </button>
          <button className={colorToggle(12) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("12");
            }}>
            #Pixel
          </button>
          <button className={colorToggle(13) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("13");
            }}>
            #Puzzle
          </button>
          <button className={colorToggle(14) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("14");
            }}>
            #Story
          </button>
          <button className={colorToggle(15) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("15");
            }}>
            #Fantasy
          </button>
          <button className={colorToggle(16) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("16");
            }}>
            #Shooting
          </button>
          <button className={colorToggle(17) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("17");
            }}>
            #Survival
          </button>
          <button className={colorToggle(18) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("18");
            }}>
            #FPS
          </button>
          <button className={colorToggle(19) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("19");
            }}>
            #Exporler
          </button>
          <button className={colorToggle(20) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("20");
            }}>
            #Cute
          </button>
          <button className={colorToggle(21) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("21");
            }}>
            #Movie
          </button>
          <button className={colorToggle(22) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("22");
            }}>
            #Zombie
          </button>
          <button className={colorToggle(23) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("23");
            }}>
            #Dark
          </button>
          <button className={colorToggle(24) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("24");
            }}>
            #Mystery
          </button>
          <button className={colorToggle(25) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("25");
            }}>
            #Structure
          </button>
          <button className={colorToggle(26) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("26");
            }}>
            #Management
          </button>
          <button className={colorToggle(27) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("27");
            }}>
            #Rogue-like
          </button>
          <button className={colorToggle(28) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("28");
            }}>
            #One-touch
          </button>
          <button className={colorToggle(29) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("29");
            }}>
            #War
          </button>
          <button className={colorToggle(30) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("30");
            }}>
            #Music
          </button>
          <button className={colorToggle(31) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("31");
            }}>
            #Rom-simulation
          </button>
          <button className={colorToggle(32) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("32");
            }}>
            #Post-apocalypse
          </button>
          <button className={colorToggle(33) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("33");
            }}>
            #Addictive
          </button>
          <button className={colorToggle(34) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("34");
            }}>
            #Beautiful
          </button>
          <button className={colorToggle(35) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("35");
            }}>
            #Romance
          </button>
          <button className={colorToggle(36) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("36");
            }}>
            #Wizard
          </button>
          <button className={colorToggle(37) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("37");
            }}>
            #Cards
          </button>
          <button className={colorToggle(38) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("38");
            }}>
            #Worldwar
          </button>
          <button className={colorToggle(39) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("39");
            }}>
            #Racing
          </button>
          <button className={colorToggle(40) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("40");
            }}>
            #Thriller
          </button>
          <button className={colorToggle(41) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("41");
            }}>
            #Flight
          </button>
          <button className={colorToggle(42) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("42");
            }}>
            #Rhythm
          </button>
          <button className={colorToggle(43) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("43");
            }}>
            #Philosophy
          </button>
          <button className={colorToggle(44) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("44");
            }}>
            #Timeslip
          </button>
          <button className={colorToggle(45) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("45");
            }}>
            #Cat
          </button>
          <button className={colorToggle(46) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("46");
            }}>
            #Dog
          </button>
          <button className={colorToggle(47) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("47");
            }}>
            #Soccer
          </button>
          <button className={colorToggle(48) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("48");
            }}>
            #Fishing
          </button>
          <button className={colorToggle(49) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("49");
            }}>
            #Bike
          </button>
          <button className={colorToggle(50) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("50");
            }}>
            #Golf
          </button>
          <button className={colorToggle(51) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("51");
            }}>
            #Pocketball
          </button>
          <button className={colorToggle(52) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("52");
            }}>
            #Reasoning
          </button>
          <button className={colorToggle(53) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("53");
            }}>
            #Basketball
          </button>
          <button className={colorToggle(54) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("54");
            }}>
            #Programming
          </button>
          <button className={colorToggle(55) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("55");
            }}>
            #Board
          </button>
          <button className={colorToggle(56) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("56");
            }}>
            #Baseball
          </button>
          <button className={colorToggle(57) ? "ht-tm-element badge badge-success" : "ht-tm-element badge badge-primary" } onClick={() => {
              return tagToggle("57");
            }}>
            #Soundtrack
          </button>
        </div>
      </div>
    );
  }
}

export default Tag;
