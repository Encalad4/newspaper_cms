// src/components/molecules/ArticleCard/ArticleCard.jsx
import React from 'react';
import Button from '../../atoms/Button/Button';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.content}>{article.content}</p>
      <Button onClick={() => console.log('Edit article:', article.id)}>
        Edit
      </Button>
    </div>
  );
};

export default ArticleCard;