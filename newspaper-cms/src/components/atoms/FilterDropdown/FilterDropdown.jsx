// src/components/atoms/FilterDropdown/FilterDropdown.jsx
import React from 'react';
import styles from './FilterDropdown.module.css';

const FilterDropdown = ({ onFilterChange, selectedFilter = 'All' }) => {
  const filterOptions = ['All', 'Published', 'Unpublished'];

  return (
    <select 
      className={styles.dropdown} 
      value={selectedFilter}
      onChange={onFilterChange}
    >
      {filterOptions.map((option) => (
        <option key={option} value={option} className={styles.option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;