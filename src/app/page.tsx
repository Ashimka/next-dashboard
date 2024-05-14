"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useAllProductsMainQuery } from "@/features/slice/main/mainSlice";
import { IProduct } from "@/types/product";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { isSuccess, data: products } = useAllProductsMainQuery();
  return (
    <>
      <div id="root">
        <Header />
        <main className="main">
          <Link href={"/auth/login"}> Login</Link>
          <Link href={"/admins"}> Admin</Link>
          <Link href={"/admins/users"}> Users</Link>

          {isSuccess &&
            products.map((item: IProduct) => (
              <div key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            ))}
        </main>
        <Footer />
      </div>
    </>
  );
}
