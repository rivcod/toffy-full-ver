import React, { Component } from "react";

class RecList1 extends Component {
  render() {
    return (
      <div className="RecList_1">
        <div className="bg-neon2 mb-0 radius-0 align-items-center">
          <div className="container py-5 mb5 tasteStat">
            <div className="row">
              <table>
                <tbody>
                  <tr>
                    <RecGame></RecGame>
                    <RecGame></RecGame>
                    <RecGame></RecGame>
                    <RecGame></RecGame>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class RecGame extends Component {
  render() {
    return (
      <td>
        <div className="bg-neon2 mb-0 radius-0 align-items-center">
          <div className="col-sm-20 GameCard">
            <a href="/">
              {
                <img
                  src="static/tfgame/images/logo3.png"
                  alt="Featured Job"
                  className="img-responsive"
                />
              }
            </a>
            <div className="title" id="titlePadding">
              <h5>{this.props.gTitle}</h5>
              <p>{this.props.gCompany}</p>
            </div>
            <div id="_price">
              <a
                href="/"
                className="ht-tm-element btn btn-outline-primary btn-sm"
                id="_priceBtn"
              >
                {this.props.gPrice}
              </a>
            </div>
            <div className="data">
              <a href="/" className="ht-tm-element badge badge-primary">
                #어드벤처
              </a>
              <a href="/" className="ht-tm-element badge badge-primary">
                #인디
              </a>
              <a href="/" className="ht-tm-element badge badge-primary">
                #전략
              </a>
            </div>
          </div>
        </div>
      </td>
    );
  }
}

export default RecList1;
