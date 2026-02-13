// src/components/organisms/RightPanel/RightPanel.jsx
import React, { useEffect, useRef } from 'react';
import ArticleForm from '../../molecules/ArticleForm/ArticleForm';
import FormButton from '../../atoms/FormButton/FormButton';
import styles from './RightPanel.module.css';

// Import close icon
import closeIcon from '../../../../public/assets/icons/closeIcon.png';

const RightPanel = ({
  isOpen,
  onClose,
  mode = 'view', // view, edit, create, delete
  articleData = {},
  onSave,
  onUpdate,
  onDelete,
  onHeadlineChange,
  onAuthorChange,
  onBodyChange,
  onDateChange,
  onPublishToggle,
  errors = {},
  isPublishChanged = false // Track if switch was changed in view mode
}) => {
  const panelRef = useRef(null);
  const overlayRef = useRef(null);

  // Get title based on mode
  const getTitle = () => {
    switch (mode) {
      case 'create':
        return 'New Article';
      case 'edit':
        return 'Edit Article';
      case 'delete':
        return 'Delete Article';
      case 'view':
      default:
        return 'View Article';
    }
  };

  // Get button configuration based on mode
  const getButtonConfig = () => {
    switch (mode) {
      case 'create':
        return {
          text: 'Save',
          variant: 'primary',
          onClick: onSave
        };
      case 'edit':
        return {
          text: 'Update',
          variant: 'primary',
          onClick: onUpdate
        };
      case 'delete':
        return {
          text: 'Delete',
          variant: 'delete',
          onClick: onDelete
        };
      case 'view':
        return {
          text: 'Update',
          variant: isPublishChanged ? 'primary' : 'disabled',
          onClick: isPublishChanged ? onUpdate : null,
          disabled: !isPublishChanged
        };
      default:
        return {
          text: 'Save',
          variant: 'primary',
          onClick: onSave
        };
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        panelRef.current && 
        !panelRef.current.contains(event.target) &&
        !overlayRef.current?.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when panel is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buttonConfig = getButtonConfig();

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className={styles.overlay} 
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        ref={panelRef}
        className={`${styles.panel} ${styles[`panel-${mode}`]}`}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{getTitle()}</h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close panel"
          >
            <img src={closeIcon} alt="Close" className={styles.closeIcon} />
          </button>
        </div>

        {/* Form */}
        <div className={styles.content}>
          <ArticleForm
            headline={articleData.headline}
            author={articleData.author}
            body={articleData.body}
            publishedDate={articleData.publishedDate}
            isPublished={articleData.published}
            mode={mode}
            onHeadlineChange={onHeadlineChange}
            onAuthorChange={onAuthorChange}
            onBodyChange={onBodyChange}
            onDateChange={onDateChange}
            onPublishToggle={onPublishToggle}
            errors={errors}
          />
        </div>

        {/* Footer with Button */}
        <div className={styles.footer}>
          <FormButton
            variant={buttonConfig.variant}
            onClick={buttonConfig.onClick}
            disabled={buttonConfig.disabled}
          >
            {buttonConfig.text}
          </FormButton>
        </div>
      </div>
    </>
  );
};

export default RightPanel;