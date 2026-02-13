// src/components/organisms/ArticleManagementContainer/ArticleManagementContainer.jsx
import React, { useState } from 'react';
import HeaderLookUp from '../../molecules/HeaderLookUp/HeaderLookUp';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';
import NewButton from '../../atoms/NewButton/NewButton';
import FilterDropdown from '../../atoms/FilterDropdown/FilterDropdown';
import RightPanel from '../RightPanel/RightPanel'; // Import the panel
import styles from './ArticleManagementContainer.module.css';

const ArticleManagementContainer = ({ articles, onPublishToggle }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Right panel state
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelMode, setPanelMode] = useState('view');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle clicking on an article card to view it
  const handleViewArticle = (article) => {
    setSelectedArticle(article);
    setPanelMode('view');
    setIsPanelOpen(true);
  };

  const handleEditArticle = (article) => {
  setSelectedArticle(article);
  setPanelMode('edit');
  setIsPanelOpen(true);
};
  const handleCreateArticle = (article) => {
  setSelectedArticle(article);
  setPanelMode('create');
  setIsPanelOpen(true);
};

  const handleDeleteArticle = (article) => {
  setSelectedArticle(article);
  setPanelMode('delete');
  setIsPanelOpen(true);
};

  // Handle closing the panel
  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className={styles.container}>
      <HeaderLookUp onSearchChange={handleSearchChange} searchValue={searchQuery} />
      <div className={styles.content}>
        <h2 className={styles.title}>Articles</h2>
        <div className={styles.actionsBar}>
          <FilterDropdown onFilterChange={handleFilterChange} selectedFilter={filterStatus} />
          <NewButton text="+ ADD ARTICLE" variant="primary" onClick={handleCreateArticle} />
        </div>
        <ArticleListContainer 
          articles={articles} 
          onPublishToggle={onPublishToggle}
          filterStatus={filterStatus}
          searchQuery={searchQuery}
          onViewArticle={handleViewArticle} // Pass the handler down
          onEditArticle={handleEditArticle} // Pass the handler down
          onDeleteArticle={handleDeleteArticle} // Pass the handler down
        />
      </div>

      {/* Right Panel */}
      <RightPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        mode={panelMode}
        articleData={selectedArticle || {}}
        // We'll add more handlers later
      />
    </div>
  );
};

export default ArticleManagementContainer;