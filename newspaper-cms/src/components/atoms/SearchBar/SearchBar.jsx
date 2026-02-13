// src/components/atoms/SearchBar/SearchBar.jsx
import React from 'react';
import styles from './SearchBar.module.css';

// Import the search icon
import searchIcon from '../../../../public/assets/icons/SearchIcon.png';

const SearchBar = ({ placeholder = "Search", onChange, value }) => {
  return (
    <div className={styles.searchContainer}>
      <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchBar;