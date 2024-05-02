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
    }),
  }),
});
export const { useNewCategoryMutation } = catApi;
