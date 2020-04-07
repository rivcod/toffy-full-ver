import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

//액션함수(startLoading) 생성
export const startLoading = createAction (
    START_LOADING,
    reqeustType => reqeustType
);

// 액션함수(finishLoading) 생성
export const finishLoading = createAction (
    FINISH_LOADING,
    reqeustType => reqeustType
);

// 초기화
const initialState = {};

// loading.js의 리듀서 함수
const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)

export default loading;