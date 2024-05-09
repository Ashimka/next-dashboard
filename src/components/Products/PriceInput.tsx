import { IProductInput } from "@/types/product";
import React from "react";

const PriceInput = ({ register, errors }: IProductInput) => {
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
