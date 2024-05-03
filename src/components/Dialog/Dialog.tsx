"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

import { MdOutlineClose } from "react-icons/md";

import styles from "@/styles/modal/index.module.scss";

interface Props {
  title: string;
  onClose: () => void;
  onConfirm: (conf: boolean) => void;
  children: React.ReactNode;
}

const Dialog = ({ title, onClose, onConfirm, children }: Props) => {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const modalShow = searchParams.get("dialog");

  useEffect(() => {
    if (modalShow === "true") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modalShow]);

  const closeModal = () => {
    modalRef.current?.close();
    onClose();
  };

  const confirmModal = () => {
    onConfirm(true);
    onClose();
  };

  const dialog: JSX.Element | null =
    modalShow === "true" ? (
      <>
        <dialog className={styles.modal} ref={modalRef}>
          <div className={styles.wrapper}>
            <div className={styles.modal__header}>
              <div className={styles.title}>{title}</div>
              <button className={styles.close} onClick={closeModal}>
                <MdOutlineClose />
              </button>
            </div>
            <div className={styles.modal__body}>{children}</div>
            <div className={styles.modal__footer}>
              <button className={styles.btn_no} onClick={closeModal}>
                Нет
              </button>
              <button className={styles.btn_yes} onClick={confirmModal}>
                Да
              </button>
            </div>
          </div>
        </dialog>
      </>
    ) : null;

  return dialog;
};

export default Dialog;
