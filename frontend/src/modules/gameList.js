import { handleActions } from 'redux-actions';
import * as api from "../lib/api";
import createRequestThunk from '../lib/createRequestThunk.js';

const GET_GAMELIST_SUCCESS = "gameList/GET_GAMELIST_SUCCESS"; // module이름/액션함수이름
const GET_GAMELIST = "gameList/GET_GAMELIST";

export const getGameList = createRequestThunk(GET_GAMELIST, api.getGameList);

const initialState = {
    value: null,
    gameList: null,
};

const gameList = handleActions(
    {
      [GET_GAMELIST_SUCCESS]: (state, action) => ({ // GET_GAMELIST_SUCCESS라는 이름의 액션함수가 dispatch되면
        ...state.gameList, // 기존에 있던 스토어를 그대로 가져오고
        gameList : action.payload // gameList는 액션함수의 response 값을 대입한다. (payload = 액션함수의 reponse 변수명으로 redux에서 지정해줌)
      }),
    },
    initialState
  );


export default gameList;