import { IProductInput } from "@/types/product";
import React from "react";

const PriceInput = ({ register, setValue, data, errors }: IProductInput) => {
  React.useEffect(() => {
    if (setValue && data?.price) {
      setValue("price", data.price);
    }
  }, [data, setValue]);

  return (
    <>
      <label className="label" htmlFor="price">
        <input
          {...register("price", {
            required: "Введите цену",
          })}
          type="number"
          name="price"
          id="price"
          placeholder="Цена"
          className="input"
        />
        {errors.name && (
          <span className="error_alert">{errors.price?.message}</span>
        )}
      </label>
    </>
  );
};

export default PriceInput;
