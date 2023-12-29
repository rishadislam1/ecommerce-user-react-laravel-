import { apiSlice } from "../api/apiSlice";

export const navMenuApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getMenu: builder.query({
            query: ()=>'/allcategory'
        })
    })
})

export const {useGetMenuQuery} = navMenuApi;