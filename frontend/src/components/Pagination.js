import React from 'react';
import { setCurrentPage } from '../modules/pagination';

const Pagination = (postsPerPage, totalPosts) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / 20); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumbers 페이지수 = "+pageNumbers)
  return (
    <nav className="paginationNav">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => setCurrentPage(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
