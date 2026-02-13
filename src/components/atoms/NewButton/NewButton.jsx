// src/components/atoms/NewButton/NewButton.jsx
import React from 'react';
import styles from './NewButton.module.css';

const NewButton = ({text, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NewButton;