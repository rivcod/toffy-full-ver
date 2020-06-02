import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

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
    this.setState({
      value2: e.target.value
    });
  };

  //서버로 Data 전송
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
    let _memo
    let realMemo
    const _undefined = (arg) => {
      return arg.replace("undefined","")
    }
    return (
      <Fragment>
      <Navbar></Navbar>
      <div className="ContactBack">
      <div className="ContactBody">
        <div className="card-body">
          <div className="submitForm">
            <div className="ht-tm-codeblock ht-tm-btn-replaceable ht-tm-element ht-tm-element-inner">
              <div>
                {}
              </div>
              <div>
              <div className="Contact">
                {textList.map((text, index) => {
                  const realDate=text.date.split('T')
                  const realTime=realDate[1].split("+")
                  const realTimer=realTime[0].split(".")
                  _memo += ("[ "+text.writer+" ] : "+text.text+" "+realDate[0]+" "+realTimer[0]+"\n")
                  realMemo = _undefined(_memo)
                })}
                <div className="blackBox">
                <textarea value={realMemo}
                  type="text"
                  className="form-control text chating"
                 >
                </textarea>
                </div>
                </div>
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
                  placeholder="Stranger"
                  maxlength="20"
                ></input>
                <textarea
                  type="text"
                  className="form-control text"
                  value={this.state.value}
                  onChange={this._handleText}
                  id="_text"
                  aria-describedby="_text"
                  placeholder="Want to talk?"
                  maxlength="200"
                ></textarea>
                <div id="_apiJoinclassName">
              <button onClick={this._handleSubmit} class="ht-tm-element btn btn-outline-light">
                SEND
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
      </Fragment>
    );
  }

}

export default MyPage;