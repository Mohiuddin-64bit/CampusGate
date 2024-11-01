import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://campus-gate-backend.vercel.app/api",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["College", "Admission", "User"],
});
