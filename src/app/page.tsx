"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useAllProductsMainQuery } from "@/features/slice/main/mainSlice";
import { useAddProductToCartMutation } from "@/features/slice/cart/cartSlice";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/styles/main/index.module.scss";

export default function Home() {
  const { isSuccess, data: products } = useAllProductsMainQuery();
  const [addCart] = useAddProductToCartMutation();

  const handleAddProductToCart = async (id: string | undefined) => {
    try {
      await addCart({
        productId: id,
        count: 1,
      }).unwrap();
    } catch (error) {
      console.log("Error to cart", error);
    }
  };
  return (
    <>
      <div id="root">
        <Header />
        <main className="main">
          <div className="container">
            <Link href={"/auth/login"}> Login</Link>
            <Link href={"/admins"}> Admin</Link>
            <Link href={"/admins/users"}> Users</Link>

            <div className="main__products">
              <div className={styles.product}>
                {isSuccess &&
                  products.map((item: IProduct) => (
                    <div key={item.id} className={styles.product__item}>
                      <div className={styles.image}>
                        <Image
                          src={
                            item.image
                              ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${item.image}`
                              : "/noimage.png"
                          }
                          alt={item.name}
                          width={150}
                          height={120}
                          priority={true}
                        />
                      </div>
                      <div className={styles.desc}>
                        <h4 className={styles.desc__name}>{item.name}</h4>
                        <p className={styles.desc__description}>
                          {item.description}
                        </p>
                        <div className={styles.desc__footer}>
                          <span className={styles.price}>
                            {`Цена: ${item.price}`} &#8381;
                          </span>
                          <button
                            className={styles.btn_add}
                            onClick={() => handleAddProductToCart(item.id)}
                          >
                            Добавить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
