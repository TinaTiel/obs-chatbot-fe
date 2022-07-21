import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const obsApi = createApi({
    reducerPath: 'obsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8003'}),
    endpoints: (builder) => ({
        findAllScenes: builder.query({
            query: () => `/scenes`,
        })
    })
});

export const { useFindAllScenesQuery } = obsApi;