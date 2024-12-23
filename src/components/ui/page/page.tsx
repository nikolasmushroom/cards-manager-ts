import { ComponentPropsWithoutRef, CSSProperties } from 'react'
import s from './page.module.scss'
import clsx from 'clsx'

type Props = ComponentPropsWithoutRef<'div'> & {
  marginTop?: CSSProperties['marginTop']
}
export const Page = ({ className, children, style, marginTop = '33px', ...rest }: Props) => {
  const classes = clsx(className, s.container)
  const styles: CSSProperties = { marginTop: marginTop, ...style }
  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  )
}
