import Image from "next/image";
import { useRouter } from "next/navigation";

import MenuLink from "@/components/MenuLink/MenuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { useAppDispatch } from "@/hooks";
import { logout } from "@/store/slice/apiSlice";
import { useLogoutUserMutation } from "@/store/slice/auth/authApiSlice";

import styles from "@/styles/sidebar/index.module.scss";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
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
          src={user?.img || "/noavatar.png"}
          alt="avatar"
          width="50"
          height="50"
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
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
