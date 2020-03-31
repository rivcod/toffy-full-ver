import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import "./css/index.css";
// import App from './App';
import Root from "./Root";
// import * as serviceWorker from "./serviceWorker";
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

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
