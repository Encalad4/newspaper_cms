// src/pages/ArticlesPage/ArticlesPage.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import ArticleManagementContainer from '../../components/organisms/ArticleManagementContainer/ArticleManagementContainer';
import styles from './ArticlesPage.module.css';
import initialArticles from '../../utils/constants/articles.json';

const ArticlesPage = () => {
  const [articles, setArticles] = useState(initialArticles);

  const handlePublishToggle = (articleId, newPublishedState) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId 
          ? { ...article, published: newPublishedState }
          : article
      )
    );
  };

  // Add new article
  const handleAddArticle = (newArticle) => {
    setArticles(prevArticles => [...prevArticles, newArticle]);
  };

  // Update existing article
  const handleUpdateArticle = (updatedArticle) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === updatedArticle.id 
          ? updatedArticle
          : article
      )
    );
  };

  // Delete article
  const handleDeleteArticle = (articleId) => {
    setArticles(prevArticles => 
      prevArticles.filter(article => article.id !== articleId)
    );
  };

  return (
    <div className={styles.pageLayout}>
      <Sidebar />
      <div className={styles.contentArea}>
        <div className={styles.container}>
          <ArticleManagementContainer 
            articles={articles} 
            onPublishToggle={handlePublishToggle}
            onAddArticle={handleAddArticle}
            onUpdateArticle={handleUpdateArticle}
            onDeleteArticle={handleDeleteArticle}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;