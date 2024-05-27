"use client";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { adminRolle } from "@/hooks/useCheckAdminRole";
import { selectAuth, setUser } from "@/features/slice/apiSlice";

const allowedRoles = ["ADMIN"];

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { accessToken } = useAppSelector(selectAuth);
  const isAdmin = adminRolle({ accessToken, allowedRoles });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        dispatch(setUser(JSON.parse(user)));
      } else {
        if (!accessToken) {
          router.push("/auth/login");
        }
      }
    }
  }, [dispatch, accessToken, router]);

  React.useEffect(() => {
    if (accessToken && !isAdmin) {
      router.push("/");
      toast.warning("Нет доступа к панели управления!");
    }
  }, [accessToken, isAdmin, router]);

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
