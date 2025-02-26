import { baseApi } from '@/services/baseApi.ts';
export const authService = baseApi.injectEndpoints({
    endpoints: build => ({
        me: build.query({
            query: () => ({
                url: '/v1/auth/me',
                arguments: {},
            }),
        }),
        signUp: build.mutation({
            query: ({ email, password }) => ({
                url: '/v1/auth/sign-up',
                method: 'POST',
                arguments: { email, password },
            }),
        }),
        login: build.mutation({
            query: ({ email, password }) => ({
                url: '/v1/auth/login',
                method: 'POST',
                arguments: { email, password },
            }),
        }),
        editProfileInfo: build.mutation({
            query: ({ avatar, name }) => ({
                url: '/v1/auth/me',
                method: 'PATCH',
                arguments: { avatar, name },
            }),
        }),
    }),
});
export const { useMeQuery, useEditProfileInfoMutation, useSignUpMutation, useLoginMutation } = authService;
