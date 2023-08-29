import { api } from "./apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (searchTerm) => `/books${searchTerm ? "?q=" + searchTerm : ""}`,
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["comments"],
    }),
    postBook: builder.mutation({
      query: ({ data, url, method }) => ({
        url: url,
        method: method,
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/comment/${id}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["comments"],
    }),
    getcomment: builder.query({
      query: (id) => `/comment/${id}`,
      //   providesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  usePostCommentMutation,
} = productApi;
