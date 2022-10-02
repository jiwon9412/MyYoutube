import React from 'react';
import styles from './loading.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <FontAwesomeIcon icon={faSpinner} className={styles.loadingIcon} />
      <p>Loading ...</p>
    </div>
  );
};

export default Loading;
