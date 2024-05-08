import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { fetchMessages } from '../../features/messages/actionCreator';

import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.scss';
import BurgerIcon from '../../components/burger-icon/BurgerIcon';

const Home = () => {
  const dispatch = useDispatch()

  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const {messages, isLoading, error} = useSelector((state) => state.messages)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

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
      <div className={styles.content}>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))
      ) : (
        <div>No messages found.</div>
      )}
      </div>
    </div>
  )
}

export default Home;
