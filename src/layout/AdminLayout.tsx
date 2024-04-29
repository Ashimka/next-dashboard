"use client";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectAuth, setUser } from "@/store/slice/apiSlice";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { adminRolle } from "@/hooks/useCheckAdminRole";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token } = useAppSelector(selectAuth);
  const isAdmin = adminRolle(token);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        dispatch(setUser(JSON.parse(user)));
      } else {
        if (!token) {
          router.push("/auth/login");
        }
      }
    }
  }, [dispatch, token, router]);

  React.useEffect(() => {
    if (token && !isAdmin) {
      router.push("/");
    }
  }, [token, isAdmin, router]);

  return (
    <>
      <div className="root">
        {isAdmin && (
          <>
            <div className="menu">
              <Sidebar />
            </div>
            <div className="content">
              <Navbar />
              <main className="main">
                <div className="container">{children}</div>
              </main>
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AdminLayout;
