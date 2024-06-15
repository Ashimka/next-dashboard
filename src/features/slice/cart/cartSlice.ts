import { apiApp } from "@/store/apiApp";
import { ICart, IUpdateCart } from "@/types/cart";

export const cartApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    addProductToCart: builder.mutation({
      query: (body: ICart) => ({
        url: "/my/cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    allProductsInCart: builder.query<ICart[], void>({
      query: () => ({
        url: "/my/cart",
      }),
      providesTags: ["Cart"],
    }),
    updateProductsInCart: builder.mutation({
      query: (body: IUpdateCart) => ({
        url: "/my/cart",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddProductToCartMutation,
  useAllProductsInCartQuery,
  useUpdateProductsInCartMutation,
} = cartApi;
