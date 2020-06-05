import { createAction, handleActions } from "redux-actions";

const SET_CURRENTPAGE="gameList/SET_CURRENTPAGE"
const SET_POSTSPERPAGE="gameList/SET_POSTSPERPAGE"
const SET_TOTALPOSTS="gameList/SET_TOTALPOSTS"

export const setCurrentPage = createAction(SET_CURRENTPAGE);
export const setPostsPerPage = createAction(SET_POSTSPERPAGE);
export const setTotalPosts = createAction(SET_TOTALPOSTS);

const initialState = {
    currentPage:1,
    totalPosts: 20,
    postsPerPage: 0,
};

const pagination = handleActions(
  {
    [SET_CURRENTPAGE]: (state, action) => ({
      ...state,
      currentPage:action.payload
    }),
    [SET_POSTSPERPAGE]: (state, action) => ({
      ...state,
      postsPerPage:action.payload
    }),
    [SET_TOTALPOSTS]: (state, action) => ({
      ...state,
      totalPosts:action.payload
    }),
  },                                                                     
  initialState,
);

export default pagination;
