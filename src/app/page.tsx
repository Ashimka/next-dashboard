"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      Home page
      <Link href={"/auth/login"}> Login</Link>
      <Link href={"/admins"}> Admin</Link>
    </>
  );
}
