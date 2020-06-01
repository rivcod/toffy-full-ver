import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { setCurrentPage } from '../modules/pagination.js';

const PaginationContainer = ({ postsPerPage, totalPosts,currentPage,setCurrentPage }) => {
    return(
        <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    );
};

export default connect(
     state  => ({
        currentPage:state.pagination.currentPage,
        totalPosts: state.pagination.totalPosts,
        postsPerPage: state.pagination.postsPerPage,
    }),
    {
        setCurrentPage,
    }
)(PaginationContainer);