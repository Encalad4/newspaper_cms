// src/components/atoms/OptionsMenu/OptionsMenu.jsx
import React from 'react';
import styles from './OptionsMenu.module.css';

// Import icons
import editIcon from '../../../../public/assets/icons/EditPencil.png';
import viewIcon from '../../../../public/assets/icons/ViewEye.png';
import deleteIcon from '../../../../public/assets/icons/TrashIcon.png';

const OptionsMenu = ({ onEdit, onView, onDelete }) => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuItem} onClick={onEdit}>
        <img src={editIcon} alt="Edit" className={styles.icon} />
        <span>Edit</span>
      </button>
      
      <button className={styles.menuItem} onClick={onView}>
        <img src={viewIcon} alt="View" className={styles.icon} />
        <span>View</span>
      </button>
      
      <div className={styles.divider} />
      
      <button className={`${styles.menuItem} ${styles.deleteItem}`} onClick={onDelete}>
        <img src={deleteIcon} alt="Delete" className={styles.icon} />
        <span>Delete</span>
      </button>
    </div>
  );
};

export default OptionsMenu;