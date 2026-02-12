// src/components/organisms/ArticleList/ArticleList.jsx
import React from 'react';
import ArticleCard from '../../molecules/ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;