// src/components/molecules/ArticleForm/ArticleForm.jsx
import React from 'react';
import Switch from '../../atoms/Switch/Switch';
import styles from './ArticleForm.module.css';

const ArticleForm = ({
  headline,
  author,
  body,
  publishedDate,
  isPublished,
  mode = 'view', // view, edit, create, delete
  onHeadlineChange,
  onAuthorChange,
  onBodyChange,
  onDateChange,
  onPublishToggle,
  errors = {}
}) => {
  const isEditable = mode === 'edit' || mode === 'create';
  const isDeleteMode = mode === 'delete';

  return (
    <div className={styles.form}>
      {/* Headline Field */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Headline *</label>
        <input
          type="text"
          className={`${styles.input} ${errors.headline ? styles.error : ''}`}
          value={headline || ''}
          onChange={onHeadlineChange}
          disabled={!isEditable}
          placeholder={isEditable ? "Enter headline" : ""}
        />
        {errors.headline && <span className={styles.errorMessage}>{errors.headline}</span>}
      </div>

      {/* Author Field */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Author *</label>
        <input
          type="text"
          className={`${styles.input} ${errors.author ? styles.error : ''}`}
          value={author || ''}
          onChange={onAuthorChange}
          disabled={!isEditable}
          placeholder={isEditable ? "Enter author name" : ""}
        />
        {errors.author && <span className={styles.errorMessage}>{errors.author}</span>}
      </div>

      {/* Body Field - Textarea */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Body *</label>
        <textarea
          className={`${styles.textarea} ${errors.body ? styles.error : ''}`}
          value={body || ''}
          onChange={onBodyChange}
          disabled={!isEditable}
          placeholder={isEditable ? "Enter article content" : ""}
          rows={8}
        />
        {errors.body && <span className={styles.errorMessage}>{errors.body}</span>}
      </div>

      {/* Publish Date Field */}
      <div className={styles.formGroup}>
        <label className={styles.label}>Publish Date *</label>
        <input
          type="date"
          className={`${styles.input} ${styles.dateInput} ${errors.publishedDate ? styles.error : ''}`}
          value={publishedDate || ''}
          onChange={onDateChange}
          disabled={!isEditable}
        />
        {errors.publishedDate && <span className={styles.errorMessage}>{errors.publishedDate}</span>}
      </div>

      {/* Published Status with Switch */}
      <div className={styles.formGroup}>
        <div className={styles.switchRow}>
          <label className={styles.label}>Published *</label>
          <Switch
            isOn={isPublished}
            handleToggle={onPublishToggle}
            onColor="#6DF491"
          />
        </div>
      </div>

      {/* Delete Confirmation Message - Only shown in delete mode */}
      {isDeleteMode && (
        <div className={styles.deleteConfirmation}>
          Are you sure you want to delete this article? This action cannot be undone.
        </div>
      )}
    </div>
  );
};

export default ArticleForm;