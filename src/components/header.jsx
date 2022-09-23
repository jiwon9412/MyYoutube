import React, { useState } from 'react';
import styles from './header.module.css';
import SearchInput from './searchInput';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ handleSubmit, mode }) => {
  return (
    <div className={styles.wrapHaeder}>
      <div className={styles.logo}></div>
      <SearchInput handleSubmit={handleSubmit} />
      <div className={styles.info}>
        {mode === 'light' && (
          <FontAwesomeIcon icon={faMoon} className={styles.darkMode} />
        )}
        {mode === 'dark' && (
          <FontAwesomeIcon icon={faSun} className={styles.lightMode} />
        )}
        <span className={styles.username}>JW</span>
      </div>
    </div>
  );
};

export default Header;
