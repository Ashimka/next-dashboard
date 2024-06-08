"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAllProductsInCartQuery } from "@/features/slice/cart/cartSlice";

import { PiShoppingBagOpen } from "react-icons/pi";
import { PiUser } from "react-icons/pi";

import { ICart } from "@/types/cart";
import styles from "@/styles/header/index.module.scss";

const Header = () => {
  const [user, setUser] = React.useState<string | null>(null);
  const { data: cart } = useAllProductsInCartQuery();
  const router = useRouter();
  let count = 0;

  if (cart) {
    count = cart?.reduce((acc: number, val: ICart) => {
      return acc + val.count;
    }, 0);
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      user && setUser(JSON.parse(user));
    }
  }, []);

  const clickToUserProfile = () => {
    if (!user) {
      router.push("/auth/login");
    } else {
      router.push("/my/main");
    }
  };

  return (
    <>
      <header className={styles.header_main}>
        <div className="container">
          <div className={styles.header}>
            <div className="header__menu">menu</div>
            <div
              className={styles.header__logo}
              onClick={() => router.push("/")}
            >
              Sushi shop
            </div>
            <div className={styles.header__user}>
              <div
                className={styles.basket}
                onClick={() => router.push("/my/cart")}
              >
                <span className={count > 0 ? styles.control : ""}>
                  {count > 0 && count}
                </span>
                <PiShoppingBagOpen />
                <span>Корзина</span>
              </div>
              <div className={styles.user} onClick={clickToUserProfile}>
                <PiUser />
                <span> {user ? "Профиль" : "Войти"}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
