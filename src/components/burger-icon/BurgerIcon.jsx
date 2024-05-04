import React from "react";
import styles from "./BurgerIcon.module.scss";
import clsx from "clsx";
import BurgerMenu from "../burger-menu/BurgerMenu";

const BurgerIcon = (props) => {
  const { isActiveBurgerMenu, setIsActiveBurgerMenu, onClick} = props;

  const burgerMenuClasses = clsx(styles["burger-mobile-wrap"], {
    [styles["burger-mobile-wrap__active"]]: isActiveBurgerMenu
  });

  return (
    <div onClick={onClick} className={burgerMenuClasses}>
      <BurgerMenu
        setIsActiveBurgerMenu={setIsActiveBurgerMenu}
        isActiveBurgerMenu={isActiveBurgerMenu}
      />
    </div>
  );
};

export default BurgerIcon;
