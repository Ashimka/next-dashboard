import { apiApp } from "@/store/apiApp";

export const fileUploadApi = apiApp.injectEndpoints({
  endpoints: (builder) => ({
    fileUpload: builder.mutation({
      query: (file) => ({
        url: "/upload",
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const { useFileUploadMutation } = fileUploadApi;
