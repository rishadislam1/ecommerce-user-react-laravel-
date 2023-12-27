import { apiSlice } from "../api/apiSlice";

export const visitorApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getIp: builder.query({
            query: ()=>
                '/getvisitor'
            
        })
    })
});

export const {useGetIpQuery} = visitorApi;