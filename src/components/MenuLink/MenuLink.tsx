"use client";

import Link from "next/link";
import styles from "@/styles/menuLink/index.module.scss";
import { usePathname } from "next/navigation";

const MenuLink = ({
  item,
}: {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.menu_link} ${
        pathname === item.path ? "active" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
