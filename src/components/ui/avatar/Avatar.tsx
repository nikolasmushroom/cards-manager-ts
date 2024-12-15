import s from './Avatar.module.scss'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Typography } from '../typography'

export type AvatarProps = {
  userName?: string
  showName?: boolean
  src?: ComponentPropsWithoutRef<'img'>['src']
  size?: ComponentPropsWithoutRef<'img'>['width']
} & ComponentPropsWithoutRef<'div'>
export const Avatar = forwardRef<ElementRef<'div'>, AvatarProps>(
  ({ userName, showName, src, size, className, ...rest }, ref) => {
    const classNames = {
      avatar: s.avatar,
      noAvatar: clsx(s.avatar, s.noAvatar),
    }
    return (
      <div className={clsx(s.avtarContainer, className)} {...rest} ref={ref}>
        {showName && (
          <Typography variant={'Subtitle1'} as={'span'} className={s.userName}>
            {userName}
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
