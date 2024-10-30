import { baseApi } from "./baseApi";

export const collegeSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getColleges: builder.query({
      query: () => {
        return {
          url: "/colleges",
          method: "GET",
        };
      },
    }),
  }),
});


export const {useGetCollegesQuery} = collegeSlice