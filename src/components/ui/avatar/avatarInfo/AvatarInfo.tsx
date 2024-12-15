import s from './AvatarInfo.module.scss'
import { Typography } from '../../typography'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

export type AvatarInfoProps = {
  name: string
  caption: string
} & ComponentPropsWithoutRef<'div'>
export const AvatarInfo = ({ className, name, caption }: AvatarInfoProps) => {
  return (
    <div className={clsx(s.avatarInfoContainer, className)}>
      <Typography variant={'Subtitle2'} className={s.avatarName}>
        {name}
      </Typography>
      <Typography variant={'Caption'} className={s.avatarCaption}>
        {caption}
      </Typography>
    </div>
  )
}
