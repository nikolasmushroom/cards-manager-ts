import { baseApi } from '@/services/baseApi.ts'
import {
  AuthMeInterface,
  CreateNewAccount,
  EditProfileArgs,
  LoginResponse,
  MeResponse,
  RecoveryPasswordArgs,
  ResetPasswordArgs,
} from '@/services/auth/auth.serviceTypes.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: build => ({
    me: build.query<AuthMeInterface, void>({
      query: () => ({
        url: '/v1/auth/me',
        arguments: {},
      }),
      providesTags: ['Auth'],
    }),
    signUp: build.mutation<void, CreateNewAccount>({
      query: args => ({
        url: '/v1/auth/sign-up',
        method: 'POST',
        body: args,
      }),
    }),
    login: build.mutation<LoginResponse, CreateNewAccount>({
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled
        if (!data) {
          return
        }
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
      },
      query: args => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: args,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: build.mutation({
      query: () => ({
        url: '/v2/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        const patchResult = dispatch(
          authService.util.updateQueryData('me', undefined, () => {
            return {} as MeResponse
          })
        )
        try {
          const res = (await queryFulfilled) as any
          if (res.meta.response.status === 204) {
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
          }
          dispatch(authService.util.resetApiState())
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Auth'],
    }),
    editProfileInfo: build.mutation<MeResponse, EditProfileArgs>({
      query: args => ({
        url: '/v1/auth/me',
        method: 'PATCH',
        body: args,
      }),
    }),
    recoveryPassword: build.mutation<MeResponse, RecoveryPasswordArgs>({
      query: args => ({
        url: '/v1/auth/recover-password',
        method: 'POST',
        body: args,
      }),
    }),
    resetPassword: build.mutation<MeResponse, ResetPasswordArgs>({
      query: ({ password, token }) => ({
        url: `/v1/auth/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})
export const {
  useMeQuery,
  useEditProfileInfoMutation,
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useRecoveryPasswordMutation,
  useResetPasswordMutation,
} = authService
