import React from "react";

const GameListApi = ({ title, company, price, os, release, image, rank}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{company}</p>
      <p>{price}</p>
      <p>{os}</p>
      <p>{release}</p>
      <p>{image}</p>
      <p>{rank}</p>
    </div>
  );
};

export default GameListApi;