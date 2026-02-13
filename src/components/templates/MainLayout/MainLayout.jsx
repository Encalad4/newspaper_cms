// src/components/templates/MainLayout/MainLayout.jsx
import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;