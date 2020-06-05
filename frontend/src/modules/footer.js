import { createAction, handleActions } from "redux-actions";

const SELECTLANG = "footer/SELECTLANG";

export const selectLang = createAction(SELECTLANG);

const initialState = {
    selectedLang:"한국어"
};

const footer = handleActions(
  {
    [SELECTLANG]: (state, action) => ({
      selectedLang: action.payload,
    }),
  },                                                                     
  initialState,
);

export default footer;
