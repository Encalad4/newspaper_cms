// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';
import styles from './NotFoundPage.module.css';

const NotFoundPage = ({ selectedMenuItem }) => {
  return (
    <div className={styles.pageLayout}>
      <Sidebar />
      <div className={styles.contentArea}>
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.message}>Page Not Found</p>
          <p className={styles.subtext}>The page you're looking for doesn't exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;