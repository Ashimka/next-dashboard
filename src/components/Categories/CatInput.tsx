import { ICatPageInput } from "@/types/inputs";
import React from "react";

const CatInput = ({ register, errors }: ICatPageInput) => {
  return (
    <>
      <label className="label" htmlFor="cat">
        <input
          {...register("category", {
            required: "Введите категорию",
          })}
          type="text"
          name="category"
          id="cat"
          placeholder="Категория"
          className="input"
        />
        {errors.category && (
          <span className="error_alert">{errors.category?.message}</span>
        )}
      </label>
    </>
  );
};

export default CatInput;
