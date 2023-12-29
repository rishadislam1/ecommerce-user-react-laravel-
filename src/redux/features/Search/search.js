import { apiSlice } from "../api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getSearch: builder.query({
            query: (key)=>`search/${key}`
        })
    })
})

export const {useGetSearchQuery} = searchApi;