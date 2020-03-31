import React from 'react';
import { connect } from 'react-redux'; // 리덕스와 직접 연동하는 컨테이너 컴포트를 리덕스와 연동하기 위한 connect 임포트
import GameList from '../components/GameList.js'
import { /*increase, decrease*/ } from '../modules/gameList.js';

const GameListContainer = ({ /*number, increase, decrease*/ }) => {
    return (
        <GameList /*number={number} onIncrease={increase} onDecrease={decrease}*/ />
    );
};

export default connect(
    ({gameList}) => ({
        // <GameList>의 props
    }),
    {
        // 함수
    },
)(GameListContainer)