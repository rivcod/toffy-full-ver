import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "../css/bootstrap4-neon-glow.css";

const MyPage = () => {
  const [contact, setContact] = useState({
    writer: [],
    text: [],
    date: []
  });

  useEffect(() => {
    _renderText();
  },[contact.text]);

  //map new object 생성
  const _writer = contact.writer.map()
  console.log("확인 ===="+contact.writer[1])
  console.log("확인2 ===="+_writer)

  // 텍스트 렌더링
  const _renderText = () => {
    axios
    // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
      .get("/api/tfnote/")
      .then(res => setContact({ writer: res.data})) 
      .catch(err => console.log(err));
  };


  // writer
  const handleEmail = e => {
    e.preventDefault();
    setContact({
      writer: e.target.value
    });
  };

  //text
  const handleUsername = e => {
    e.preventDefault();
    setContact({
      text: e.target.value
    });
  };

  //date
  const handlePassword = e => {
    e.preventDefault();
    setContact({
      date: e.target.value
    });
  };

  //서버로 가입 양식 제출
  const handleSubmit = e => {
    e.preventDefault();

  };

  return (
    <div className="SignUp">
      <div className="card-body">
        <div className="submitForm">
          <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
            <div>
              {}
            </div>
            <div>
              블라블라
              블라블라
              블라블라
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

export default MyPage;
