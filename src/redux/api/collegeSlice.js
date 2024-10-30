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
    getSingleCollege: builder.query({
      query: (id) => {
        return {
          url: `/colleges/${id}`,
          method: "GET",
        }
      }
    })
  }),
});


export const {useGetCollegesQuery, useGetSingleCollegeQuery} = collegeSlice