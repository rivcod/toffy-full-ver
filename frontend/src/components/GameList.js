import React from "react";

const GameList = ({ gameList, loadingGameList }) => {
    return (
      <div className="GameList">
        <div class="ht-tm-codeblock _stempt">
        <ul class="nav nav-pills ht-tm-element">
          <li class="nav-item">
            <a class="nav-link active" href="#!">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">IOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Android</a>
          </li>
        </ul>
      </div>
        <table>
          <tbody>
          {loadingGameList && '로딩중...'}
        {!loadingGameList && gameList && (
          <ul>
            {gameList.map(game => (
              <li key={game.id}>
                {game.title}
                {game.company}
                {game.price}
                {game.os}
                {game.release}
                {game.image}
                {game.rank}
              </li>
            ))}
          </ul>
        )}
          </tbody>
        </table>
      </div>
    );
  }

export default GameList;