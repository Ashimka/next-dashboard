"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

import { MdOutlineClose } from "react-icons/md";

import styles from "@/styles/modal/index.module.scss";

interface Props {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, onClose, children }: Props) => {
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const modalShow = searchParams.get("modal");

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

  const modal: JSX.Element | null =
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
          </div>
        </dialog>
      </>
    ) : null;

  return modal;
};

export default Modal;
