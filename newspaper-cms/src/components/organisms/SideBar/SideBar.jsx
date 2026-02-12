// src/components/organisms/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

// Import the logo
import logo from '../../../../public/assets/icons/SeniropLogo.png';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const menuItems = [
    'Dashboard',
    'User Management',
    'Documents',
    'Statistics',
    'Settings'
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <img src={logo} alt="Senirop Logo" className={styles.logo} />
      </div>
      
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <button 
            key={item} 
            className={`${styles.navItem} ${selectedItem === item ? styles.selected : ''}`}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className={styles.logoutContainer}>
        <button className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;