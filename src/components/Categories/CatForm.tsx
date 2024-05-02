import { ICatInputs } from "@/types/inputs";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import CatInput from "./CatInput";
import { useNewCategoryMutation } from "@/features/slice/category/catSlice";
import { showAuthError } from "@/utils/errors";

import styles from "@/styles/category/index.module.scss";
import spinnerStyle from "@/styles/spinner/index.module.scss";

interface Props {
  onClose: () => void;
}

const CatForm = ({ onClose }: Props) => {
  const [cat, { isLoading, isError, isSuccess, error }] =
    useNewCategoryMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<ICatInputs>();

  const onSubmit = async (data: ICatInputs) => {
    await cat({
      name: data.name,
    }).unwrap();

    resetField("name");
  };
  React.useEffect(() => {
    if (isSuccess) {
      onClose();
      toast.success("Категория добавлена");
    }
  }, [isSuccess, onClose]);

  React.useEffect(() => {
    if (isError) {
      if (error !== undefined && "status" in error) {
        showAuthError(error);
      }
      onClose();
    }
  }, [isError, error, onClose]);
  return (
    <>
      <form className={styles.category_form} onSubmit={handleSubmit(onSubmit)}>
        <CatInput register={register} errors={errors} />
        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default CatForm;
