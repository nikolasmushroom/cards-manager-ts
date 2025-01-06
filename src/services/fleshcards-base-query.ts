import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')
    if (headers.get('Authorization')) {
      return headers
    }
    if (token) {
      return headers.set('Authorization', `Bearer ${token}`)
    }
  },
})
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const refreshResult = (await baseQuery(
          {
            url: '/v2/auth/refresh-token',
            method: 'POST',
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
          api,
          extraOptions
        )) as any
        if (refreshToken) {
          if (refreshResult.data) {
            localStorage.setItem('accessToken', refreshResult.data.accessToken.trim())
            localStorage.setItem('refreshToken', refreshResult.data.refreshToken.trim())

            result = await baseQuery(args, api, extraOptions)
          }
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
