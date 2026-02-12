// src/pages/ArticlesPage/ArticlesPage.jsx
import React from 'react';
import MainLayout from '../../components/templates/MainLayout/MainLayout';
import ArticleList from '../../components/organisms/ArticleList/ArticleList';
import styles from './ArticlesPage.module.css';
import articles from '../../utils/constants/articles.json';

const ArticlesPage = () => {


  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Articles</h1>
        <ArticleList articles={articles} />
      </div>
    </MainLayout>
  );
};

export default ArticlesPage;