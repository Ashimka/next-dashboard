import { IInputs } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: IInputs) => ({
        url: "/auth/login",
        method: "POST",
        body,
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
