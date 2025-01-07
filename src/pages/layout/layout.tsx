import { ComponentProps, CSSProperties, ElementRef, forwardRef } from 'react'
import s from './layout.module.scss'
import { Header } from '@/components/ui'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth.service.ts'
import { Outlet, useNavigate } from 'react-router-dom'
import { Progress } from '@radix-ui/themes'

type Props = {
  contentMarginTop?: CSSProperties['marginTop']
} & ComponentProps<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ contentMarginTop = '36px', children, ...rest }, ref) => {
    const { data, isLoading } = useMeQuery()
    const [logout] = useLogoutMutation()

    const navigate = useNavigate()
    const navigateToLogin = () => {
      navigate('/login')
    }
    const logoutHandler = () => {
      logout({})
        .unwrap()
        .then(() => {
          navigate('/login')
        })
    }
    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div ref={ref} {...rest} className={s.layout}>
        <Header
          isLoggedIn={!!data}
          navigateToLogin={navigateToLogin}
          userPhoto={data?.avatar}
          userName={data?.name}
          shortName={data?.name}
          userEmail={data?.email}
          logout={logoutHandler}
        />
        <Progress duration={`30s`} />
        <main className={s.main}>
          <Outlet />
        </main>
      </div>
    )
  }
)
