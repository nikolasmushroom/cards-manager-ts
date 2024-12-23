import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: async (args, api, extraOptions) => {
    return await fetchBaseQuery({
      baseUrl: 'https://api.flashcards.andrii.es',
      prepareHeaders: headers => {
        headers.append('x-auth-skip', 'true')
      },
    })(args, api, extraOptions)
  },
  endpoints: () => ({}),
})
