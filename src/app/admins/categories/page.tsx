"use client";
import React, { useCallback } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/category/index.module.scss";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import CatForm from "@/components/Categories/CatForm";

const CategoryPage = () => {
  const router = useRouter();

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
              <tr className={styles.blueTable_tbody_tr}>
                <td>1</td>
                <td>2</td>
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
              <tr className={styles.blueTable_tbody_tr}>
                <td>1</td>
                <td>2</td>
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
              <tr className={styles.blueTable_tbody_tr}>
                <td>1</td>
                <td>2</td>
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
