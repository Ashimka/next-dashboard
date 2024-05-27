"use client";
import React, { Suspense } from "react";
import { useRouter } from "next/navigation";

import { selectAuth, setUser } from "@/features/slice/apiSlice";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { adminRolle } from "@/hooks/useCheckAdminRole";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import styles from "@/styles/users/index.module.scss";
import Aside from "@/components/AuthAside/Aside";
import Loading from "@/components/Loading";

const allowedRoles = ["ADMIN", "USER"];

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { accessToken } = useAppSelector(selectAuth);

  const isAuth = adminRolle({ accessToken, allowedRoles });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        dispatch(setUser(JSON.parse(user)));
      } else {
        if (!accessToken) {
          router.push("/");
        }
      }
    }
  }, [dispatch, accessToken, router]);

  React.useEffect(() => {
    if (accessToken && !isAuth) {
      router.push("/");
      console.log("Нет авторизации");
    }
  }, [accessToken, isAuth, router]);

  return (
    <>
      <div id="root">
        <Header />
        <main className="main">
          <div className="container">
            <div className={styles.profile}>
              <Aside />
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
