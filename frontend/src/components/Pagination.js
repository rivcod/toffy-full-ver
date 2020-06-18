import React, { useEffect } from "react";

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
        const toggler = document.getElementById(number) 
        toggler.classList.toggle ("active");
      }
        
      
      const branchRendering = (number) => {
        if((currentPage===1||currentPage===2)&&number<6){
          return(
            <li key={number} className={afterClassName.length===0&&number===1 ? "page-item active" :'page-item'} id={number}>
              <button onClick={() => {return(setCurrentPage(number),setClassNameToggle(number))}} className='page-link'>
                {number}
              </button>
            </li>
          )
        }
        else if(number<=currentPage+2&&number>=currentPage-2){
            return(
              <li key={number} className={afterClassName.length===0&&number===1 ? "page-item active" :'page-item'} id={number}>
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

      const dotdotdotPrevious = () => {
        if((currentPage)>3){
          return (
            <button className="page-link">...</button>
          );
        } 
      } 
      const dotdotdotNext = () => {
        if((currentPage)<15){
          return (
            <button className="page-link" >...</button>
          );
        } 
      } 

      const necessaryPage = () => {
        if(totalPosts!==200){
          return(
            <nav className="paginationNav">
              <ul className='pagination'>
                {pageNumbers.map((number) => (
                  branchRendering(number)
                ))}
              </ul>
            </nav>
          )
        } else if(totalPosts===200) {
          return(
          <nav className="paginationNav first">
              <ul className='pagination'>
              
              <button className="page-link" onClick={() => { return( (currentPage-1)!==0 ? (setCurrentPage(currentPage-1),setClassNameToggle(currentPage-1)) : "" ) }}>Previous</button>
                {dotdotdotPrevious()}
                {pageNumbers.map((number) => (
                  branchRendering(number)
                ))}
                {dotdotdotNext()}
              <button className="page-link" onClick={() => {return( currentPage<pageNumbers.length ? (setCurrentPage(currentPage+1),setClassNameToggle(currentPage+1)) : "" ) }}>Next</button>
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
