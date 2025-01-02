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
import { Profile } from '@/pages/profile'
import { DeckPage } from '@/pages/deck-page/deck-page.tsx'
import { DecksPage } from '@/pages/decks-page/ui/decks-page.tsx'
import { LearnPage } from '@/pages/learn-page/learn-page.tsx'
import { Layout } from '@/components/ui/layout/layout.tsx'

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
    path: '/recover-password/:token',
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
  {
    path: '/decks/:deckId',
    element: <DeckPage />,
  },
  {
    path: '/decks/:deckId/learn',
    element: <LearnPage />,
  },
]

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ element: <PrivateRoutes />, children: privateRoutes }, ...publicRoutes],
  },
])
export const Router = () => {
  return <RouterProvider router={router} />
}
