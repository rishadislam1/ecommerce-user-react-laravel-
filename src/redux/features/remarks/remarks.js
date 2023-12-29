import { apiSlice } from "../api/apiSlice";

export const remarksApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getRemarks: builder.query({
            query: (remark)=> `/productlistbyremark/${remark}`
        })
    })
})

export const {useGetRemarksQuery} = remarksApi;