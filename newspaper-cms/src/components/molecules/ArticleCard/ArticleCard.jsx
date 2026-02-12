// src/components/molecules/ArticleCard/ArticleCard.jsx
import React from 'react';
import Switch from '../../atoms/Switch/Switch';
import styles from './ArticleCard.module.css';

// Import the three dots icon
import threeDotsIcon from '../../../../public/assets/icons/threeDots.png';

const ArticleCard = ({ article, onPublishToggle, onMenuClick }) => {
  const publishStatus = article.isPublished ? 'published' : 'draft';
  
  return (
    <div className={`${styles.card} ${styles[publishStatus]}`}>
      <div className={styles.articleInfo}>
        <p className={styles.title} title={article.headline}>
          {article.headline}
        </p>
        <p className={styles.author} title={article.author}>
          {article.author}
        </p>
        <p className={styles.date} title={article.publishedDate}>
          {article.publishedDate}
        </p>
      </div>
      
      {/* Switch - separate */}
      <div className={styles.switchContainer}>
        <Switch 
          isOn={article.published}
          handleToggle={() => onPublishToggle(article.id, !article.published)}
          onColor="#6DF491"
        />
      </div>
      
      {/* Three dots - separate */}
      <button 
        className={styles.menuButton}
        onClick={() => onMenuClick && onMenuClick(article.id)}
        aria-label="Article menu"
      >
        <img 
          src={threeDotsIcon} 
          alt="Menu" 
        />
      </button>
    </div>
  );
};

export default ArticleCard;