import { ICatInputs, IResCat } from "@/types/inputs";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

import CatInput from "./CatInput";
import {
  useEditCategoryMutation,
  useNewCategoryMutation,
} from "@/features/slice/category/catSlice";
import { showAuthError } from "@/utils/errors";

import styles from "@/styles/category/index.module.scss";
import spinnerStyle from "@/styles/spinner/index.module.scss";

interface Props {
  onClose: () => void;
}

const CatForm = ({ onClose }: Props) => {
  const params = useSearchParams();
  const catParams = params.get("id");

  const [cat, { isLoading, isError, isSuccess, error }] =
    useNewCategoryMutation();

  const [
    editCat,
    {
      isLoading: isLoadingEdit,
      isError: isErrorEdit,
      isSuccess: isSuccessEdit,
      error: errorEdit,
    },
  ] = useEditCategoryMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
  } = useForm<ICatInputs>();

  const onSubmit = async (data: IResCat) => {
    if (catParams) {
      await editCat({
        id: catParams,
        name: data.name,
      }).unwrap();
    } else {
      await cat({
        name: data.name,
      }).unwrap();
    }

    resetField("name");
  };
  React.useEffect(() => {
    if (isSuccess || isSuccessEdit) {
      onClose();
      toast.success(isSuccess ? "Категория добавлена" : "Изменено");
    }
  }, [isSuccess, isSuccessEdit, onClose]);

  React.useEffect(() => {
    if (isError) {
      if (error !== undefined && "status" in error) {
        showAuthError(error);
      }
      onClose();
    }
    if (errorEdit) {
      if (errorEdit !== undefined && "status" in errorEdit) {
        showAuthError(errorEdit);
      }
      onClose();
    }
  }, [isError, isErrorEdit, error, errorEdit, onClose]);
  return (
    <>
      <form className={styles.category_form} onSubmit={handleSubmit(onSubmit)}>
        <CatInput register={register} setValue={setValue} errors={errors} />
        <button className="button_input">
          {isLoading || isLoadingEdit ? (
            <div className={spinnerStyle.spinner} />
          ) : catParams ? (
            "Изменить"
          ) : (
            "Добавить"
          )}
        </button>
      </form>
    </>
  );
};

export default CatForm;
