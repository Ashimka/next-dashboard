"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { selectAuth } from "@/features/slice/apiSlice";
import { useAppSelector } from "@/hooks";

import { PiShoppingBagOpen } from "react-icons/pi";
import { PiUser } from "react-icons/pi";

import styles from "@/styles/header/index.module.scss";

const Header = () => {
  const { accessToken } = useAppSelector(selectAuth);
  const router = useRouter();
  let count = 0;

  const clickToUserProfile = () => {
    if (!accessToken) {
      router.push("/auth/login");
    } else {
      router.push("/users");
    }
  };

  return (
    <>
      <header className={styles.header_main}>
        <div className="container">
          <div className={styles.header}>
            <div className="header__menu">menu</div>
            <div className="header__logo">Sushi shop</div>
            <div className={styles.header__user}>
              <div className={styles.basket}>
                <span className={count > 0 ? styles.control : ""}>
                  {count > 0 && count}
                </span>
                <PiShoppingBagOpen />
                <span>Корзина</span>
              </div>
              <div className={styles.user} onClick={clickToUserProfile}>
                <PiUser />
                <span> {accessToken ? "Профиль" : "Войти"}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
