import { ICatInputs } from "@/types/inputs";
import React from "react";
import { useForm } from "react-hook-form";
import CatInput from "./CatInput";

import styles from "@/styles/category/index.module.scss";

interface Props {
  onClose: () => void;
}

const CatForm = ({ onClose }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<ICatInputs>();

  const onSubmit = async (data: ICatInputs) => {
    console.log(data);

    resetField("category");
    onClose();
  };
  return (
    <>
      <form className={styles.category_form} onSubmit={handleSubmit(onSubmit)}>
        <CatInput register={register} errors={errors} />
        <button className="button_input">Добавить</button>
      </form>
    </>
  );
};

export default CatForm;
