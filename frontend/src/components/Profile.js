import React, { Component } from "react";

class YourGameList extends Component {
  render() {
    return (
      <div className="YourGameList">
        <table>
          <tbody>
            <tr>
              <YourGame></YourGame>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class YourGame extends Component {
  render() {
    return (
      <td>
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
            <h5>{this.props.date}</h5>
            <p>{this.props.writer}</p>
          </div>
          <div id="_price">
            <a
              href="/"
              className="ht-tm-element btn btn-outline-primary btn-sm"
              id="_priceBtn"
            >
              {this.props.text}
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
      </td>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div className="bg-neon mb-0 radius-0 align-items-center">
        <div className="container py-5 mb5 tasteStat">
          <div className="row">
            <div className="col-md-3">
              <form className="mb-3">
                <div className="input-group">
                  <div className="input-group-append">
                    <div className="list-group">
                      <div className="ht-tm-codeblock ht-tm-needs-darkness">
                        <img
                          src="static/tfgame/images/profile.png"
                          alt=""
                          width="150px"
                          height="150px"
                        />
                        <div>
                          <h6>dfsdfads</h6>
                        </div>
                        <a
                          href="/"
                          className="ht-tm-element badge badge-primary"
                        >
                          #인디
                        </a>
                        <br />
                        <a
                          href="/"
                          className="ht-tm-element badge badge-primary"
                        >
                          #미연시
                        </a>
                        <br />
                        <a
                          href="/"
                          className="ht-tm-element badge badge-primary"
                        >
                          #전쟁
                        </a>
                      </div>
                      <a
                        href="/"
                        className="btn btn-sm btn-primary my-1 my-sm-0"
                      >
                        <span className="fas fa-edit mr-1"></span>
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <YourGameList></YourGameList>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
