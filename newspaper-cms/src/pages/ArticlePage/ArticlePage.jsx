// src/pages/ArticlesPage/ArticlesPage.jsx
import React from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import ArticleManagementContainer from '../../components/organisms/ArticleManagementContainer/ArticleManagementContainer';
import styles from './ArticlesPage.module.css';
import articles from '../../utils/constants/articles.json';

const ArticlesPage = () => {
  const handlePublishToggle = (articleId, newPublishedState) => {
    console.log(`Article ${articleId} toggled to: ${newPublishedState}`);
    // You'll implement the actual state management here later
  };

  return (
    <div className={styles.pageLayout}>
      <Sidebar />
      <div className={styles.contentArea}>
        <div className={styles.container}>
          <ArticleManagementContainer 
            articles={articles} 
            onPublishToggle={handlePublishToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;