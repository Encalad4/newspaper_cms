// src/components/templates/MainLayout/MainLayout.jsx
import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Newspaper CMS</h1>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;