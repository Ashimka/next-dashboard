import { apiApp } from "@/store/apiApp";
import { ICatInputs } from "@/types/inputs";

export const catApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    newCategory: builder.mutation({
      query: (body: ICatInputs) => ({
        url: "/admins/category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CatList"],
    }),
    allCategory: builder.query<any, void>({
      query: () => ({
        url: "/admins/category",
      }),
      providesTags: ["CatList"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/admins/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CatList"],
    }),
  }),
});
export const { useNewCategoryMutation, useAllCategoryQuery, useDeleteCategoryMutation } = catApi;
