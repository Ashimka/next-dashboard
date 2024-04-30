import { apiApp } from "@/store/apiApp";
import { IInputs } from "@/types/auth";

export const authApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: IInputs) => ({
        url: "/auth/login",
        method: "POST",
        body,
        credentials: "include",
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
