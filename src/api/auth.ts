"use client";

import { ISignInFn } from "@/types/auth";
import { createEffect } from "effector";
import axiosApi from "./axiosClient";
import { toast } from "react-toastify";

export const signInFn = createEffect(
  async ({ url, phone, password }: ISignInFn) => {
    const { data } = await axiosApi.post(url, {
      phone,
      password,
    });

    toast.success("Вход выполнен успешно!");

    return data;
  }
);
