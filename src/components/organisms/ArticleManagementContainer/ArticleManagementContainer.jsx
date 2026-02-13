// src/components/organisms/ArticleManagementContainer/ArticleManagementContainer.jsx
import React, { useState, useEffect } from 'react'; // Add useEffect
import HeaderLookUp from '../../molecules/HeaderLookUp/HeaderLookUp';
import ArticleListContainer from '../ArticleListContainer/ArticleListContainer';
import NewButton from '../../atoms/NewButton/NewButton';
import FilterDropdown from '../../atoms/FilterDropdown/FilterDropdown';
import RightPanel from '../RightPanel/RightPanel';
import styles from './ArticleManagementContainer.module.css';

const ArticleManagementContainer = ({ 
  articles, 
  onPublishToggle,
  onAddArticle,
  onUpdateArticle,
  onDeleteArticle
 }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Right panel state
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelMode, setPanelMode] = useState('view');
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // FORM STATE - Temporary data that changes as you type
  const [formData, setFormData] = useState({
    headline: '',
    author: '',
    body: '',
    publishedDate: '',
    published: false
  });

  // When selectedArticle changes (opening panel), update formData
  useEffect(() => {
    if (selectedArticle) {
      setFormData({
        headline: selectedArticle.headline || '',
        author: selectedArticle.author || '',
        body: selectedArticle.body || '',
        publishedDate: selectedArticle.publishedDate || '',
        published: selectedArticle.published || false
      });
    }
  }, [selectedArticle]);

  // Reset form when panel closes
  useEffect(() => {
    if (!isPanelOpen) {
      setFormData({
        headline: '',
        author: '',
        body: '',
        publishedDate: '',
        published: false
      });
    }
  }, [isPanelOpen]);

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

  const handleCreateArticle = () => {
    setSelectedArticle(null);
    setFormData({
      headline: '',
      author: '',
      body: '',
      publishedDate: new Date().toISOString().split('T')[0], // Today's date
      published: false
    });
    setPanelMode('create');
    setIsPanelOpen(true);
  };

  const handleDeleteArticle = (article) => {
    setSelectedArticle(article);
    setPanelMode('delete');
    setIsPanelOpen(true);
  };

  // Form change handlers
  const handleHeadlineChange = (e) => {
    setFormData({ ...formData, headline: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setFormData({ ...formData, author: e.target.value });
  };

  const handleBodyChange = (e) => {
    setFormData({ ...formData, body: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, publishedDate: e.target.value });
  };

  const handlePublishToggle = () => {
    setFormData({ ...formData, published: !formData.published });
  };

  // Action handlers
  const handleSave = () => {
    // Create new article
    const newArticle = {
      id: Date.now(), // Temporary ID generation
      ...formData
    };
    console.log('Saving new article:', newArticle);
    onAddArticle(newArticle);
    setIsPanelOpen(false);
  };

  const handleUpdate = () => {
    // Update existing article
    const updatedArticle = {
      ...selectedArticle,
      ...formData
    };
    console.log('Updating article:', updatedArticle);
    onUpdateArticle(updatedArticle);
    setIsPanelOpen(false);
  };

  const handleDelete = () => {
    // Delete article
    console.log('Deleting article:', selectedArticle?.id);
    onDeleteArticle(selectedArticle.id);
    setIsPanelOpen(false);
  };

  // Track if publish state changed in view mode
  const isPublishChanged = selectedArticle 
    ? formData.published !== selectedArticle.published 
    : false;

  // Handle closing the panel
  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedArticle(null);
  };

  const isFormValid = () => {
    return (
      formData.headline.trim() !== '' &&
      formData.author.trim() !== '' &&
      formData.body.trim() !== '' &&
      formData.publishedDate.trim() !== ''
    );
  };

  const hasChanges = () => {
    if (!selectedArticle) return false;
    
    return (
      formData.headline !== selectedArticle.headline ||
      formData.author !== selectedArticle.author ||
      formData.body !== selectedArticle.body ||
      formData.publishedDate !== selectedArticle.publishedDate ||
      formData.published !== selectedArticle.published
    );
  };

  const isButtonEnabled = () => {
    switch (panelMode) {
      case 'create':
        return isFormValid();
      case 'edit':
        return hasChanges() && isFormValid(); // In edit mode, require both changes AND valid fields
      case 'delete':
        return true; // Delete button always enabled
      case 'view':
        return isPublishChanged; // Already handled by isPublishChanged
      default:
        return false;
    }
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
          onViewArticle={handleViewArticle}
          onEditArticle={handleEditArticle}
          onDeleteArticle={handleDeleteArticle}
        />
      </div>

      {/* Right Panel */}
      <RightPanel
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        mode={panelMode}
        articleData={formData} // Pass formData instead of selectedArticle
        onSave={handleSave}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onHeadlineChange={handleHeadlineChange}
        onAuthorChange={handleAuthorChange}
        onBodyChange={handleBodyChange}
        onDateChange={handleDateChange}
        onPublishToggle={handlePublishToggle}
        isPublishChanged={isPublishChanged}
        isButtonEnabled={isButtonEnabled()}
      />
    </div>
  );
};

export default ArticleManagementContainer;