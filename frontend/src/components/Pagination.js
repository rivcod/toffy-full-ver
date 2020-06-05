import React from "react";

const Pagination = ({postsPerPage, totalPosts, currentPage, setCurrentPage, selectedGame}) => {
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(totalPosts / 12); i++) {
        pageNumbers.push(i);
      }
      
      // 선택 효과
      const prevClassName = document.getElementsByClassName("page-item")
      const afterClassName = document.getElementsByClassName("page-item active")
      const setClassNameToggle = (number) => {
        if (afterClassName.length >=1){
          for(let reset in prevClassName){
            if(afterClassName[Number(reset)]){
              afterClassName[Number(reset)].className="page-item";
            }
          }
        }
        prevClassName[number-1].classList.toggle ("active");
      }
      
      const branchRendering = (number,check) => {
        if(!check){
          check=true;
          return(
            <li key={number} className='page-item active'>
              <button onClick={() => {return(setCurrentPage(number),setClassNameToggle(number))}} className='page-link'>
                {number}
              </button>
            </li>
          )
        } else {
          return(
            <li key={number} className='page-item'>
              <button onClick={() => {return(setCurrentPage(number),setClassNameToggle(number))}} className='page-link'>
                {number}
              </button>
            </li>
          )
        }
      }
      const unnecessaryPage = () => {
        return ""
      }
      const necessaryPage = () => {
        if(totalPosts!==200){
          return(
            <nav className="paginationNav">
              <ul className='pagination'>
                {pageNumbers.map((number,check) => (
                  branchRendering(number,check)
                ))}
              </ul>
            </nav>
          )
        } else if(totalPosts===200) {
          return(
          <nav className="paginationNav first">
              <ul className='pagination'>
                {pageNumbers.map((number,check) => (
                  branchRendering(number,check)
                ))}
              </ul>
            </nav>
          )
        }
      }

      if(pageNumbers[1]&&selectedGame.gameName==="all") {
        return necessaryPage()
      } else {
        return unnecessaryPage()
      }
  }

export default Pagination;
