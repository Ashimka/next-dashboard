import React from "react";
import { IProfileInputs } from "@/types/profile";

const LastNameInput = ({
  register,
  setValue,
  data,
  errors,
}: IProfileInputs) => {
  React.useEffect(() => {
    if (setValue && data?.lastName) {
      setValue("lastName", data.lastName);
    }
  }, [data, setValue]);
  return (
    <>
      <label className="label" htmlFor="lastName">
        <input
          {...register("lastName", {
            required: "Введите фамилию",
          })}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Фамилия"
          className="input"
        />
        {errors.lastName && (
          <span className="error_alert">{errors.lastName?.message}</span>
        )}
      </label>
    </>
  );
};

export default LastNameInput;
