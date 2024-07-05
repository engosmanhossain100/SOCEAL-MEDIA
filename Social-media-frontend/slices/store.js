import { configureStore } from '@reduxjs/toolkit'
import userSlices from './userSlices.js';
import { authApi } from './authApi.js';


const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userSlices,
  },
  middleware: (getDefaultMiddlware) =>getDefaultMiddlware().concat(authApi.middleware),
})

export default store;