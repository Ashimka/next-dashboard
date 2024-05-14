"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div id="root">
        <Header />
        <main className="main">
          <Link href={"/auth/login"}> Login</Link>
          <Link href={"/admins"}> Admin</Link>
          <Link href={"/admins/users"}> Users</Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
