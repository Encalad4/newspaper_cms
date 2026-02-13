// src/App.jsx
import React, { useState } from 'react';
import ArticlesPage from './pages/ArticlePage/ArticlePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import styles from './App.module.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <ArticlesPage onPageChange={handlePageChange} currentPage={currentPage} />;
    } else {
      return <NotFoundPage selectedMenuItem={currentPage} onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className={styles.app}>
      {renderPage()}
    </div>
  );
}

export default App;