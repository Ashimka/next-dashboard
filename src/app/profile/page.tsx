"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { logout } from "@/features/slice/apiSlice";
import { useLogoutUserMutation } from "@/features/slice/auth/authApiSlice";
import { useUserProfileQuery } from "@/features/slice/profile/profileSlice";

import { useAppDispatch } from "@/hooks";

import styles from "@/styles/users/index.module.scss";

const UserProfilepage = () => {
  const [logoutUser] = useLogoutUserMutation();
  const { data: profile, isSuccess } = useUserProfileQuery();
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
              <div className={styles.name}>{profile && profile?.firstName}</div>
            </div>
            <div className={styles.menu}>
              <Link href={"/profile"}>Профиль</Link>
              <Link href={"/users/orders"}>Заказы</Link>
              <Link href={"/users/profile"}>Настройки профиля</Link>
              <button onClick={handleLogout}>Выход</button>
            </div>
          </aside>
          <div className={styles.profile__main}>
            {isSuccess && (
              <div className={styles.user}>
                <div className={styles.user__name}>{profile.firstName}</div>
                <div className={styles.user__name}>{profile.lastName}</div>
                <div className={styles.user__name}>{profile.address}</div>
              </div>
            )}

            {!profile && (
              <>
                <p className={styles.profile__help}>
                  Укажите Ваше имя и адрес доставки
                </p>
                <button className={styles.profile__btn}>Изменить</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilepage;
