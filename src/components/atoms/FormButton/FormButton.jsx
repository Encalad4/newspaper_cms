// src/components/atoms/FormButton/FormButton.jsx
import React from 'react';
import styles from './FormButton.module.css';

const FormButton = ({ 
  variant = 'primary', // primary, delete, disabled
  onClick, 
  children 
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  );
};

export default FormButton;