import { apiApp } from "@/store/apiApp";

import { IProfileUser } from "@/types/profile";

export const profileApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.query<IProfileUser, void>({
      query: () => ({
        url: `/profile`,
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useUserProfileQuery } = profileApi;
