import React from "react";

import { useAllCategoryQuery } from "@/features/slice/category/catSlice";

import { IResCat } from "@/types/inputs";
import { IProductInput } from "@/types/product";

const SelectCategory = ({
  register,
  setValue,
  data,
  errors,
  onChange,
}: IProductInput) => {
  const { data: category } = useAllCategoryQuery();

  React.useEffect(() => {
    if (setValue && data?.categoryId) {
      setValue("categoryId", data.categoryId);
    }
  }, [data, setValue]);

  return (
    <>
      <select
        {...register("categoryId", { required: "Выберите категорию" })}
        name="category"
        id="cat"
        className="input"
        onChange={onChange}
      >
        <option disabled selected>
          Выберите категорию
        </option>
        {category &&
          category.map((cat: IResCat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
      </select>
      {errors.categoryId && (
        <span className="error_alert">{errors.categoryId?.message}</span>
      )}
    </>
  );
};

export default SelectCategory;
