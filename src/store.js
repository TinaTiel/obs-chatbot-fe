import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { groupsApi } from './services/groups';
import { commandsApi } from './services/commands';
import { obsApi } from './services/obs';

export const store = configureStore({
  reducer: {
    [groupsApi.reducerPath]: groupsApi.reducer,
    [commandsApi.reducerPath]: commandsApi.reducer,
    [obsApi.reducerPath]: obsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(groupsApi.middleware)
      .concat(commandsApi.middleware)
      .concat(obsApi.middleware),
});

setupListeners(store.dispatch);