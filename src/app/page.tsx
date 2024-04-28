"use client";
import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectAuth, setUser } from "@/store/slice/apiSlice";

export default function Home() {
  const { token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");

      if (user) {
        dispatch(setUser(JSON.parse(user)));
      }
    }
  }, [dispatch]);

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
