import React from "react";

import spinnerStyle from "@/styles/spinner/index.module.scss";
import { useCreateProfileMutation } from "@/features/slice/profile/profileSlice";
import FirstNameInput from "./FirstNameInput";
import { useForm } from "react-hook-form";
import { IProfileUser } from "@/types/profile";

const FormProfile = () => {
  const [dataProfile, { isLoading }] = useCreateProfileMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IProfileUser>();
  return (
    <>
      <form className="forms">
        <FirstNameInput register={register} errors={errors} />
        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default FormProfile;
