"use client";
import React from "react";

import LoginForm from "@/components/Auth/LoginForm";

import styles from "@/styles/auth/index.module.scss";

const AuthPage = () => {
  return (
    <>
      <div className={styles.form_login}>
        <div className="form_container">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
