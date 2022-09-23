import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './searchInput.module.css';

const SearchInput = ({ handleSubmit }) => {
  const [search, setSearch] = useState();

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} placeholder="Search.." className={styles.search} />
      <button type="submit" className={styles.btnSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchInput;
