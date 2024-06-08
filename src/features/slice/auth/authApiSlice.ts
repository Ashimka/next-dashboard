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
      invalidatesTags: ["Cart", "Profile"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["Cart", "Profile"],
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
