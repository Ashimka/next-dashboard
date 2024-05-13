import React, { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import { useCreateProductMutation } from "@/features/slice/products/productSlice";
import {
  useDeleteFileMutation,
  useFileUploadMutation,
} from "@/features/slice/fileUpload/fileUploadSlice";

import NameInput from "./NameInput";
import DescInput from "./DescInput";
import PriceInput from "./PriceInput";
import SelectCategory from "./SelectCategory";
import FileInput from "./FileInput";

import { showAuthError } from "@/utils/errors";
import { IProduct } from "@/types/product";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import Image from "next/image";

interface Props {
  onClose: () => void;
}

const FormCreateProduct = ({ onClose }: Props) => {
  const [imageUrl, setImageUrl] = React.useState<string | undefined>("");
  const [newProduct, { isLoading, isError, isSuccess, error }] =
    useCreateProductMutation();

  const [fileUpload] = useFileUploadMutation();
  const [fileDelete] = useDeleteFileMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    resetField,
  } = useForm<IProduct>();

  const onSubmit = async (data: IProduct) => {
    await newProduct({
      name: data.name,
      description: data.description,
      price: +data.price,
      image: imageUrl,
      categoryId: +data.categoryId,
    }).unwrap();

    resetField("name");
    resetField("description");
    resetField("price");
    resetField("categoryId");
  };

  const handleImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageData = new FormData();

    if (event.target.files !== null) {
      imageData.append("file", event.target.files[0]);

      const { name } = await fileUpload(imageData).unwrap();

      setImageUrl(name);
    }
  };

  const handleDeleteImage = async () => {
    await fileDelete({ filename: imageUrl });
    setImageUrl("");
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
        <Controller
          control={control}
          name="categoryId"
          render={({ field: { onChange } }) => {
            return (
              <SelectCategory
                register={register}
                errors={errors}
                onChange={onChange}
              />
            );
          }}
        />

        {imageUrl ? (
          <div className="out_image">
            <Image
              src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_URL}/${imageUrl}`}
              alt="картинка продукта"
              width={150}
              height={120}
              priority={true}
            />
            <span
              className="out_image_delete"
              title="Удалить?"
              onClick={handleDeleteImage}
            >
              &#10060;
            </span>
          </div>
        ) : (
          <FileInput
            register={register}
            errors={errors}
            handleImage={handleImage}
          />
        )}

        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default FormCreateProduct;
