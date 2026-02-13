// src/components/atoms/FilterDropdown/FilterDropdown.jsx
import React from 'react';
import styles from './FilterDropdown.module.css';

const FilterDropdown = () => {
  const filterOptions = ['All', 'Published', 'Unpublished'];

  return (
    <select className={styles.dropdown} defaultValue="All">
      {filterOptions.map((option) => (
        <option key={option} value={option} className={styles.option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;