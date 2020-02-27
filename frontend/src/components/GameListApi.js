import React, { useState, Fragment } from 'react';
let foo = 1;

const GameListApi = ({ title, company, price, os, release, image, rank }) => {
  const [count, setCount] = useState(1);
  
  console.log("현재 foo =  "+foo)

  // count가 1씩 증가
  const increment = () => {
    console.log("증가"+foo)
    {foo +=1}
  }

  // count를 1로 재설정
  const initCount = () => {
    console.log("재설정"+foo)
    {foo =1}
  }

  // GameList에서 Map함수로 던져주는 파라미터가 존재할 경우 렌더링
  if(title){
    if( foo  <= 4) {
      increment()
      return (
      <React.Fragment>
        <td className="if">
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
        </React.Fragment>
      );
    }else {
      initCount()
      return (
        <React.Fragment>
          <tr className="else">
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
      </React.Fragment>
      );
    }
  }
  else{
    return("NoData!");
  }
}

export default GameListApi;