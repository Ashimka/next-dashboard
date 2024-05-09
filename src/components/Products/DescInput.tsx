import { IProductInput } from "@/types/product";
import React from "react";

const DescInput = ({ register, errors }: IProductInput) => {
  return (
    <>
      <label className="label" htmlFor="description">
        <input
          {...register("description", {
            required: "Введите описание",
          })}
          type="text"
          name="description"
          id="description"
          placeholder="Описание"
          className="input"
        />
        {errors.name && (
          <span className="error_alert">{errors.description?.message}</span>
        )}
      </label>
    </>
  );
};

export default DescInput;
