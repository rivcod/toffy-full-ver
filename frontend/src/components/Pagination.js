import React, {useEffect } from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage, setCurrentPage, selectedGame}) => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / 12); i++) {
        pageNumbers.push(i);
      }

      // 선택 효과
      const setClassNameToggle = (number) => {
        const prevClassName = document.getElementsByClassName("page-item")
        const afterClassName = document.getElementsByClassName("page-item active")
        if (afterClassName.length >=1){
          for(let reset in prevClassName){
            if(afterClassName[Number(reset)]){
              afterClassName[Number(reset)].className="page-item";
            }
          }
        }
        prevClassName[number-1].classList.toggle ("active");
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
                  <button onClick={() => {return(setCurrentPage(number),setClassNameToggle(number))}} className='page-link'>
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )
      }

      if(pageNumbers[1]&&selectedGame.gameName=="all") {
        return necessaryPage()
      } else {
        return unnecessaryPage()
      }
  }

export default Pagination;
