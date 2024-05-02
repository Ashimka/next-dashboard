import { ICatPageInput } from "@/types/inputs";
import React from "react";

const CatInput = ({ register, errors }: ICatPageInput) => {
  return (
    <>
      <label className="label" htmlFor="cat">
        <input
          {...register("name", {
            required: "Введите категорию",
          })}
          type="text"
          name="name"
          id="cat"
          placeholder="Категория"
          className="input"
        />
        {errors.name && (
          <span className="error_alert">{errors.name?.message}</span>
        )}
      </label>
    </>
  );
};

export default CatInput;
