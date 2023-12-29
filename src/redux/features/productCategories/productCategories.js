import { apiSlice } from "../api/apiSlice";

export const productCategories = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getCategories: builder.query({
            query: (category)=> `/productlistbycategory/${category}`
        }),
        getSubCategories: builder.query({
            query: ({category,subcategory})=>`/productlistbysubcategory/${category}/${subcategory}`
        })
    })
})

export const {useGetCategoriesQuery, useGetSubCategoriesQuery} = productCategories;