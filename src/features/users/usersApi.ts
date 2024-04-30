import { apiApp } from "@/store/apiApp";

export const usersApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
