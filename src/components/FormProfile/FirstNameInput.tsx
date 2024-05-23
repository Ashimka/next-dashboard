import { IProfileInputs } from "@/types/profile";
import React from "react";

const FirstNameInput = ({
  register,
  setValue,
  data,
  errors,
}: IProfileInputs) => {
  React.useEffect(() => {
    if (setValue && data?.firstName) {
      setValue("firstName", data.firstName);
    }
  }, [data, setValue]);
  return (
    <>
      <label className="label" htmlFor="firstName">
        <input
          {...register("firstName", {
            required: "Введите имя",
          })}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Имя"
          className="input"
        />
        {errors.firstName && (
          <span className="error_alert">{errors.firstName?.message}</span>
        )}
      </label>
    </>
  );
};

export default FirstNameInput;
