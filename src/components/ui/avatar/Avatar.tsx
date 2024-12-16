import s from './Avatar.module.scss'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Typography } from '../typography'

export type AvatarProps = {
  userName?: string
  shortName?: string
  src?: ComponentPropsWithoutRef<'img'>['src']
  size?: ComponentPropsWithoutRef<'img'>['width']
} & ComponentPropsWithoutRef<'div'>
export const Avatar = forwardRef<ElementRef<'div'>, AvatarProps>(
  ({ userName, shortName, src, size, className, ...rest }, ref) => {
    const classNames = {
      container: clsx(s.avatarContainer, className),
      avatar: s.avatar,
      noAvatar: clsx(s.avatar, s.noAvatar),
    }
    return (
      <div className={clsx(classNames.container)} {...rest} ref={ref}>
        {shortName && (
          <Typography variant={'Subtitle1'} as={'span'} className={s.shortName}>
            {shortName}
          </Typography>
        )}
        {src ? (
          <img
            width={size}
            height={size}
            src={src}
            alt={'avatar img'}
            className={classNames.avatar}
          />
        ) : (
          <Typography as={'div'} variant={'H4'} className={classNames.noAvatar}>
            {userName?.[0]}
          </Typography>
        )}
      </div>
    )
  }
)
