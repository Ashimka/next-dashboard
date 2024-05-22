"use client";

import React from "react";

import { useUserProfileQuery } from "@/features/slice/profile/profileSlice";

import FormProfile from "@/components/FormProfile/FormProfile";

import styles from "@/styles/users/index.module.scss";

const Mainpage = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const { data: profile, isSuccess } = useUserProfileQuery();

  return (
    <>
      <div className={styles.profile__main}>
        {isSuccess && profile && (
          <div className={styles.user}>
            <div className={styles.user__name}>{profile.firstName}</div>
            <div className={styles.user__name}>{profile.lastName}</div>
            <div className={styles.user__name}>{profile.address}</div>
          </div>
        )}

        {!profile && !openForm && (
          <>
            <p className={styles.profile__help}>
              Укажите Ваше имя и адрес доставки
            </p>
            <button
              className={styles.profile__btn}
              onClick={() => setOpenForm(true)}
            >
              Изменить
            </button>
          </>
        )}

        {openForm && <FormProfile setOpenForm={setOpenForm} />}
      </div>
    </>
  );
};

export default Mainpage;
