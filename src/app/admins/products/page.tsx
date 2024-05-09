"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAllProductsQuery } from "@/features/slice/products/productSlice";

import Modal from "@/components/Modal/Modal";
import FormCreateProduct from "@/components/Products/FormCreateProduct";

import { IProduct } from "@/types/product";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/products/index.module.scss";

const ProductsPage = () => {
  const router = useRouter();

  const { isSuccess, data: products } = useAllProductsQuery();

  const onModalOpen = () => {
    router.push("/admins/products?modal=true");
    document.querySelector("body")?.classList.add("hidden");
  };

  const onClose = React.useCallback(() => {
    router.push("/admins/products");
    document.querySelector("body")?.classList.remove("hidden");
  }, [router]);
  return (
    <>
      <div className={styles.products}>
        <div className={styles.products__header}>
          <div className={styles.title}>Продукты</div>
          <button className={styles.btn_add_product} onClick={onModalOpen}>
            Добавить
          </button>
        </div>
        <div className={styles.products__body}>
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
                      height={100}
                      priority={true}
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4 className={styles.desc__name}>{item.name}</h4>
                    <p className={styles.desc__description}>
                      {item.description}
                    </p>
                    <span className={styles.desc__price}>
                      {`Цена: ${item.price}`} &#8381;
                    </span>
                    <div className={styles.desc__buttons}>
                      <button className="edit_btn">
                        <FaEdit />
                      </button>
                      <button className="delete_btn">
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Modal title="Добавить продукт" onClose={onClose}>
        <FormCreateProduct onClose={onClose} />
      </Modal>
    </>
  );
};

export default ProductsPage;
