import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import Logo from '@/common/icons/LogoImage.tsx'
import { Button } from '../button'
import { Typography } from '../typography'
import { Avatar } from '../avatar/avatar.tsx'
export type HeaderProps = {
  isLoggedIn?: boolean
  userPhoto?: string
  userName?: string
  shortName?: string
} & ComponentPropsWithoutRef<'header'>
export const Header = ({ isLoggedIn, shortName, userName, userPhoto, ...rest }: HeaderProps) => {
  return (
    <header className={s.headerWrapper} {...rest}>
      <div className={s.content}>
        <Logo className={s.logo} />
        {!isLoggedIn ? (
          <Button variant={'secondary'} as={'a'} href={'https://it-incubator.io/'}>
            <Typography as={'p'} variant={'Subtitle2'}>
              Sign In
            </Typography>
          </Button>
        ) : (
          <Avatar src={userPhoto} userName={userName} shortName={shortName} />
        )}
      </div>
    </header>
  )
}
