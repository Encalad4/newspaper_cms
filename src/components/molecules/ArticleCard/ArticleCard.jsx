// src/components/molecules/ArticleCard/ArticleCard.jsx
import React, { useState, useRef, useEffect } from 'react';
import Switch from '../../atoms/Switch/Switch';
import OptionsMenu from '../../atoms/OptionsMenu/OptionsMenu';
import styles from './ArticleCard.module.css';

// Import the three dots icon
import threeDotsIcon from '../../../../public/assets/icons/threeDots.png';

const ArticleCard = ({ article, onPublishToggle, onEdit, onView, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ vertical: 'bottom', horizontal: 'left' });
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const cardRef = useRef(null);
  
  const publishStatus = article.isPublished ? 'published' : 'draft';
  
  const calculatePosition = () => {
    if (!menuButtonRef.current || !cardRef.current) return;
    
    const buttonRect = menuButtonRef.current.getBoundingClientRect();
    const containerRect = cardRef.current.closest(`.${styles.listContainer}`)?.getBoundingClientRect() || document.body.getBoundingClientRect();
    
    const menuHeight = 160; // Approximate height of OptionsMenu
    const menuWidth = 160; // Width of OptionsMenu
    
    // Check vertical space within the container
    const spaceBelow = containerRect.bottom - buttonRect.bottom;
    const spaceAbove = buttonRect.top - containerRect.top;
    
    // Check horizontal space within the container (always prefer left side)
    const spaceOnLeft = buttonRect.left - containerRect.left;
    const spaceOnRight = containerRect.right - buttonRect.right;
    
    // Determine vertical position
    let vertical = 'bottom';
    if (spaceBelow < menuHeight && spaceAbove > menuHeight) {
      vertical = 'top';
    } else if (spaceBelow < menuHeight && spaceAbove < menuHeight) {
      // Not enough space either way, choose the side with more space
      vertical = spaceAbove > spaceBelow ? 'top' : 'bottom';
    }
    
    // Determine horizontal position (always try left first - menu appears on left side of button)
    let horizontal = 'left';
    if (spaceOnLeft < menuWidth && spaceOnRight > menuWidth) {
      horizontal = 'right';
    } else if (spaceOnLeft < menuWidth && spaceOnRight < menuWidth) {
      // Not enough space on either side, position based on available space
      horizontal = spaceOnLeft > spaceOnRight ? 'left' : 'right';
    }
    
    setMenuPosition({ vertical, horizontal });
  };
  
  const handleMenuClick = (e) => {
    e.stopPropagation();
    
    if (!isMenuOpen) {
      calculatePosition();
    }
    
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEdit = () => {
    setIsMenuOpen(false);
    onEdit && onEdit(article);
  };

  const handleView = () => {
    setIsMenuOpen(false);
    onView && onView(article);
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    onDelete && onDelete(article);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update position on scroll - DON'T close, just reposition
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        calculatePosition();
      }
    };

    // Listen for scroll on the container, not the whole window
    const scrollContainer = cardRef.current?.closest(`.${styles.listContainer}`) || window;
    scrollContainer.addEventListener('scroll', handleScroll, true);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll, true);
    };
  }, [isMenuOpen]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        calculatePosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Generate position class
  const getPositionClass = () => {
    const { vertical, horizontal } = menuPosition;
    return `${styles.optionsMenuWrapper} ${styles[`position-${vertical}`]} ${styles[`position-${horizontal}`]}`;
  };

  return (
    <div 
      className={`${styles.card} ${styles[publishStatus]}`}
      ref={cardRef}
      onClick={() => onView && onView(article)}
    >
      <div className={styles.articleInfo}>
        <p className={styles.title} title={article.headline}>
          {article.headline}
        </p>
        <p className={styles.author} title={article.author}>
          {article.author}
        </p>
        <p className={styles.date} title={article.publishedDate}>
          {article.publishedDate}
        </p>
      </div>
      
      {/* Switch - separate */}
      <div 
        className={styles.switchContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <Switch 
          isOn={article.published}
          handleToggle={() => onPublishToggle(article.id, !article.published)}
          onColor="#6DF491"
        />
      </div>
      
      {/* Three dots - separate */}
      <div className={styles.menuContainer}>
        <button 
          ref={menuButtonRef}
          className={styles.menuButton}
          onClick={handleMenuClick}
          aria-label="Article menu"
        >
          <img 
            src={threeDotsIcon} 
            alt="Menu" 
          />
        </button>
        
        {isMenuOpen && (
          <div 
            ref={menuRef} 
            className={getPositionClass()}
            onClick={(e) => e.stopPropagation()}
          >
            <OptionsMenu 
              onEdit={handleEdit}
              onView={handleView}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;