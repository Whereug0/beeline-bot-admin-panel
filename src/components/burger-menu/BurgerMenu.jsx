import React from "react";
import styles from "./BurgerMenu.module.scss";
import clsx from "clsx";
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg';
import {ReactComponent as BotIcon} from '../../assets/icons/bot.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import {ReactComponent as StaffIcon} from '../../assets/icons/staff.svg';



const BurgerMenu = (props) => {
  const { theme, isActiveBurgerMenu, setIsActiveBurgerMenu } = props;
  
  const navMenuClasses = clsx(styles["nav-menu"], {
    [styles["nav-menu-active"]]: isActiveBurgerMenu,
    [styles["nav-menu-light"]]: theme === "light",
  });

 
  const handleQuitBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <nav className={navMenuClasses}>
      <ul className={styles["nav-menu__list"]}>
        <div className={styles["pages"]}>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
              <HomeIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Главная страница</span>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
              <BotIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Управление ботом</span>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >   
              <StaffIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Сотрудники</span>
          </li>
        </div>
      </ul>
      <div className={styles.account}>
        <div className={styles.avatar}>
          <img src="" alt="" />
        </div>
        <div>
          <p>Name</p>
          <p>Должность</p>
        </div>
        <div className={styles.logoutBtnWrapp}>
          <button className={styles.logoutBtn}>
            <div>
              <LogoutIcon className={styles.icon}/>
            </div>
              Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BurgerMenu;
