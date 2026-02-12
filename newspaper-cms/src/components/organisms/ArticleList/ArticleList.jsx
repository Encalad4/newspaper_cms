// src/components/organisms/ArticleList/ArticleList.jsx
import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles, onPublishToggle }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {articles.map(article => (
          <ArticleCard 
            key={article.id} 
            article={article}
            onPublishToggle={onPublishToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;