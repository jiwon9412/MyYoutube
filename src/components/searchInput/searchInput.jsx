import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './searchInput.module.scss';

const SearchInput = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');
  const ref = useRef();

  const darkmode = useSelector((state) => state.mode.darkmode);

  const onSubmit = useCallback((e) => {
    //console.log('search1 : ' + ref.current.value);
    handleSubmit(ref.current.value);
    e.preventDefault();
  }, []);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className={darkmode ? styles.searchBoxDark : styles.searchBox}
    >
      <input
        ref={ref}
        value={search || ''}
        placeholder="Search.."
        className={styles.search}
        onChange={handleChange}
      />
      <button type="submit" className={styles.btnSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchInput;
