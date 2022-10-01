import React, { useState } from 'react';
import styles from './header.module.scss';
import SearchInput from '../searchInput/searchInput';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../reducers/mode';

const Header = ({ handleSubmit, goHome }) => {
  /**dispatch */
  const dispath = useDispatch();

  /**reducers state */
  const darkmode = useSelector((state) => state.mode.darkmode);

  /**
   * 모드 버튼 클릭 시 다크모드 or 밝은모드 적용
   */
  const clickMode = () => {
    dispath(toggleMode(!darkmode));
  };
  return (
    <div className={styles.wrapHaeder}>
      <div
        className={darkmode ? styles.logoDark : styles.logo}
        onClick={goHome}
      ></div>
      <SearchInput handleSubmit={handleSubmit} />
      <div className={styles.info}>
        {!darkmode && (
          <FontAwesomeIcon
            icon={faMoon}
            className={styles.darkMode}
            onClick={clickMode}
          />
        )}
        {darkmode && (
          <FontAwesomeIcon
            icon={faSun}
            className={styles.lightMode}
            onClick={clickMode}
          />
        )}
        <span className={styles.username}>JW</span>
      </div>
    </div>
  );
};

export default Header;
