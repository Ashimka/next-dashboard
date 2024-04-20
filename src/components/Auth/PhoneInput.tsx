import { IAuthPageInput } from "@/types/auth";
import React from "react";

import styles from "@/styles/auth/index.module.scss";

const PhoneInput = ({ register, errors }: IAuthPageInput) => {
  return (
    <>
      <label htmlFor="phone" className={styles.form__label}>
        <input
          {...register("phone", {
            required: "Введите номер телефона",
            minLength: 12,
            pattern: {
              value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
              message: "Вводите цифры",
            },
          })}
          className={styles.form__input}
          type="text"
          placeholder="Телефон +79999999999"
          maxLength={12}
        />
        {errors.phone && (
          <span className={styles.error_alert}>{errors.phone?.message}</span>
        )}
        {errors.phone && errors.phone.type === "minLength" && (
          <span className={styles.error_alert}>Минимум 12 символа!</span>
        )}
      </label>
    </>
  );
};

export default PhoneInput;
