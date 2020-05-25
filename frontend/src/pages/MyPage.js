import React, { Component, useState } from "react";
import axios from "axios";

import "../css/bootstrap4-neon-glow.css";

class MyPage extends Component {
  state = {
    value: "",
    textList: []
  };
  componentDidMount() {
    this._renderText();
  }
  //map new object 생성
  //console.log("확인 ===="+contact.writer[1])
  //console.log("확인2 ===="+_writer)

  // 텍스트 렌더링
  _renderText = () => {
    axios
      // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
      .get("/api/tfnote/")
      .then(res => this.setState({ textList: res.data }))
      .catch(err => console.log(err));

    console.log("들어왔는지 볼까? " + this.state.textList)
  };


  // writer
  handleEmail = e => {
    e.preventDefault();
    this.setState({
      writer: e.target.value
    });
  };

  //text
  handleUsername = e => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  //date
  handlePassword = e => {
    e.preventDefault();
    this.setState({
      date: e.target.value
    });
  };

  //서버로 가입 양식 제출
  handleSubmit = e => {
    e.preventDefault();

  };
  render() {
    const { textList } = this.state;
    return (
      <div className="SignUp">
        <div className="card-body">
          <div className="submitForm">
            <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
              <div>
                {}
              </div>
              <div>
                {textList.map((text, index) => {
                  return(
                  <div className="Contact">
                  <p>번호 : {index}</p>
                  <p>작성자 : {text.writer}</p>
                  <p>본문 : {text.text}</p>
                  </div>
                  );
                })}
              </div>
              <div class="submitLogo">
              </div>
              <div className="form-group">
                <input
                  type="writer"
                  className="form-control writer"
                  id="_writer"
                  aria-describedby="_writer"
                  placeholder="작성자"
                ></input>
                <textarea
                  type="text"
                  className="form-control text"
                  id="_text"
                  aria-describedby="_text"
                  placeholder="내용"
                ></textarea>
              </div>
            </div>
            <div id="_apiJoinclassName">
              <a href="#!" class="ht-tm-element btn btn-shadow text-mono btn-warning">
                <span class="fa fa-download mr-2"></span>글쓰기
          </a>
            </div>
            {/* <button onClick={this.handleSubmit} className="btn btn-primary _joinclassName">
          Join
        </button> */}
          </div>
        </div>
      </div>
    );
  }

}

export default MyPage;
