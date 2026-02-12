// src/App.jsx
import React from 'react';
import ArticlesPage from './pages/ArticlePage/ArticlePage.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <ArticlesPage />
    </div>
  );
}

export default App;