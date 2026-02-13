// src/components/molecules/ArticleListHeaders/ArticleListHeaders.jsx
import React from 'react';
import styles from './ArticleListHeader.module.css';

const ArticleListHeaders = () => {
  return (
    <div className={styles.headers}>
      <div className={styles.header}>Article Headline</div>
      <div className={styles.author}>Author</div>
      <div className={styles.publishDate}>Publish Date</div>
      <div className={styles.publishStatus}>Published</div>
      <div className={styles.emptyCell}></div>
    </div>
  );
};

export default ArticleListHeaders;