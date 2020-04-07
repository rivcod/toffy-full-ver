import { handleActions } from 'redux-actions';
import * as api from "../lib/api";
import createRequestThunk from '../lib/createRequestThunk.js';

const GET_GAMELIST_SUCCESS = "gameList/GET_GAMELIST_SUCCESS";
const GET_GAMELIST = "gameList/GET_GAMELIST";

export const getGameList = createRequestThunk(GET_GAMELIST, api.getGameList);

const initialState = {
    value: null,
    gameList: null
};

const gameList = handleActions(
    {
      [GET_GAMELIST_SUCCESS]: (state, action) => ({
        ...state,
        gameList : action.payload
      }),
    },
    initialState
  );


export default gameList;