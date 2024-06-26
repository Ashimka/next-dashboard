import { apiApp } from "@/store/apiApp";
import { IProduct, IProductUpdate } from "@/types/product";

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
    deleteProduct: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/admins/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProductsList"],
    }),
    updateProduct: builder.mutation({
      query: (data: IProductUpdate) => ({
        url: `/admins/products/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ProductsList"],
    }),
  }),
});

export const {
  useAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
