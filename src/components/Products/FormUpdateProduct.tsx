import React, { ChangeEvent } from "react";
import NameInput from "./NameInput";
import DescInput from "./DescInput";
import PriceInput from "./PriceInput";

import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "@/features/slice/products/productSlice";

import { showAuthError } from "@/utils/errors";

import { IProduct } from "@/types/product";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import { toast } from "react-toastify";
import FileInput from "./FileInput";
import Image from "next/image";
import {
  useDeleteFileMutation,
  useFileUploadMutation,
} from "@/features/slice/fileUpload/fileUploadSlice";

interface Props {
  dataProduct: IProduct;
  onClose: () => void;
}

const FormUpdateProduct = ({ dataProduct, onClose }: Props) => {
  const [imageUrl, setImageUrl] = React.useState<string | undefined>(
    dataProduct?.image
  );

  const [updateProduct, { isLoading, isError, isSuccess, error }] =
    useUpdateProductMutation();
  const [fileUpload] = useFileUploadMutation();
  const [fileDelete] = useDeleteFileMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
  } = useForm<IProduct>();

  const handleImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const imageData = new FormData();

    if (event.target.files !== null) {
      imageData.append("file", event.target.files[0]);

      const { name } = await fileUpload(imageData).unwrap();

      setImageUrl(name);
    }
  };

  const handleDeleteImage = async () => {
    if (imageUrl) {
      await fileDelete({ filename: imageUrl });
      setImageUrl("");
    }
  };

  const onSubmit = async (data: IProduct) => {
    await updateProduct({
      id: dataProduct?.id,
      name: data.name,
      description: data.description,
      price: +data.price,
      image: imageUrl,
    });

    resetField("name");
    resetField("description");
    resetField("price");
    resetField("image");
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
            setValue={setValue}
            data={dataProduct}
            errors={errors}
            handleImage={handleImage}
          />
        )}

        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Изменить"}
        </button>
      </form>
    </>
  );
};

export default FormUpdateProduct;
