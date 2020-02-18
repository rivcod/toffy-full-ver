import React, { Component } from "react";
import MyNavbar from "../components/MyNavbar";
import Profile from "../components/Profile";
import RecList1 from "../components/RecList1";

class MyPage extends Component {
  render() {
    return (
      <div className="MyPage">
        <MyNavbar></MyNavbar>
        <Profile></Profile>
        <RecList1></RecList1>
        <div className="bg-neon2 mb-0 radius-0 align-items-center">
          <div className="container py-5 mb5 tasteStat">
            <div className="row">
              <div className="col-md-9">
                <div className="col-sm-5">
                  <div id="phone"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mb-0 radius-0 align-items-center">
          <div className="container py-5">
            <div className="container py-5 mb5">
              <table className="table">
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
