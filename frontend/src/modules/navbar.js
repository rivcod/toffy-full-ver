import { createAction, handleActions } from "redux-actions";

const SELECTGAME = "navbar/SELECTGAME";

export const selectGame = createAction(SELECTGAME);

const initialState = {
    selectedGame:{
      gameName:"all"
    }
};

const navbar = handleActions(
  {
    [SELECTGAME]: (state, action) => ({
      selectedGame: action.payload,
    }),
  },                                                                     
  initialState,
);

export default navbar;
