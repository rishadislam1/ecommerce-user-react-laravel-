import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        postContact: builder.mutation({
            query: (data)=>({
                url: '/postcontact',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {usePostContactMutation} = contactApi;