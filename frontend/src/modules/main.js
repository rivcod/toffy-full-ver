import { createAction, handleActions } from "redux-actions";

const ADDTAGS = "main/ADDTAGS";

export const addTags = createAction(ADDTAGS);

const initialState = [];

export const addTagsOne = () => dispatch => {
    dispatch(addTags());
};


const main = handleActions(
  {
    [ADDTAGS]: (state, actions) => state.concat(actions)
  },
  initialState
);

export default main;
