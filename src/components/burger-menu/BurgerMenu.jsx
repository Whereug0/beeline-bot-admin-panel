import React from "react";
import styles from "./BurgerMenu.module.scss";
import clsx from "clsx";
import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg';
import {ReactComponent as BotIcon} from '../../assets/icons/bot.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import {ReactComponent as StaffIcon} from '../../assets/icons/staff.svg';
import { useDispatch } from "react-redux";
import { ROUTES } from "../../utils/routes";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";


const BurgerMenu = (props) => {
  const { isActiveBurgerMenu, setIsActiveBurgerMenu } = props;
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const navMenuClasses = clsx(styles["nav-menu"], {
    [styles["nav-menu-active"]]: isActiveBurgerMenu,
  });

 
  const handleQuitBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  const handleLogout = () => {
    // Отправить действие logout в Redux
    dispatch(logout());

    // Перенаправить пользователя на страницу входа
    navigate(ROUTES.LOGIN);
  };

  return (
    <nav className={navMenuClasses} onClick={(e) => e.stopPropagation()}>
      <ul className={styles["nav-menu__list"]}>
        <div className={styles["pages"]}>
          <li
            // onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
              <HomeIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Культуры Beeline</span>
          </li>
          <li
            // onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
              <BotIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Пользователи</span>
          </li>
          <li
            // onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >   
              <StaffIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Сообщения</span>
          </li>
          <li
            // onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >   
              <StaffIcon className={styles.icon}/>
              <span className={styles["nav-menu__text"]}>Справки</span>
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
          <button 
            className={styles.logoutBtn} 
            onClick={handleLogout}
          >
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
