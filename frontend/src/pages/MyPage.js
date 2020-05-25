import React, { Component, useState } from "react";
import axios from "axios";

import "../css/bootstrap4-neon-glow.css";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class MyPage extends Component {
  state = {
    value1: "",
    value2: "",
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
  };

  // writer
  _handleWriter = e => {
    e.preventDefault();
    this.setState({
      value1: e.target.value
    });
  };

  //text
  _handleText = e => {
    e.preventDefault();
    console.log("텍스트변경중 = "  +e.target.value)
    this.setState({
      value2: e.target.value
    });
  };

  //date
  // handlePassword = e => {
  //   e.preventDefault();
  //   this.setState({
  //     date: e.target.value
  //   });
  // };
  
  //서버로 가입 양식 제출
  _handleSubmit = () => {
    const  value1  = this.state.value1;
    const  value2  = this.state.value2;
    let input1, input2
    [input1, input2] = [document.getElementById("_writer"),document.getElementById("_text")]
    input1.value = "";
    input2.value = "";
    axios
      .post("/api/tfnote/", { writer: value1, text: value2 })
      .then(res => this._renderText());
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
                  return (
                    <div className="Contact">
                      <p>번호 : {index}</p>
                      <p>작성자 : {text.writer}</p>
                      <p>본문 : {text.text}</p>
                      <p>작성일자 : {text.date}</p>
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
                  value={this.state.value}
                  onChange={this._handleWriter}
                  id="_writer"
                  aria-describedby="_writer"
                  placeholder="작성자"
                  maxlength="20"
                ></input>
                <textarea
                  type="text"
                  className="form-control text"
                  value={this.state.value}
                  onChange={this._handleText}
                  id="_text"
                  aria-describedby="_text"
                  placeholder="내용"
                  maxlength="200"
                ></textarea>
              </div>
            </div>
            <div id="_apiJoinclassName">
              <button onClick={this._handleSubmit} class="ht-tm-element btn btn-shadow text-mono btn-warning">
                글쓰기
              </button>
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
