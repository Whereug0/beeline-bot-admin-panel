import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { apiSlice, useGetMessageQuery } from '../../features/api/apiSlice';


import { useDispatch} from 'react-redux';

import styles from './Home.module.scss';
import BurgerIcon from '../../components/burger-icon/BurgerIcon';

const Home = () => {
  const dispatch = useDispatch()

  const {data: message, isLoading, error} = useGetMessageQuery()


  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);


  useEffect(() => {
    dispatch(apiSlice.endpoints.getMessage.initiate())
  },[dispatch])

  const handleShowBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(message)

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
        {message.map((message) => (
          <div key={message.id}>{message.type}</div>
        ))}
      </div>
    </div>
  )
}

export default Home;
