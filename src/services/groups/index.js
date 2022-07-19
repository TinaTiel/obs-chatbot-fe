import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

export const groupsApi = createApi({
    reducerPath: 'groupsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8001'}),
    endpoints: (builder) => ({
        findAllGroups: builder.query({
            query: () => `/groups`,
        }),
        saveGroup: builder.mutation({
            query: ({id, group}) => {
                console.log({id, group})
                return {
                    url: `/groups/${id ? id : uuidv4()}`,
                    method: 'PUT',
                    body: group
                }
            }
        })
    })
});

export const { useFindAllGroupsQuery, useFindGroupsByIdQuery, useSaveGroupMutation } = groupsApi;