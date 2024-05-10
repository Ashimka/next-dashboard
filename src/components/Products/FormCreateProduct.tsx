import { useCreateProductMutation } from "@/features/slice/products/productSlice";
import React, { ChangeEvent } from "react";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import { useForm } from "react-hook-form";
import { IProduct, IProductInput } from "@/types/product";
import NameInput from "./NameInput";
import DescInput from "./DescInput";
import PriceInput from "./PriceInput";
import { toast } from "react-toastify";
import { showAuthError } from "@/utils/errors";
import FileInput from "./FileInput";
import { useFileUploadMutation } from "@/features/slice/fileUpload/fileUploadSlice";

interface Props {
  onClose: () => void;
}

const FormCreateProduct = ({ onClose }: Props) => {
  const [imageUrl, setImageUrl] = React.useState<string | undefined>("");
  const [newProduct, { isLoading, isError, isSuccess, error }] =
    useCreateProductMutation();

  const [fileUpload] = useFileUploadMutation();

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
      image: imageUrl,
    }).unwrap();

    resetField("name");
    resetField("description");
    resetField("price");
  };

  const handleImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageData = new FormData();

    if (event.target.files !== null) {
      imageData.append("file", event.target.files[0]);

      const { name } = await fileUpload(imageData).unwrap();
      console.log(name);

      setImageUrl(name);
    }
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
      <form
        encType="multipart/form-data"
        className="forms"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NameInput register={register} errors={errors} />
        <DescInput register={register} errors={errors} />
        <PriceInput register={register} errors={errors} />
        <FileInput
          register={register}
          errors={errors}
          handleImage={handleImage}
        />

        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default FormCreateProduct;
