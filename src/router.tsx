import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { SignInPage } from '@/pages/login/signInPage.tsx'
import { ForgotPasswordPage } from '@/pages/login/forgotPasswordPage.tsx'
import { SignUpPage } from '@/pages/login/signUpPage.tsx'
import { CheckEmailPage } from '@/pages/login/checkEmailPage.tsx'
import { CreateNewPasswordPage } from '@/pages/login/createNewPasswordPage.tsx'
import { DecksPage } from '@/pages/cards/decks'
import { Profile } from '@/pages/profile'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/check-email',
    element: <CheckEmailPage />,
  },
  {
    path: '/create-new-password',
    element: <CreateNewPasswordPage />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]
const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DecksPage />,
  },
]

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  { element: <PrivateRoutes />, children: privateRoutes },
  ...publicRoutes,
  {
    path: '*',
    element: <h1>404</h1>,
  },
])
export const Router = () => {
  return <RouterProvider router={router} />
}
