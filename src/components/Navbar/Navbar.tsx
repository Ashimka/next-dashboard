"use client";

import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import styles from "@/styles/navbar/index.module.scss";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__title}>{pathname.split("/").pop()}</div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.navbar__icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
