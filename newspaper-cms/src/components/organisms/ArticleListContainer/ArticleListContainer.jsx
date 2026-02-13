// src/components/organisms/ArticleListContainer/ArticleListContainer.jsx
import React, { useState, useEffect } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import ArticleListHeaders from '../../molecules/ArticleListHeader/ArticleListHeader';
import PaginationControls from '../../molecules/PaginationControls/PaginationControls';
import styles from './ArticleListContainer.module.css';

const ArticleListContainer = ({ articles, onPublishToggle, onDeleteArticle, onEditArticle, onViewArticle, filterStatus = 'All', searchQuery = '' }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Filter articles based on status and search query
  const filteredArticles = articles.filter(article => {
    // Filter by publish status
    if (filterStatus === 'Published' && !article.published) return false;
    if (filterStatus === 'Unpublished' && article.published) return false;
    
    // Filter by search query (headline)
    if (searchQuery && !article.headline.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });
  
  const totalEntries = filteredArticles.length;
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(0);
  }, [filterStatus, searchQuery, rowsPerPage]);
  
  // Calculate paginated articles
  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  
  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(0);
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <ArticleListHeaders />
      <div className={styles.list}>    
        <ArticleList 
          articles={paginatedArticles} 
          onPublishToggle={onPublishToggle}
          onViewArticle={onViewArticle}
          onEditArticle={onEditArticle}
          onDeleteArticle={onDeleteArticle}
        />
      </div>
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