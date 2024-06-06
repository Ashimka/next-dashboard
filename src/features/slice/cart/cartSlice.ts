import { apiApp } from "@/store/apiApp";
import { ICart } from "@/types/cart";

export const cartApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    addProductToCart: builder.mutation({
      query: (body: ICart) => ({
        url: "/cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useAddProductToCartMutation } = cartApi;
