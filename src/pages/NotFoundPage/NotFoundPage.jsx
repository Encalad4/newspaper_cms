// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import SideBar from '../../components/organisms/SideBar/SideBar';
import styles from './NotFoundPage.module.css';

const NotFoundPage = ({ selectedMenuItem, onPageChange }) => { // Add onPageChange prop
  return (
    <div className={styles.pageLayout}>
      <SideBar 
        selectedItem={selectedMenuItem} 
        onItemClick={onPageChange} 
      />
      <div className={styles.contentArea}>
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.message}>Page Not Found</p>
          <p className={styles.subtext}>The page you're looking for doesn't exist yet.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;