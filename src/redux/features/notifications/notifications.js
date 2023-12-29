import { apiSlice } from "../api/apiSlice";

export const notifications = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getNotifications: builder.query({
            query: ()=> `/notification`
        }),
     
    })
})

export const {useGetNotificationsQuery, usePostNotificationsMutation} = notifications;