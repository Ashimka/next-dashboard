"use client";
import React, { useCallback } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import styles from "@/styles/category/index.module.scss";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import CatForm from "@/components/Categories/CatForm";
import {
  useAllCategoryQuery,
  useDeleteCategoryMutation,
} from "@/features/slice/category/catSlice";
import { IResCat } from "@/types/inputs";
import Dialog from "@/components/Dialog/Dialog";
import { toast } from "react-toastify";

const CategoryPage = () => {
  const router = useRouter();
  const [isConfirm, setIsConfirm] = React.useState(false);
  const [dataCat, setDataCat] = React.useState<IResCat | null>(null);

  const { isSuccess, data: cats } = useAllCategoryQuery();
  const [deleteCat] = useDeleteCategoryMutation();

  const onClose = useCallback(() => {
    router.push("/admins/categories");
    document.querySelector("body")?.classList.remove("hidden");
  }, [router]);

  const onModalOpen = () => {
    router.push("/admins/categories?modal=true");
    document.querySelector("body")?.classList.add("hidden");
  };

  const onConfirm = (conf: boolean) => {
    setIsConfirm(conf);
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

  const onDialigOpen = (data: IResCat) => {
    router.push("/admins/categories?dialog=true");
    setDataCat(data);
    document.querySelector("body")?.classList.add("hidden");
  };

  React.useEffect(() => {
    if (isConfirm && dataCat) {
      const handleDeleteCategory = async () => {
        await deleteCat(dataCat.id);
        setIsConfirm(false);
      };
      handleDeleteCategory();
      toast.success("Сатегория удалена!");
    }
  }, [isConfirm, dataCat, deleteCat]);

  const onModalEditOpen = (data: IResCat) => {
    router.push(`/admins/categories?id=${data.name}&modal=true`);
    document.querySelector("body")?.classList.add("hidden");
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
              {isSuccess &&
                cats.map((item: IResCat) => (
                  <tr key={item.id} className={styles.blueTable_tbody_tr}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className={styles.table_btn}>
                        <button
                          className={styles.table_btn__edit}
                          onClick={() => onModalEditOpen(item)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className={styles.table_btn__delete}
                          onClick={() => onDialigOpen(item)}
                        >
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

      <Modal title="Добавление категории" onClose={onClose}>
        <CatForm onClose={onClose} />
      </Modal>
      <Dialog title="Удаление" onClose={onClose} onConfirm={onConfirm}>
        <span>{`Подтвердите удаление ${dataCat?.name}`}</span>
      </Dialog>
    </>
  );
};

export default CategoryPage;
