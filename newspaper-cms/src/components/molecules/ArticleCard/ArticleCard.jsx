// src/components/molecules/ArticleCard/ArticleCard.jsx
/*import React from 'react';
import Button from '../../atoms/Button/Button';
import styles from './ArticleCard.module.css';
import Switch  from '../../atoms/Switch/Switch';

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{article.headline}</p>
      <p className={styles.author}>{article.author}</p>
      <p className={styles.content}>{article.publishedDate}</p>
      <Button onClick={() => console.log('Edit article:', article.id)}>
        Edit
      </Button>
    </div>
  );
};

export default ArticleCard; */
import React from 'react';
import Button from '../../atoms/Button/Button';
import Switch from '../../atoms/Switch/Switch';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ article, onPublishToggle }) => {
  const publishStatus = article.isPublished ? 'published' : 'draft';
  
  return (
    <div className={`${styles.card} ${styles[publishStatus]}`}>
      <div className={styles.articleInfo}>
        <p className={styles.title} title={article.headline}>
          {article.headline}
        </p>
        <p className={styles.author}>{article.author}</p>
        <p className={styles.date}>{article.publishedDate}</p>
      </div>
      
      <div className={styles.controls}>
        <div className={styles.publishControl}>
          <Switch 
            isOn={article.isPublished}
            handleToggle={() => onPublishToggle(article.id, !article.isPublished)}
            onColor="#4CAF50"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;