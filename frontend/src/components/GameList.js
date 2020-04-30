import React, { useState } from 'react';

let count = 1;

const GameList = ({ gameList, loadingGameList }) => {
  const increment = () => {
    console.log("증가" + count);
    {
      count += 1;
    }
  };
  const [foo, setFoo] = useState(0);
  // count를 1로 재설정
  const initCount = () => {
    console.log("재설정" + count);
    {
      count = 1;
    }
  };

  if (count <= 4) {
    increment();
    console.log(count)
    return (
      <div className="GameList">
        <table>
          <tbody>
          {loadingGameList && '로딩중...'}
        {!loadingGameList && gameList && ( // 자바스크립트 연산자에 표현식이 &&로 연달아 있으면 계산된 값이 true가면 보여짐 (ES6)
          <tr>
            {gameList.map(game => ( // gameListContainer에서 넣어준 props 객체를 map 함수를 사용하여 game 변수에 순차적으로 담고 game 변수에 대입된 프로퍼티들을 꺼내어 표현
              <td key={game.id}> 
                {game.title}
                {game.company}
                {game.price}
                <a href={game.href}>앱스토어 가기</a>
                {game.release}
                <img src={game.image}></img>
                {game.rank}
              </td>
            ))}
            }
          </tr>
        )}
          </tbody>
        </table>
      </div>
    );
  } else {
    initCount();
    return(
    <tr className="GameList">
      <td>
        "Dd"
      </td>
    </tr>
    );
  }
}

export default GameList;