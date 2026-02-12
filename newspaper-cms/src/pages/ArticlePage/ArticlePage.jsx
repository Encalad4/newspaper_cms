// src/pages/ArticlesPage/ArticlesPage.jsx
import React from 'react';
import MainLayout from '../../components/templates/MainLayout/MainLayout';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import ArticleListContainer from '../../components/organisms/ArticleListContainer/ArticleListContainer';
import styles from './ArticlesPage.module.css';
import articles from '../../utils/constants/articles.json';

const ArticlesPage = () => {
  const handlePublishToggle = (articleId, newPublishedState) => {
    console.log(`Article ${articleId} toggled to: ${newPublishedState}`);
    // You'll implement the actual state management here later
  };

  return (
    <MainLayout>
      <div className={styles.pageLayout}>
        <Sidebar />
        <div className={styles.contentArea}>
          <div className={styles.container}>
            <h1>Articles</h1>
            <ArticleListContainer 
              articles={articles} 
              onPublishToggle={handlePublishToggle}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;