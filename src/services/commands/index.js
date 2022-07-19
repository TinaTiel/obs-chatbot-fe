import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

export const commandsApi = createApi({
    reducerPath: 'commandsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002'}),
    endpoints: (builder) => ({
        findAllCommands: builder.query({
            query: () => `/commands`,
        }),
        saveCommand: builder.mutation({
            query: ({id, command}) =>({
                url: `/commands/${id ? id : uuidv4()}`,
                method: 'PUT',
                body: command
            })
        })
    })
});

export const { useFindAllCommandsQuery, useFindCommandsByIdQuery, useSaveCommandMutation } = commandsApi;