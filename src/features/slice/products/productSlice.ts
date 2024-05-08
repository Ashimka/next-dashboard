import { apiApp } from "@/store/apiApp";

export const productApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query<any, void>({
      query: () => ({
        url: "/admins/products",
      }),
      providesTags: ["ProductsList"],
    }),
  }),
});

export const { useAllProductsQuery } = productApi;
