import { ComponentPropsWithoutRef } from 'react'
import s from './Card.module.scss'
import clsx from 'clsx'

export type CardProps = {} & ComponentPropsWithoutRef<'div'>
export const Card = ({ style, children, className, ...rest }: CardProps) => {
  const classNames = {
    card: clsx(s.card, className),
  }
  return (
    <div style={style} className={classNames.card} {...rest}>
      {children}
    </div>
  )
}
