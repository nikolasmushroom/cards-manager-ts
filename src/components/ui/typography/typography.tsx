import { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'
import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: T
  variant?:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'Body1'
    | 'Body2'
    | 'Subtitle1'
    | 'Subtitle2'
    | 'Caption'
    | 'Overline'
    | 'Link1'
    | 'Link2'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'div'>(props: TypographyProps<T>) => {
  const { as: Component = 'div', className, children, variant = 'H4', ...rest } = props
  const classNames = clsx(s.typography, s[variant], className)
  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}
