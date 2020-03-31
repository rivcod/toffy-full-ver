import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의한다.
// const DECREASE = '/gameList/DECREASE'; /* 모듈 이름/액션 이름 */

// export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

const gameList = handleActions(
    {
        //[INCREASE]: (state, action) => ({ number: state.number + 1 }), // 액션 타입에 모듈 이름/액션 이름으로 되어있기 때문에 []로 감싸줘야함
        //[DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
);

export default gameList;