import { IInputs } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";

import styles from "@/styles/auth/index.module.scss";
import spinnerStyles from "@/styles/spinner/index.module.scss";
import { signInFn } from "@/api/auth";
import { showAuthError } from "@/utils/errors";

const LoginForm = () => {
  const [spinner, setSpinner] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true);

      await signInFn({
        url: "/auth/login",
        phone: data.phone,
        password: data.password,
      });

      resetField("phone");
      resetField("password");
    } catch (error) {
      showAuthError(error);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <PhoneInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button className={styles.button}>
          {spinner ? <div className={spinnerStyles.spinner} /> : "Войти"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
