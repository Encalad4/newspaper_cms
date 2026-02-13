// src/components/organisms/ArticleList/ArticleList.jsx
import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles, onPublishToggle, onViewArticle, onEditArticle, onDeleteArticle  }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {articles.map(article => (
          <ArticleCard 
            key={article.id} 
            article={article}
            onPublishToggle={onPublishToggle}
            onView={()=> onViewArticle(article)} // Pass the full article to view
            onEdit={() => onEditArticle(article)} // Pass the full article to edit
            onDelete={() => onDeleteArticle(article)} // Pass the full article to delete
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;