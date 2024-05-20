import { apiApp } from "@/store/apiApp";

import { IProfileUser } from "@/types/profile";

export const profileApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query<IProfileUser, void>({
      query: () => ({
        url: `/my/main`,
      }),
      providesTags: ["Profile"],
    }),
    createProfile: builder.mutation({
      query: (body: IProfileUser) => ({
        url: "/my/settings",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useUserProfileQuery, useCreateProfileMutation } = profileApi;
