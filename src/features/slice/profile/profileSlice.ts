import { apiApp } from "@/store/apiApp";

import { IProfileUpdate, IProfileUser } from "@/types/profile";

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
        url: "/my/main",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (body: IProfileUser) => ({
        url: "/my/settings",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useUserProfileQuery,
  useCreateProfileMutation,
  useUpdateProfileMutation,
} = profileApi;
