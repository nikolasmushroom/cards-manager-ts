import { ComponentProps, CSSProperties, ElementRef, forwardRef } from 'react'
import s from './layout.module.scss'
import { Header } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service.ts'

type Props = {
  contentMarginTop?: CSSProperties['marginTop']
} & ComponentProps<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ contentMarginTop = '36px', children, ...rest }, ref) => {
    const { data } = useMeQuery()
    return (
      <div ref={ref} {...rest} className={s.layout}>
        <Header
          isLoggedIn={!!data}
          userPhoto={data?.avatar}
          userName={data?.name}
          shortName={data?.name}
          userEmail={data?.email}
        />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
