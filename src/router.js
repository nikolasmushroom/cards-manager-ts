import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, } from 'react-router-dom';
import { SignInPage } from '@/pages/login/signInPage.tsx';
import { ForgotPasswordPage } from '@/pages/login/forgotPasswordPage.tsx';
import { SignUpPage } from '@/pages/login/signUpPage.tsx';
import { CheckEmailPage } from '@/pages/login/checkEmailPage.tsx';
import { CreateNewPasswordPage } from '@/pages/login/createNewPasswordPage.tsx';
import { DecksPage } from '@/pages/cards/decks';
import { Profile } from '@/pages/profile';
const publicRoutes = [
    {
        path: '/login',
        element: _jsx(SignInPage, {}),
    },
    {
        path: '/sign-up',
        element: _jsx(SignUpPage, {}),
    },
    {
        path: '/forgot-password',
        element: _jsx(ForgotPasswordPage, {}),
    },
    {
        path: '/check-email',
        element: _jsx(CheckEmailPage, {}),
    },
    {
        path: '/create-new-password',
        element: _jsx(CreateNewPasswordPage, {}),
    },
    {
        path: '/profile',
        element: _jsx(Profile, {}),
    },
];
const privateRoutes = [
    {
        path: '/',
        element: _jsx(DecksPage, {}),
    },
];
function PrivateRoutes() {
    const isAuthenticated = true;
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login" });
}
const router = createBrowserRouter([
    { element: _jsx(PrivateRoutes, {}), children: privateRoutes },
    ...publicRoutes,
    {
        path: '*',
        element: _jsx("h1", { children: "404" }),
    },
]);
export const Router = () => {
    return _jsx(RouterProvider, { router: router });
};
