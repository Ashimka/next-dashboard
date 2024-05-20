"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/hooks";

import { useUserProfileQuery } from "@/features/slice/profile/profileSlice";
import { useLogoutUserMutation } from "@/features/slice/auth/authApiSlice";
import { logout } from "@/features/slice/apiSlice";

import styles from "@/styles/users/index.module.scss";

const Aside = () => {
  const [logoutUser] = useLogoutUserMutation();
  const { data: profile } = useUserProfileQuery();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser(logout);
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
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
          <div className={styles.name}>{profile && profile?.firstName}</div>
        </div>
        <div className={styles.menu}>
          <Link href={"/my/main"}>Профиль</Link>
          <Link href={"/my/orderlist"}>Заказы</Link>
          <Link href={"/my/settings"}>Настройки профиля</Link>
          <button onClick={handleLogout}>Выход</button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
