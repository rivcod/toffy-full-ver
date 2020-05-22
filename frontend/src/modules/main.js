import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

const ADDTAGS = "main/ADDTAGS";

export const addTags = createAction(ADDTAGS);

const initialState = {
    tags:[],
};

const main = handleActions(
  {
    [ADDTAGS]: (state, action) => ({tags: state.tags.concat(action.payload)}),
  },
  initialState,
);

export default main;
