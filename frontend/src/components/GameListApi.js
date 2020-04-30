import React, { useState, Fragment } from "react";

let count = 1;

const GameListApi = ({ title, company, price, os, release, image, rank }) => {
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

  // GameList에서 Map함수로 던져주는 파라미터가 존재할 경우 렌더링
  if (title) {
    if (count <= 4) {
      increment();
      return (
        <React.Fragment>
          <td className="if">
            <div className="col-sm-20 GameCard">
              <a href="/">{image}</a>
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
        </React.Fragment>
      );
    } else {
      initCount();
      return (
        <React.Fragment>
          <tr className="else">
            <td>
              <div className="col-sm-20 GameCard">
                <a href="/">{image}</a>
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
                    <a className="ht-tm-element badge badge-primary">
                      #어드벤처
                    </a>
                    <a className="ht-tm-element badge badge-primary">#인디</a>
                    <a className="ht-tm-element badge badge-primary">#전략</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </React.Fragment>
      );
    }
  } else {
    return "NoData!";
  }
};

export default GameListApi;
