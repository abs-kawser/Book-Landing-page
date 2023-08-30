// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
 
//https://book-server-y9ds.onrender.com/
//https://book-server-main.vercel.app/
export const bookSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://book-server-main.vercel.app/api/v1"}),
  tagTypes: ["books", "post", "update", "delete"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (serchValue: string) =>
        `/QueryGetAllBook?pageNo=1&perPage=10&searchKeyword=${serchValue}`,
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/GetSingleBook/${id}`,
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: `/create-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    updateBook: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/BookUpdate/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/DeleteSingleBook/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["delete"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookSlice;
