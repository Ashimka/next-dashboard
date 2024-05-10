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
    deleteFile: builder.mutation({
      query: (file) => ({
        url: "/upload",
        method: "DELETE",
        body: file,
      }),
    }),
  }),
});

export const { useFileUploadMutation, useDeleteFileMutation } = fileUploadApi;
