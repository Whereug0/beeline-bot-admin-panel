import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
function Header() {


  return (
    <header className={styles.header}>
      <div className={styles.searchWrapp}>
        <SearchIcon className={styles.SearchIcon}/>
        <input className={styles.inputSearch} type="text" placeholder='Search' />
      </div>
    </header>
  );
}

export default Header;
