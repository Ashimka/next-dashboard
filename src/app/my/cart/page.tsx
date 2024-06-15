"use client";
import React from "react";

import styles from "@/styles/cart/index.module.scss";
import { useAllProductsInCartQuery } from "@/features/slice/cart/cartSlice";
import Image from "next/image";

const Cartpage = () => {
  const { data: cart } = useAllProductsInCartQuery();

  return (
    <>
      <div className={styles.cart}>
        <h4 className={styles.cart__title}>Корзина</h4>
        <div className={styles.cart__body}>
          {cart &&
            cart.map((product) => (
              <div className={styles.grid} key={product.productId}>
                <div className={styles.grid__product}>
                  <div className={styles.cart_image}>
                    <Image
                      src={
                        product.product?.image
                          ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${product.product?.image}`
                          : "/noimage.png"
                      }
                      alt={product.product?.name || "Нет фото"}
                      width={150}
                      height={120}
                      priority={true}
                    />
                  </div>
                  <div className={styles.cart_desc}>
                    <div className={styles.title}> {product.product?.name}</div>
                    <div className={styles.desc}>
                      {product.product?.description}
                    </div>
                  </div>
                  <div className={styles.cart_price}>
                    {product.product?.price} ₽
                  </div>
                </div>
                <div className={styles.grid__options}>
                  <div className={styles.quantity}>
                    <button className={styles.btn_minus}>-</button>
                    <span className={styles.count}>{product.count}</span>
                    <button className={styles.btn_plus}>+</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cartpage;
