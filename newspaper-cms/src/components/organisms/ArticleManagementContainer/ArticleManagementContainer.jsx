// src/components/organisms/ArticleManagementContainer/ArticleManagementContainer.jsx
import React, { useState } from 'react';
import HeaderLookUp from '../../molecules/HeaderLookUp/HeaderLookUp';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';
import NewButton from '../../atoms/NewButton/NewButton';
import FilterDropdown from '../../atoms/FilterDropdown/FilterDropdown';
import styles from './ArticleManagementContainer.module.css';

const ArticleManagementContainer = ({ articles, onPublishToggle }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <HeaderLookUp onSearchChange={handleSearchChange} searchValue={searchQuery} />
      <div className={styles.content}>
        <h2 className={styles.title}>Articles</h2>
        <div className={styles.actionsBar}>
          <FilterDropdown onFilterChange={handleFilterChange} selectedFilter={filterStatus} />
          <NewButton text="+ ADD ARTICLE" variant="primary" />
        </div>
        <ArticleListContainer 
          articles={articles} 
          onPublishToggle={onPublishToggle}
          filterStatus={filterStatus}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default ArticleManagementContainer;