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
  ({ userName, shortName, src, size, style, className, ...rest }, ref) => {
    const classNames = {
      container: clsx(s.avatarContainer, className),
      avatar: clsx(s.avatar, shortName ? s.shortName : ''),
      noAvatar: clsx(s.avatar, s.noAvatar, shortName ? s.shortName : ''),
    }
    const styles = { width: size, height: size, ...style }
    return (
      <div className={clsx(classNames.container)} {...rest} ref={ref}>
        {shortName && (
          <Typography variant={'Subtitle1'} as={'span'} className={s.shortName}>
            {shortName}
          </Typography>
        )}
        {src ? (
          <img style={styles} src={src} alt={'avatar img'} className={classNames.avatar} />
        ) : (
          <Typography style={styles} as={'div'} variant={'H4'} className={classNames.noAvatar}>
            {userName?.[0]}
          </Typography>
        )}
      </div>
    )
  }
)
