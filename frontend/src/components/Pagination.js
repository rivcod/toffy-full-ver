import React, {useEffect } from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage,setCurrentPage}) => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / 12); i++) {
        pageNumbers.push(i);
      }
      const unnecessaryPage = () => {
        return ""
      }
      const necessaryPage = () => {
        return(
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
        )
      }

      if(pageNumbers[1]) {
        return necessaryPage()
      } else {
        return unnecessaryPage()
      }
  }

export default Pagination;
