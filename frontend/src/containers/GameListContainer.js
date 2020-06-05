import React from 'react';
import { connect } from 'react-redux'; // 리덕스와 직접 연동하는 컨테이너 컴포트를 리덕스와 연동하기 위한 connect 임포트
import GameList from '../components/GameList.js'
import { getGameList } from '../modules/gameList.js';
import { setCurrentPage, setPostsPerPage,setTotalPosts } from '../modules/pagination.js';

const { useEffect } = React;
const GameListContainer = ({ 
    getGameList,
    loadingGameList,
    gameList,
    select,
    currentPage,
    totalPosts,
    postsPerPage,
    setTotalPosts,
    setCurrentPage,
    setPostsPerPage,
    selectedLang,
    selectedGame
}) => {
    useEffect(() => {
        getGameList(1); // createRequestThunk에서 api에서 보내주는 객체의 성공 실패여부를 판단하고 dispatch로 리듀서 함수를 실행시켜 store 상태를 변화시킴
    }, [getGameList]); // getGameList등 스토어 상태가 변화되면 useEffect 실행(렌더링)
    return (
        <GameList
            gameList={gameList}
            loadingGameList={loadingGameList}
            select={select}
            currentPage={currentPage}
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            setTotalPosts={setTotalPosts}
            setCurrentPage={setCurrentPage}
            setPostsPerPage={setPostsPerPage}
            selectedLang={selectedLang}
            selectedGame={selectedGame}
        />
    );
};

export default connect(
    ({ gameList, loading, tag, pagination, footer, navbar }) => ({
        // <GameList>의 props
        gameList: gameList.gameList,
        loadingGameList: loading['gameList/GET_GAMELIST'],
        select: tag.selectedTags,
        currentPage:pagination.currentPage,
        totalPosts: pagination.totalPosts,
        postsPerPage: pagination.postsPerPage,
        selectedLang: footer.selectedLang,
        selectedGame : navbar.selectedGame
    }),
    {
        // 리듀서 함수 (module/gameList.js)
        getGameList,
        setTotalPosts,
        setCurrentPage,
        setPostsPerPage
    },
)(GameListContainer)