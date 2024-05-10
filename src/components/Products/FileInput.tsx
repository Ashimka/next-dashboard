import { IProductInput } from "@/types/product";
import React from "react";

const FileInput = ({
  register,
  setValue,
  data,
  errors,
  handleImage,
}: IProductInput) => {
  React.useEffect(() => {
    if (setValue && data?.image) {
      setValue("image", data.image);
    }
  }, [data, setValue]);

  return (
    <>
      <label className="label" htmlFor="file">
        <input
          {...register("image", {
            required: "Нет изображения",
          })}
          type="file"
          name="file"
          id="file"
          placeholder="Выберите изображение"
          className="input"
          onChange={handleImage}
        />
        {errors.name && (
          <span className="error_alert">{errors.image?.message}</span>
        )}
      </label>
    </>
  );
};

export default FileInput;
