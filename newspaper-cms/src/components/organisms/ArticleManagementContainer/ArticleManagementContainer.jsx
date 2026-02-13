// src/components/organisms/ArticleManagementContainer/ArticleManagementContainer.jsx
import React from 'react';
import HeaderLookUp from '../../molecules/HeaderLookUp/HeaderLookUp';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';
import NewButton from '../../atoms/NewButton/NewButton';
import FilterDropdown from '../../atoms/FilterDropdown/FilterDropdown';
import styles from './ArticleManagementContainer.module.css';

const ArticleManagementContainer = ({ articles, onPublishToggle }) => {
  return (
    <div className={styles.container}>
      <HeaderLookUp />
      <div className={styles.content}>
        <h2 className={styles.title}>Articles</h2>
        <div className={styles.actionsBar}>
          <FilterDropdown />
          <NewButton text="+ ADD ARTICLE" variant="primary" />
        </div>
        <ArticleListContainer 
          articles={articles} 
          onPublishToggle={onPublishToggle}
        />
      </div>
    </div>
  );
};

export default ArticleManagementContainer;