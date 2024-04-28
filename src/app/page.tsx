"use client";
import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectAuth, setUser } from "@/store/slice/apiSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { token } = useAppSelector(selectAuth);

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

  return (
    <>
      <div className="root">
        {token && (
          <>
            <div className="menu">
              <Sidebar />
            </div>
            <div className="content">
              <Navbar />
              <main className="main">
                <div className="container">Dashboard</div>
              </main>
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}
