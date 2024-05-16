"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { logout } from "@/features/slice/apiSlice";
import { useLogoutUserMutation } from "@/features/slice/auth/authApiSlice";

import { useAppDispatch } from "@/hooks";

import styles from "@/styles/users/index.module.scss";

const UserProfilepage = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser(logout);
    dispatch(logout());
    router.push("/");
  };
  return (
    <>
      <div className="container">
        <div className={styles.profile}>
          <aside className={styles.profile__aside}>
            <div className={styles.info}>
              <div className={styles.photo}>
                <Image
                  src={"/noavatar.png"}
                  alt="avatar"
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
              <div className={styles.name}>Name user</div>
            </div>
            <div className={styles.menu}>
              <Link href={"/users"}>Profile</Link>
              <Link href={"/users/orders"}>Orders</Link>
              <Link href={"/users/profile"}>Settings profile</Link>
              <button onClick={handleLogout}>logout</button>
            </div>
          </aside>
          <div className={styles.profile__main}></div>
        </div>
      </div>
    </>
  );
};

export default UserProfilepage;
