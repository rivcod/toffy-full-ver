import { combineReducers } from 'redux';
import gameList from './gameList.js';
import loading from './loading.js';
import main from './main.js';
import tag from './tag.js';
import pagination from './pagination'
import footer from './footer'
import navbar from './navbar'

// 리듀서 함수를 하나로 묶어서 store를 생성해주어야 함
const rootReducer = combineReducers({
    gameList,
    loading,
    main,
    tag,
    pagination,
    footer,
    navbar
})
// index.js로 설정해주면 디렉토리 이름만 사용해여 import 할 수 있다. ex) import rootReducer from './modules.js';
export default rootReducer;