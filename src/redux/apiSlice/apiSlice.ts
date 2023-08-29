import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ass-5-server.vercel.app",
    // baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["books", "comments"],
  endpoints: () => ({}),
});
