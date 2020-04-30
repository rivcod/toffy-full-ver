import React, { Component } from "react";
import TextItem from "../TextItem";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Test extends Component {
  state = {
    value: "",
    textList: []
  };

  // 1.렌더링 하기전 _renderText() 함수를 호출
  componentDidMount() {
    this._renderText();
  }
  render() {
    const { textList } = this.state;
    return (
      <div className="App">
        <h1>OneLine App</h1>
        <div>
          <label>
            Text:
            <input
              type="text"
              value={this.state.value}
              onChange={this._handleChange}
            />
          </label>
          <button onClick={this._handleSubmit}>submit</button>
        </div>
        <h2>Long Text</h2>
        {/* 3. state에 담긴 textList에서 Data(파라미터가 text로 표현되어있음)를 있는대로 
            다꺼내서 화면에 return (index는 자동으로 지정됨) */}
        {textList.map((text, index) => {
          return (
            <TextItem
              text={text.text}
              key={index}
              id={text.id}
              handleClick={this._deleteText}
            />
          );
        })}
      </div>
    );
  }
  _handleChange = event => {
    this.setState({ value: event.target.value });
  };
  _handleSubmit = () => {
    const { value } = this.state;
    axios
      .post("/api/wisesaying/", { text: value })
      .then(res => this._renderText());
  };
  // 2. 호출된 _renderText 함수는 장고 Model에 있는 Data를 Json으로 보여주는 페이지에서 Data를 가져와 SetState해줌
  _renderText = () => {
    axios
    // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
      .get("/api/wisesaying/")
      .then(res => this.setState({ textList: res.data })) // res에 데이터들이 담겨짐, state의 textList에 res의 데이터를 저장
      .catch(err => console.log(err));
  };
  _deleteText = id => {
    axios.delete(`/api/wisesaying/${id}`).then(res => this._renderText());
  };
}

export default Test;
