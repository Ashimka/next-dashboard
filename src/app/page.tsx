"use client";
import React from "react";

import AuthPage from "./auth/AuthPage";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

import { useAppSelector } from "@/hooks";

export default function Home() {
  const user = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="root">
        {user.login ? (
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
        ) : (
          <AuthPage />
        )}
      </div>
    </>
  );
}
