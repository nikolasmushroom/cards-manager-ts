import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'link'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    children,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props
  const classNames = clsx(
    s.button,
    s[variant],
    { [s.fullWidth]: fullWidth },
    className,
    s[Component === 'a' ? 'asLink' : '']
  )
  return (
    <Component className={classNames} {...rest}>
      <div className={s.valueBox}>{children}</div>
    </Component>
  )
}
