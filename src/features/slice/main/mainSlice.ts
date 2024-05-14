import { apiApp } from "@/store/apiApp";

export const mainApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    allProductsMain: builder.query<any, void>({
      query: () => ({
        url: "/",
      }),
      providesTags: ["ProductsList"],
    }),
  }),
});

export const { useAllProductsMainQuery } = mainApi;
