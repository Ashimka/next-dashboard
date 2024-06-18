"use client";
import React from "react";

import styles from "@/styles/cart/index.module.scss";
import {
  useAllProductsInCartQuery,
  useUpdateProductsInCartMutation,
} from "@/features/slice/cart/cartSlice";
import Image from "next/image";
import { IUpdateCart } from "@/types/cart";

const Cartpage = () => {
  const { data: cart } = useAllProductsInCartQuery();
  const [updateCount] = useUpdateProductsInCartMutation();
  const [value, setValue] = React.useState("");
  const [valueDelivery, setValueDelivery] = React.useState("");

  const clickToUpdateCountPlus = (data: IUpdateCart) => {
    updateCount({
      productId: data.productId,
      id: data.id,
      options: "plus",
    });
  };

  const clickToUpdateCountMinus = (data: IUpdateCart) => {
    updateCount({
      productId: data.productId,
      id: data.id,
      options: "minus",
    });
  };

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const changeValueDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueDelivery(event.target.value);
  };

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
                      placeholder="blur"
                      blurDataURL={
                        product.product?.image
                          ? `${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${product.product?.image}`
                          : "/noimage.png"
                      }
                    />
                  </div>
                  <div className={styles.cart_desc}>
                    <div className={styles.title}> {product.product?.name}</div>
                    <div className={styles.desc}>
                      {product.product?.description}
                    </div>
                  </div>
                  <div className={styles.cart_price}>
                    {product && product.product?.price * product.count} ₽
                  </div>
                </div>
                <div className={styles.grid__options}>
                  <div className={styles.quantity}>
                    <button
                      className={styles.btn_minus}
                      onClick={() => clickToUpdateCountMinus(product)}
                    >
                      -
                    </button>
                    <span className={styles.count}>{product.count}</span>
                    <button
                      className={styles.btn_plus}
                      onClick={() => clickToUpdateCountPlus(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.cart__total}>
          К оплате:{" "}
          <span>
            {cart?.reduce((acc, val) => {
              return acc + val.count * val.product.price;
            }, 0)}{" "}
            ₽
          </span>
        </div>
        <form className={styles.checkout}>
          <div className={styles.summary}>
            <div className={styles.summary_title}>Выберите способ оплаты</div>
            <label htmlFor="cash">
              <input
                className={styles.summary_input}
                type="radio"
                name="summary"
                id="cash"
                value="cash"
                onChange={changeValue}
              />
              <span
                className={
                  value === "cash" ? styles.selected : styles.radio_span
                }
              >
                Наличными
              </span>
            </label>
            <label htmlFor="card">
              <input
                className={styles.summary_input}
                type="radio"
                name="summary"
                id="card"
                value="card"
                onChange={changeValue}
                required
              />
              <span
                className={
                  value === "card" ? styles.selected : styles.radio_span
                }
              >
                Картой(онлайн перевод)
              </span>
            </label>
          </div>
          <div className={styles.summary}>
            <div className={styles.summary_title}>Выберите способ доставки</div>
            <label htmlFor="pickup">
              <input
                className={styles.summary_input}
                type="radio"
                name="delivery"
                id="pickup"
                value="pickup"
                onChange={changeValueDelivery}
              />
              <span
                className={
                  valueDelivery === "pickup"
                    ? styles.selected
                    : styles.radio_span
                }
              >
                Самовывоз
              </span>
            </label>
            <label htmlFor="address">
              <input
                className={styles.summary_input}
                type="radio"
                name="delivery"
                id="address"
                value="address"
                onChange={changeValueDelivery}
                required
              />
              <span
                className={
                  valueDelivery === "address"
                    ? styles.selected
                    : styles.radio_span
                }
              >
                На адрес
              </span>
            </label>
          </div>
          <textarea
            className={styles.checkout_text}
            name="comments"
            id="comments"
            placeholder="Комментарии к заказу"
          ></textarea>
          <button className={styles.checkout_btn}>Оформить</button>
        </form>
      </div>
    </>
  );
};

export default Cartpage;
