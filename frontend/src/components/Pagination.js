import React from 'react';

const Pagination = () => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => number} href='!#' className='page-link'> {/*함수대기*/}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
