// src/pages/ArticlePage/ArticlePage.jsx
/*import React, { useState } from 'react';
import SideBar from '../../components/organisms/SideBar/SideBar';
import ArticleManagementContainer from '../../components/organisms/ArticleManagementContainer/ArticleManagementContainer';
import styles from './ArticlesPage.module.css';
import initialArticles from '../../utils/constants/articles.json';

const ArticlesPage = ({ onPageChange, currentPage }) => { // Add props
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
      <SideBar 
        selectedItem={currentPage} 
        onItemClick={onPageChange} 
      />
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

export default ArticlesPage;*/
// src/pages/ArticlePage/ArticlePage.jsx
import React, { useState } from 'react';
import SideBar from '../../components/organisms/SideBar/SideBar';
import ArticleManagementContainer from '../../components/organisms/ArticleManagementContainer/ArticleManagementContainer';
import Notification from '../../components/atoms/Notification/Notification'; // Add this import
import styles from './ArticlesPage.module.css';
import initialArticles from '../../utils/constants/articles.json';

const ArticlesPage = ({ onPageChange, currentPage }) => {
  const [articles, setArticles] = useState(initialArticles);
  
  // Notification state
  const [notification, setNotification] = useState(null);

  const handlePublishToggle = (articleId, newPublishedState) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId 
          ? { ...article, published: newPublishedState }
          : article
      )
    );
    // Optional: Add notification for publish toggle
    setNotification({
      message: 'Article status updated successfully',
      type: 'success'
    });
  };

  // Add new article
  const handleAddArticle = (newArticle) => {
    setArticles(prevArticles => [...prevArticles, newArticle]);
    setNotification({
      message: 'Article created successfully',
      type: 'success'
    });
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
    setNotification({
      message: 'Article updated successfully',
      type: 'success'
    });
  };

  // Delete article
  const handleDeleteArticle = (articleId) => {
    setArticles(prevArticles => 
      prevArticles.filter(article => article.id !== articleId)
    );
    setNotification({
      message: 'Article deleted successfully',
      type: 'success'
    });
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div className={styles.pageLayout}>
      <SideBar 
        selectedItem={currentPage} 
        onItemClick={onPageChange} 
      />
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
      
      {/* Render notification if exists */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
          duration={3000}
        />
      )}
    </div>
  );
};

export default ArticlesPage;