import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/services/baseApi.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

// @ts-ignore
window.store = store
