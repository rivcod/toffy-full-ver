import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import "./css/index.css";
import Root from "./Root";
import rootReducer from './modules';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'; // 액션객체가 아닌 함수로 넘겨주어서 여러가지 확장성을 부여함

const logger = createLogger(); // 로그 확인 미들웨어
const store = createStore(rootReducer ,applyMiddleware(logger,ReduxThunk)); // store 생성하고 다운로드 or 생성한 미들웨어 적용
console.log(store.getState());

ReactDOM.render(
    //Provider를 사용해서 store의 상태가 변경될 때 마다 렌더링을 할 수 있도록 알려줌
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

export { default as Home } from "./pages/Home.js";
export { default as Mypage } from "./pages/MyPage.js";
export { default as Test } from "./pages/Test.js";
