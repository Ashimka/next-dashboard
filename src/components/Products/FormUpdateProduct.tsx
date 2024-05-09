import React from "react";
import NameInput from "./NameInput";
import DescInput from "./DescInput";
import PriceInput from "./PriceInput";

import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "@/features/slice/products/productSlice";

import { showAuthError } from "@/utils/errors";

import { IProduct } from "@/types/product";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import { toast } from "react-toastify";

interface Props {
  dataProduct: IProduct;
  onClose: () => void;
}

const FormUpdateProduct = ({ dataProduct, onClose }: Props) => {
  const [updateProduct, { isLoading, isError, isSuccess, error }] =
    useUpdateProductMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
  } = useForm<IProduct>();

  const onSubmit = async (data: IProduct) => {
    await updateProduct({
      id: dataProduct.id,
      name: data.name,
      description: data.description,
      price: data.price,
    });

    resetField("name");
    resetField("description");
    resetField("price");
  };

  React.useEffect(() => {
    if (isSuccess) {
      onClose();
      toast.success("Изменено");
    }
  }, [isSuccess, onClose]);

  React.useEffect(() => {
    if (isError) {
      if (error !== undefined && "status" in error) {
        showAuthError(error);
      }
      onClose();
    }
  }, [error, isError, onClose]);

  return (
    <>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <NameInput
          register={register}
          setValue={setValue}
          data={dataProduct}
          errors={errors}
        />
        <DescInput
          register={register}
          setValue={setValue}
          data={dataProduct}
          errors={errors}
        />
        <PriceInput
          register={register}
          setValue={setValue}
          data={dataProduct}
          errors={errors}
        />

        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Изменить"}
        </button>
      </form>
    </>
  );
};

export default FormUpdateProduct;
