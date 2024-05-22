import React from "react";
import { IProfileInputs } from "@/types/profile";

const AddressInput = ({ register, setValue, data, errors }: IProfileInputs) => {
  return (
    <>
      <label className="label" htmlFor="address">
        <input
          {...register("address", {
            required: "Введите адрес",
          })}
          type="text"
          name="address"
          id="address"
          placeholder="Адрес"
          className="input"
        />
        {errors.address && (
          <span className="error_alert">{errors.address?.message}</span>
        )}
      </label>
    </>
  );
};

export default AddressInput;
