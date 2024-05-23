"use client";
import React from "react";

import { useUserProfileQuery } from "@/features/slice/profile/profileSlice";

import UpdateFormProfile from "@/components/FormProfile/UpdateFormProfile";

import styles from "@/styles/users/index.module.scss";

const SettingProfilepage = () => {
  const { data: profile, isSuccess } = useUserProfileQuery();

  return (
    <>
      {isSuccess && (
        <div className={styles.profile__main}>
          <UpdateFormProfile {...profile} />
        </div>
      )}
    </>
  );
};

export default SettingProfilepage;
