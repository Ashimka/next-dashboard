import { apiApp } from "@/store/apiApp";
import { ICart } from "@/types/cart";

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
  }),
});

export const { useAddProductToCartMutation, useAllProductsInCartQuery } =
  cartApi;
