import React, { useState, Fragment } from 'react';

const [count, setCount] = useState(1);

function increment() {
  setCount(count + 1);
}
function initCount() {
  setCount(0);
}

const GameListApi = ({ title, company, price, os, release, image, rank}) => {
  return (
     { count } <= 4 ? 
      ({increment()}
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
        
      ) 
      : 
      (
        <tr>
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
        </tr>
      )
    
  );
};

export default GameListApi;