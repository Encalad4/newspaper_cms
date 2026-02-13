// src/components/molecules/HeaderLookUp/HeaderLookUp.jsx
import React from 'react';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import styles from './HeaderLookUp.module.css';

const HeaderLookUp = ({ onSearchChange, searchValue }) => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.dashboardTitle}>Dashboard Overview</span>
      <SearchBar 
        onChange={onSearchChange} 
        value={searchValue}
      />
    </div>
  );
};

export default HeaderLookUp;