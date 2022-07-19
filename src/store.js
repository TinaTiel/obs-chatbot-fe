import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { groupsApi } from './services/groups';
import { commandsApi } from './services/commands';

export const store = configureStore({
  reducer: {
    [groupsApi.reducerPath]: groupsApi.reducer,
    [commandsApi.reducerPath]: commandsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groupsApi.middleware).concat(commandsApi.middleware),
});

setupListeners(store.dispatch);