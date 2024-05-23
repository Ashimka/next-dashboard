import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useUpdateProfileMutation } from "@/features/slice/profile/profileSlice";

import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import AddressInput from "./AddressInput";

import { IProfileUser } from "@/types/profile";
import spinnerStyle from "@/styles/spinner/index.module.scss";

const UpdateFormProfile = (dataProfile: IProfileUser) => {
  const [updateProfile, { isLoading, isSuccess }] = useUpdateProfileMutation();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    resetField,
  } = useForm<IProfileUser>();

  const onSubmit = async (data: IProfileUser) => {
    await updateProfile({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    }).unwrap();

    resetField("firstName");
    resetField("lastName");
    resetField("address");
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Данные обновлены!");
      router.push("/my/main");
    }
  }, [isSuccess, router]);
  return (
    <>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <FirstNameInput
          register={register}
          setValue={setValue}
          data={dataProfile}
          errors={errors}
        />
        <LastNameInput
          register={register}
          setValue={setValue}
          data={dataProfile}
          errors={errors}
        />
        <AddressInput
          register={register}
          setValue={setValue}
          data={dataProfile}
          errors={errors}
        />
        <button className="button_input">
          {isLoading ? <div className={spinnerStyle.spinner} /> : "Добавить"}
        </button>
      </form>
    </>
  );
};

export default UpdateFormProfile;
