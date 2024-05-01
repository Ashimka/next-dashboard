import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/category/index.module.scss";

const CategoryPage = () => {
  return (
    <>
      <div className={styles.cat}>
        <div className={styles.cat__header}>
          <div className={styles.cat_title}>Categories</div>
          <button className={styles.cat_btn}>ADD</button>
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
    </>
  );
};

export default CategoryPage;
