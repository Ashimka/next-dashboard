"use client";
import LoginForm from "@/components/Auth/LoginForm";
import React from "react";

import styles from "@/styles/auth/index.module.scss";

const page = () => {
  return (
    <>
      <div className={styles.form_login}>
        <LoginForm />
      </div>
    </>
  );
};

export default page;
