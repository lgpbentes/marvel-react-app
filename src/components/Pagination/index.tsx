import React from 'react';

import './styles.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleClick: Function;
}

interface PageItemProps {
  page: number;
  isActive?: boolean;
  onClickPage: Function;

}

const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
}


const PageItem: React.FC<PageItemProps> = ({ page, isActive, onClickPage }) => {
  return (
    <span onClick={() => { onClickPage(page) }} className={isActive ? 'active' : ''}>{page}</span>
  )
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handleClick }) => {
  let startPage = 1;
  if (currentPage > 2) {
    startPage = currentPage - 2;
  }
  let startRange = range(startPage, currentPage);

  let endPage = currentPage + (5 - startRange.length);
  if (endPage > totalPages) {
    endPage = totalPages;
  }
  let endRange = range(currentPage + 1, endPage);

  return (
    <div className="pagination">
      {currentPage > 1 ? <span onClick={() => handleClick(currentPage - 1)}>&laquo;</span> : <></>}
      {startRange.map((page: number) => <PageItem onClickPage={handleClick} page={page} />)}
      <PageItem onClickPage={handleClick} isActive={true} page={currentPage} />
      {endRange.map((page: number) => <PageItem onClickPage={handleClick} page={page} />)}
      {currentPage < totalPages ? <span onClick={() => handleClick(currentPage + 1)}>&raquo;</span> : <></>}
    </div>
  );
}

export default Pagination;
