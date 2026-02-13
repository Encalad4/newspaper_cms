// src/components/molecules/PaginationControls/PaginationControls.jsx
import React from 'react';
import styles from './PaginationControls.module.css';

// Import arrow icons
import leftArrow from '../../../../public/assets/icons/leftArrow.png';
import rightArrow from '../../../../public/assets/icons/rightArrow.png';

const PaginationControls = ({ 
  rowsPerPage = 5, 
  currentPage = 0, 
  totalEntries = 0,
  onRowsPerPageChange,
  onPageChange 
}) => {
  const startEntry = currentPage * rowsPerPage + 1;
  const endEntry = Math.min((currentPage + 1) * rowsPerPage, totalEntries);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.rowsPerPage}>
        <span className={styles.label}>Rows per page:</span>
        <select 
          className={styles.select}
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      
      <div className={styles.entryInfo}>
        <span>{startEntry}-{endEntry} of {totalEntries}</span>
      </div>
      
      <div className={styles.arrowControls}>
        <button 
          className={styles.arrowButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          <img src={leftArrow} alt="Previous" className={styles.arrowIcon} />
        </button>
        <button 
          className={styles.arrowButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={endEntry === totalEntries}
          aria-label="Next page"
        >
          <img src={rightArrow} alt="Next" className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;