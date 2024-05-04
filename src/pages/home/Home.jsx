import React, { useState } from 'react';
import Header from '../../components/header/Header';

import styles from './Home.module.scss';
import BurgerIcon from '../../components/burger-icon/BurgerIcon';

const Home = () => {

  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const handleShowBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.headerMenu}>
        <BurgerIcon
          isActiveBurgerMenu={isActiveBurgerMenu}
          setIsActiveBurgerMenu={setIsActiveBurgerMenu}
          onClick={handleShowBurgerMenu}
        />
        <Header />
      </div>
      <div>asdsad</div>
    </div>
  )
}

export default Home;
