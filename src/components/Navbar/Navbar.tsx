"use client";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import styles from "@/styles/navbar/index.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__title}>АДМИН ПАНЕЛЬ</div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__search}>
          <MdSearch />
          <input type="text" placeholder="Поиск..." className={styles.input} />
        </div>
        <div className={styles.navbar__icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
