import React from 'react'


export default function Pagenation({ totalPages, currentPage, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={i === currentPage ? 'active' : ''} >
        <a href="#/" onClick={() => onPageChange(i)}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination flex gap-4">
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a href="/#" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </a>
        </li>
        {pages}
        <li className={currentPage === totalPages ? 'disabled' : ''}>
          <a href="/#" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}