import { IProductInput } from "@/types/product";
import React from "react";

const NameInput = ({ register, setValue, data, errors }: IProductInput) => {
  React.useEffect(() => {
    if (setValue && data?.name) {
      setValue("name", data.name);
    }
  }, [data, setValue]);

  return (
    <>
      <label className="label" htmlFor="name">
        <input
          {...register("name", {
            required: "Введите название",
          })}
          type="text"
          name="name"
          id="name"
          placeholder="Название"
          className="input"
        />
        {errors.name && (
          <span className="error_alert">{errors.name?.message}</span>
        )}
      </label>
    </>
  );
};

export default NameInput;
