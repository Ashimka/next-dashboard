import React from "react";
import { useForm } from "react-hook-form";

import { useCreateProfileMutation } from "@/features/slice/profile/profileSlice";

import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import AddressInput from "./AddressInput";

import { IProfileUser } from "@/types/profile";

import spinnerStyle from "@/styles/spinner/index.module.scss";

interface Props {
  setOpenForm: (open: boolean) => void;
}

const FormProfile = ({ setOpenForm }: Props) => {
  const [dataProfile, { isLoading }] = useCreateProfileMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IProfileUser>();

  const onSubmit = async (data: IProfileUser) => {
    await dataProfile({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    }).unwrap();

    resetField("firstName");
    resetField("lastName");
    resetField("address");

    setOpenForm(false);
  };
  return (
    <>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <FirstNameInput register={register} errors={errors} />
        <LastNameInput register={register} errors={errors} />
        <AddressInput register={register} errors={errors} />
        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default FormProfile;
