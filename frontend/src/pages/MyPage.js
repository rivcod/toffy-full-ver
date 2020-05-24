import React, { Component,useState } from "react";

import "../css/bootstrap4-neon-glow.css";

const MyPage = ()=>  {
  const [contact, setContact] = useState({
    writer: "",
      text: "",
      date: ""
  });
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
            <div class="submitLogo">
        {/* <a href="\">
          <img src="../images/logo-white1.png" alt="dd" /> 
        </a> */}
      </div>
              <div className="form-group">
              <input
                type="writer"
                className="form-control"
                id="_writer"
                aria-describedby="_writer"
                placeholder="Enter writer"
              ></input>
              <textarea
                type="text"
                className="form-control"
                id="_text"
                aria-describedby="_text"
                placeholder="Enter text"
              ></textarea>
              </div>
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
