const tagConverting = (tag, lang) => {
  if (lang === "한국어") {
    switch (tag) {
      case 1:
        return "액션";

      case 2:
        return "아케이드";

      case 3:
        return "인디";

      case 4:
        return "캐주얼";

      case 5:
        return "어드벤처";

      case 6:
        return "시뮬레이션";

      case 7:
        return "전략";

      case 8:
        return "롤플레잉";

      case 9:
        return "스포츠";

      case 10:
        return "공포";

      case 11:
        return "레이싱";

      case 12:
        return "픽셀 그래픽";

      case 13:
        return "퍼즐";

      case 14:
        return "스토리텔링";

      case 15:
        return "판타지";

      case 16:
        return "슈팅";

      case 17:
        return "생존";

      case 18:
        return "FPS";

      case 19:
        return "탐험";

      case 20:
        return "귀여운";

      case 21:
        return "영화";

      case 22:
        return "좀비";

      case 23:
        return "어두운";

      case 24:
        return "미스터리";

      case 25:
        return "건설";

      case 26:
        return "경영";

      case 27:
        return "로그라이크";

      case 28:
        return "원터치";

      case 29:
        return "전쟁";

      case 30:
        return "음악";

      case 31:
        return "연애 시뮬레이션";

      case 32:
        return "포스트 아포칼립스";

      case 33:
        return "중독성";

      case 34:
        return "아름다운";

      case 35:
        return "로맨스";

      case 36:
        return "마법사";

      case 37:
        return "카드게임";

      case 38:
        return "제2차 세계대전";

      case 39:
        return "레이싱";

      case 40:
        return "스릴러";

      case 41:
        return "비행";

      case 42:
        return "리듬";

      case 43:
        return "철학적";

      case 44:
        return "시간여행";

      case 45:
        return "고양이";

      case 46:
        return "개";

      case 47:
        return "축구";

      case 48:
        return "낚시";

      case 49:
        return "바이크";

      case 50:
        return "골프";

      case 51:
        return "당구";

      case 52:
        return "추리";

      case 53:
        return "농구";

      case 54:
        return "프로그래밍";

      case 55:
        return "보드";

      case 56:
        return "야구";

      case 57:
        return "사운드트랙";

      default:
        return "";
    }
  } else if (lang === "English") {
    switch (tag) {
      case 1:
        return "Action";

      case 2:
        return "Arcade";

      case 3:
        return "Indie";

      case 4:
        return "Casual";

      case 5:
        return "Adventure";

      case 6:
        return "Simulation";

      case 7:
        return "Strategy";

      case 8:
        return "Roleplay";

      case 9:
        return "Sports";

      case 10:
        return "Horror";

      case 11:
        return "Racing";

      case 12:
        return "Pixel";

      case 13:
        return "Puzzle";

      case 14:
        return "Story";

      case 15:
        return "Fantasy";

      case 16:
        return "Shooting";

      case 17:
        return "Survival";

      case 18:
        return "FPS";

      case 19:
        return "Exporler";

      case 20:
        return "Cute";

      case 21:
        return "Movie";

      case 22:
        return "Zombie";

      case 23:
        return "Dark";

      case 24:
        return "Mystery";

      case 25:
        return "Structure";

      case 26:
        return "Management";

      case 27:
        return "Rogue-like";

      case 28:
        return "One-touch";

      case 29:
        return "War";

      case 30:
        return "Music";

      case 31:
        return "Romance-simulation";

      case 32:
        return "Post-apocalypse";

      case 33:
        return "Addictive";

      case 34:
        return "Beautiful";

      case 35:
        return "Romance";

      case 36:
        return "Wizard";

      case 37:
        return "Cards";

      case 38:
        return "Worldwar";

      case 39:
        return "Racing";

      case 40:
        return "Thriller";

      case 41:
        return "Flight";

      case 42:
        return "Rhythm";

      case 43:
        return "Philosophy";

      case 44:
        return "Timeslip";

      case 45:
        return "Cat";

      case 46:
        return "Dog";

      case 47:
        return "Soccer";

      case 48:
        return "Fishing";

      case 49:
        return "Bike";

      case 50:
        return "Golf";

      case 51:
        return "Pocketball";

      case 52:
        return "Reasoning";

      case 53:
        return "Basketball";

      case 54:
        return "Programming";

      case 55:
        return "Board";

      case 56:
        return "Baseball";

      case 57:
        return "Soundtrack";

      default:
        return "";
    }
  }
};

export default tagConverting;
