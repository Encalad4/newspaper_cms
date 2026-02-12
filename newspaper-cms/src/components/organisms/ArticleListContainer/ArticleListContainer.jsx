// src/components/organisms/ArticleListContainer/ArticleListContainer.jsx
import React, { useState } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import ArticleListHeaders from '../../molecules/ArticleListHeader/ArticleListHeader';
import PaginationControls from '../../molecules/PaginationControls/PaginationControls';
import styles from './ArticleListContainer.module.css';

const ArticleListContainer = ({ articles, onPublishToggle }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  
  const totalEntries = articles.length;
  
  // Calculate paginated articles
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(0); // Reset to first page when changing rows per page
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <ArticleListHeaders />
      <ArticleList 
        articles={paginatedArticles} 
        onPublishToggle={onPublishToggle}
      />
      <PaginationControls 
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        totalEntries={totalEntries}
        onRowsPerPageChange={handleRowsPerPageChange}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArticleListContainer;