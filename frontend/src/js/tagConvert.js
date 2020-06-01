const tagConverting = (tag, lang) => {
    if(lang=="한국어"){
        switch (tag){
            case 1 :
                return "액션";
                break;
            case 2 :
                return "아케이드";
                break;
            case 3 :
                return "인디";
                break;
            case 4 :
                return "캐주얼";
                break;
            case 5 :
                return "어드벤처";
                break;
            case 6 :
                return "시뮬레이션";
                break;
            case 7 :
                return "전략";
                break;
            case 8 :
                return "롤플레잉";
                break;
            case 9 :
                return "스포츠";
                break;
            case 10 :
                return "공포";
                break;
            case 11 :
                return "레이싱";
                break;
            case 12 :
                return "픽셀 그래픽";
                break;
            case 13 :
                return "퍼즐";
                break;
            case 14 :
                return "스토리텔링";
                break;
            case 15 :
                return "판타지";
                break;
            case 16 :
                return "슈팅";
                break;
            case 17 :
                return "생존";
                break;
            case 18 :
                return "FPS";
                break;
            case 19 :
                return "탐험";
                break;
            case 20 :
                return "귀여운";
                break;
            case 21 :
                return "영화";
                break;
            case 22 :
                return "좀비";
                break;
            case 23 :
                return "어두운";
                break;
            case 24 :
                return "미스터리";
                break;
            case 25 :
                return "건설";
                break;
            case 26 :
                return "경영";
                break;
            case 27 :
                return "로그라이크";
                break;
            case 28 :
                return "원터치";
                break;
            case 29 :
                return "전쟁";
                break;
            case 30 :
                return "음악";
                break;
            case 31 :
                return "연애 시뮬레이션";
                break;
            case 32 :
                return "포스트 아포칼립스";
                break;
            case 33 :
                return "중독성";
                break;
            case 34 :
                return "아름다운";
                break;
            case 35 :
                return "로맨스";
                break;
            case 36 :
                return "마법사";
                break;
            case 37 :
                return "카드게임";
                break;
            case 38 :
                return "제2차 세계대전";
                break;
            case 39 :
                return "레이싱";
                break;
            case 40 :
                return "스릴러";
                break;
            case 41 :
                return "비행";
                break;
            case 42 :
                return "리듬";
                break;
            case 43 :
                return "철학적";
                break;
            case 44 :
                return "시간여행";
                break;
            case 45 :
                return "고양이";
                break;
            case 46 :
                return "개";
                break;
            case 47 :
                return "축구";
                break;
            case 48 :
                return "낚시";
                break;
            case 49 :
                return "바이크";
                break;
            case 50 :
                return "골프";
                break;
            case 51 :
                return "당구";
                break;
            case 52 :
                return "추리";
                break;
            case 53 :
                return "농구";
                break;
            case 54 :
                return "프로그래밍";
                break;
            case 55 :
                return "보드";
                break;
            case 56 :
                return "야구";
                break;
            case 57 :
                return "사운드트랙";
                break;
            default :
                return "";
        }

    } else if(lang=="English"){
        switch (tag){
            case 1 :
                return "Action";
                break;
            case 2 :
                return "Arcade";
                break;
            case 3 :
                return "Indie";
                break;
            case 4 :
                return "Casual";
                break;
            case 5 :
                return "Adventure";
                break;
            case 6 :
                return "Simulation";
                break;
            case 7 :
                return "Strategy";
                break;
            case 8 :
                return "Roleplay";
                break;
            case 9 :
                return "Sports";
                break;
            case 10 :
                return "Horror";
                break;
            case 11 :
                return "Racing";
                break;
            case 12 :
                return "Pixel";
                break;
            case 13 :
                return "Puzzle";
                break;
            case 14 :
                return "Story";
                break;
            case 15 :
                return "Fantasy";
                break;
            case 16 :
                return "Shooting";
                break;
            case 17 :
                return "Survival";
                break;
            case 18 :
                return "FPS";
                break;
            case 19 :
                return "Exporler";
                break;
            case 20 :
                return "Cute";
                break;
            case 21 :
                return "Movie";
                break;
            case 22 :
                return "Zombie";
                break;
            case 23 :
                return "Dark";
                break;
            case 24 :
                return "Mystery";
                break;
            case 25 :
                return "Structure";
                break;
            case 26 :
                return "Management";
                break;
            case 27 :
                return "Rogue-like";
                break;
            case 28 :
                return "One-touch";
                break;
            case 29 :
                return "War";
                break;
            case 30 :
                return "Music";
                break;
            case 31 :
                return "Romance-simulation";
                break;
            case 32 :
                return "Post-apocalypse";
                break;
            case 33 :
                return "Addictive";
                break;
            case 34 :
                return "Beautiful";
                break;
            case 35 :
                return "Romance";
                break;
            case 36 :
                return "Wizard";
                break;
            case 37 :
                return "Cards";
                break;
            case 38 :
                return "Worldwar";
                break;
            case 39 :
                return "Racing";
                break;
            case 40 :
                return "Thriller";
                break;
            case 41 :
                return "Flight";
                break;
            case 42 :
                return "Rhythm";
                break;
            case 43 :
                return "Philosophy";
                break;
            case 44 :
                return "Timeslip";
                break;
            case 45 :
                return "Cat";
                break;
            case 46 :
                return "Dog";
                break;
            case 47 :
                return "Soccer";
                break;
            case 48 :
                return "Fishing";
                break;
            case 49 :
                return "Bike";
                break;
            case 50 :
                return "Golf";
                break;
            case 51 :
                return "Pocketball";
                break;
            case 52 :
                return "Reasoning";
                break;
            case 53 :
                return "Basketball";
                break;
            case 54 :
                return "Programming";
                break;
            case 55 :
                return "Board";
                break;
            case 56 :
                return "Baseball";
                break;
            case 57 :
                return "Soundtrack";
                break;
            default :
                return "";
        }
    }    
}

export default tagConverting;