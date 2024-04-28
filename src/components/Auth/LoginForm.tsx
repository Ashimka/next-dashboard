import { IInputs } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";

import styles from "@/styles/auth/index.module.scss";
import spinnerStyles from "@/styles/spinner/index.module.scss";
import { showAuthError } from "@/utils/errors";
import { useLoginUserMutation } from "@/store/slice/auth/authApiSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { setUser } from "@/store/slice/apiSlice";

const LoginForm = () => {
  const [authUser, { data: loginData, isLoading, isError, isSuccess, error }] =
    useLoginUserMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const [login, setLogin] = React.useState("");

  const onSubmit = async (data: IInputs) => {
    await authUser({
      phone: data.phone,
      password: data.password,
    }).unwrap();

    setLogin(data.phone);

    resetField("phone");
    resetField("password");
  };

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ login, token: loginData.accessToken }));
      toast.success("Success login!");
    }
  }, [isSuccess, dispatch, login, loginData]);

  React.useEffect(() => {
    if (isError) {
      if (error !== undefined && "status" in error) {
        showAuthError(error);
      }
    }
  }, [isError, error]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>ВХОД</h2>
        <PhoneInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button className={styles.button}>
          {isLoading ? <div className={spinnerStyles.spinner} /> : "Войти"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
