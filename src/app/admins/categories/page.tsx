"use client";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/category/index.module.scss";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { useClickOutside } from "@/hooks/useClickOutside";

const CategoryPage = () => {
  const [open, setOpen] = React.useState(false);
  const modalRef = useClickOutside(() => setOpen(false));
  const router = useRouter();

  const onClose = () => {
    router.push("/admins/categories");
    setOpen(!open);
    document.querySelector("body")?.classList.toggle("hidden");
  };

  const onModalOpen = () => {
    router.push("/admins/categories?modal=true");
    setOpen(!open);
    document.querySelector("body")?.classList.toggle("hidden");
  };

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
      <div ref={modalRef}>
        <Modal title="Cat" onClose={onClose}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            facilis eos voluptates veritatis harum. A quidem mollitia,
            voluptatem expedita maxime sunt culpa officia et quaerat quod
            laboriosam pariatur odio iste!
          </p>
        </Modal>
      </div>
    </>
  );
};

export default CategoryPage;
