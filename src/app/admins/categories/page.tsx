"use client";
import React, { useCallback } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/category/index.module.scss";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import CatForm from "@/components/Categories/CatForm";
import { useAllCategoryQuery } from "@/features/slice/category/catSlice";
import { IResCat } from "@/types/inputs";

const CategoryPage = () => {
  const router = useRouter();

  const { isSuccess, data: cats } = useAllCategoryQuery();

  const onClose = useCallback(() => {
    router.push("/admins/categories");
    document.querySelector("body")?.classList.remove("hidden");
  }, [router]);

  const onModalOpen = () => {
    router.push("/admins/categories?modal=true");
    document.querySelector("body")?.classList.add("hidden");
  };

  React.useEffect(() => {
    document.addEventListener(
      "keydown",
      (event: KeyboardEvent | React.KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      }
    );
  }, [onClose]);

  return (
    <>
      <div className={styles.cat}>
        <div className={styles.cat__header}>
          <div className={styles.cat_title}>Categories</div>
          <button className={styles.cat_btn} onClick={onModalOpen}>
            ADD
          </button>
        </div>
        <div className={styles.cat__list}>
          <table className={styles.blueTable}>
            <thead className={styles.blueTable_thead}>
              <tr>
                <th>№</th>
                <th className={styles.cat}>Категория</th>
                <th>Опции</th>
              </tr>
            </thead>
            <tbody className={styles.blueTable_tbody}>
              {isSuccess &&
                cats.map((item: IResCat) => (
                  <tr key={item.id} className={styles.blueTable_tbody_tr}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className={styles.table_btn}>
                        <button className={styles.table_btn__edit}>
                          <FaEdit />
                        </button>
                        <button className={styles.table_btn__delete}>
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal title="Cat" onClose={onClose}>
        <CatForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default CategoryPage;
