import { createAction, handleActions } from "redux-actions";

const SELECTTAGS = "main/SELECTTAGS";
const UNSELECTTAGS = "main/UNSELECTTAGS";

export const selectTags = createAction(SELECTTAGS);
export const unselectTags = createAction(UNSELECTTAGS);

const initialState = {
    selectedTags:[],
    selectedColors:[],
};

const removeTag = (arr, id) => {
  // return a new list with all values, except the matched id
  //state.selectedTags.filter(state => state.selectedTags.id !== action.payload)
  return arr.filter(arr => arr !== id);
}

const tag = handleActions(
  {
    [SELECTTAGS]: (state, action) => ({
      selectedTags: state.selectedTags.concat(action.payload),
      selectedColors: state.selectedColors.concat(action.payload)
    }),
    [UNSELECTTAGS]: (state, action) => ({
      selectedTags: removeTag(state.selectedTags, action.payload),
      selectedColors: removeTag(state.selectedTags, action.payload)
    }),
  },                                                                     
  initialState,
);

export default tag;
