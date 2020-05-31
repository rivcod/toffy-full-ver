import React, {useEffect } from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage,setCurrentPage}) => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / 20); i++) {
        pageNumbers.push(i);
      }
      return (
        <nav className="paginationNav">
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <button onClick={() => setCurrentPage(number)} className='page-link'>
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      );
  }

export default Pagination;
