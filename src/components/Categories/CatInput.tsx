import React from "react";
import { useSearchParams } from "next/navigation";

import { ICatPageInput } from "@/types/inputs";

const CatInput = ({ register, setValue, errors }: ICatPageInput) => {
  const params = useSearchParams();

  const catParams = params.get("id");

  React.useEffect(() => {
    if (catParams && setValue) {
      setValue("name", catParams);
    }
  }, [catParams, setValue]);

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
