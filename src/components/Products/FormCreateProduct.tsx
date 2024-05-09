import { useCreateProductMutation } from "@/features/slice/products/productSlice";
import React from "react";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import { useForm } from "react-hook-form";
import { IProduct, IProductInput } from "@/types/product";
import NameInput from "./NameInput";
import DescInput from "./DescInput";
import PriceInput from "./PriceInput";
import { toast } from "react-toastify";
import { showAuthError } from "@/utils/errors";

interface Props {
  onClose: () => void;
}

const FormCreateProduct = ({ onClose }: Props) => {
  const [newProduct, { isLoading, isError, isSuccess, error }] =
    useCreateProductMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IProduct>();

  const onSubmit = async (data: IProduct) => {
    await newProduct({
      name: data.name,
      description: data.description,
      price: +data.price,
    }).unwrap();

    resetField("name");
    resetField("description");
    resetField("price");
  };

  React.useEffect(() => {
    if (isSuccess) {
      onClose();
      toast.success("Добавлено");
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
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <NameInput register={register} errors={errors} />
        <DescInput register={register} errors={errors} />
        <PriceInput register={register} errors={errors} />

        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default FormCreateProduct;
