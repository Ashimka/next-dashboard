import React from "react";

import styles from "@/styles/cart/index.module.scss";

const Cartpage = () => {
  return (
    <>
      <div className={styles.cart}>
        <h4>CART page</h4>
        <span>Корзина пуста</span>
      </div>
    </>
  );
};

export default Cartpage;
