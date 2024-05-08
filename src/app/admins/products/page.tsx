"use client";
import { useAllProductsQuery } from "@/features/slice/products/productSlice";
import React from "react";

import styles from "@/styles/products/index.module.scss";
import { IProduct } from "@/types/inputs";

const ProductsPage = () => {
  const { isSuccess, data: products } = useAllProductsQuery();
  return (
    <>
      <div className={styles.products}>
        <div className={styles.products__header}>
          <div className={styles.title}>Продукты</div>
          <button className={styles.btn_add_product}>Добавить</button>
        </div>
        <div className={styles.products__body}>
          <div className={styles.product}>
            {isSuccess &&
              products.map((item: IProduct) => (
                <div key={item.id} className={styles.product__item}>
                  <div className={styles.image}>{item.image}</div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.desc}>{item.description}</div>
                  <div className={styles.buttons}></div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {isSuccess && console.log(products)}
    </>
  );
};

export default ProductsPage;
