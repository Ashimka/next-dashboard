import { apiApp } from "@/store/apiApp";
import { IProduct } from "@/types/product";

export const productApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query<any, void>({
      query: () => ({
        url: "/admins/products",
      }),
      providesTags: ["ProductsList"],
    }),
    createProduct: builder.mutation({
      query: (body: IProduct) => ({
        url: "/admins/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ProductsList"],
    }),
  }),
});

export const { useAllProductsQuery, useCreateProductMutation } = productApi;
