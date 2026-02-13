// src/components/molecules/HeaderLookUp/HeaderLookUp.jsx
import React from 'react';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import styles from './HeaderLookUp.module.css';

const HeaderLookUp = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.dashboardTitle}>Dashboard Overview</span>
      <SearchBar />
    </div>
  );
};

export default HeaderLookUp;