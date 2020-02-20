import React from "react";
/*
<div>
      <p>{title}</p>
      <p>{company}</p>
      <p>{price}</p>
      <p>{os}</p>
      <p>{release}</p>
      <p>{image}</p>
      <p>{rank}</p>
  </div>
*/
const GameListApi = ({ title, company, price, os, release, image, rank}) => {
  return (
    <td>
        <div className="col-sm-20 GameCard">
          <a href="/">
            {image}
          </a>
          <div className="featured-job">
            <div className="title" id="titlePadding">
              <h5>{title}</h5>
              <p>{company}</p>
            </div>
            <div id="_price">
              <a
                href="/"
                className="ht-tm-element btn btn-outline-primary btn-sm"
                id="_priceBtn"
              >
                {price}
              </a>
            </div>
            <div className="data">
              <a className="ht-tm-element badge badge-primary">#어드벤처</a>
              <a className="ht-tm-element badge badge-primary">#인디</a>
              <a className="ht-tm-element badge badge-primary">#전략</a>
            </div>
          </div>
        </div>
      </td>
  );
};

export default GameListApi;