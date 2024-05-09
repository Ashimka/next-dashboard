"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  useAllProductsQuery,
  useDeleteProductMutation,
} from "@/features/slice/products/productSlice";
import { touchEscape } from "@/hooks/useClickEscape";

import Modal from "@/components/Modal/Modal";
import Dialog from "@/components/Dialog/Dialog";
import FormCreateProduct from "@/components/Products/FormCreateProduct";
import FormUpdateProduct from "@/components/Products/FormUpdateProduct";

import { IProduct } from "@/types/product";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { toast } from "react-toastify";
import styles from "@/styles/products/index.module.scss";

const ProductsPage = () => {
  const router = useRouter();
  const [productData, setProductData] = React.useState<IProduct | null>(null);
  const [isConfirm, setIsConfirm] = React.useState(false);

  const { isSuccess, data: products } = useAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const onModalOpen = () => {
    router.push("/admins/products?modal=true");
    document.querySelector("body")?.classList.add("hidden");
  };

  const onDialogOpen = (data: IProduct) => {
    router.push("/admins/products?dialog=true");
    setProductData(data);
    document.querySelector("body")?.classList.add("hidden");
  };

  const onEditModalOpen = (data: IProduct) => {
    router.push("/admins/products?modal=true");
    setProductData(data);
    document.querySelector("body")?.classList.add("hidden");
  };

  const onClose = React.useCallback(() => {
    router.push("/admins/products");
    document.querySelector("body")?.classList.remove("hidden");
    setProductData(null);
  }, [router]);

  React.useEffect(() => {
    touchEscape(onClose);
  }, [onClose]);

  const onConfirm = (conf: boolean) => {
    setIsConfirm(conf);
  };

  React.useEffect(() => {
    if (isConfirm && productData?.id) {
      const handleDeleteProduct = async () => {
        await deleteProduct(productData.id);
        setIsConfirm(false);
      };
      handleDeleteProduct();
      toast.success("Удалено!");
    }
  }, [isConfirm, productData, deleteProduct]);
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
                      height={120}
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
                      <button
                        className="edit_btn"
                        onClick={() => onEditModalOpen(item)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="delete_btn"
                        onClick={() => onDialogOpen(item)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Modal
        title={productData ? "Редактировать" : "Добавить продукт"}
        onClose={onClose}
      >
        {productData ? (
          <FormUpdateProduct onClose={onClose} dataProduct={productData} />
        ) : (
          <FormCreateProduct onClose={onClose} />
        )}
      </Modal>
      <Dialog title="Удаление" onClose={onClose} onConfirm={onConfirm}>
        <span>{`Подтвердите удаление ${productData?.name}`}</span>
      </Dialog>
    </>
  );
};

export default ProductsPage;
