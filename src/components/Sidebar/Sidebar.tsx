"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MenuLink from "@/components/MenuLink/MenuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdOutlineCategory,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { useAppDispatch } from "@/hooks";
import { useLogoutUserMutation } from "@/features/slice/auth/authApiSlice";
import { logout } from "@/features/slice/apiSlice";

import styles from "@/styles/sidebar/index.module.scss";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Главная",
        path: "/admins",
        icon: <MdDashboard />,
      },
      {
        title: "Пользователи",
        path: "/admins/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Продукты",
        path: "/admins/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Категории",
        path: "/admins/categories",
        icon: <MdOutlineCategory />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const user = {
    img: "",
    name: "Ashimka",
  };
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser(logout);
    dispatch(logout());
    router.push("/auth/login");
  };
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebar__user} ${styles.user}`}>
        <Image
          className={styles.user__image}
          src="/noavatar.png"
          alt="avatar"
          width="50"
          height="50"
          priority={true}
        />
        <div className={styles.user__detail}>
          <span className={styles.name}>{user?.name}</span>
          <span className={styles.title}>Administrator</span>
        </div>
      </div>
      <ul className={styles.sidebar__list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button onClick={() => handleLogout()} className={styles.sidebar__logout}>
        <MdLogout />
        Выйти
      </button>
    </div>
  );
};

export default Sidebar;
