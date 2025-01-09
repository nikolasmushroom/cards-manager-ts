import s from './header.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import Logo from '../../../common/icons/LogoImage'
import { Button } from '../button'
import { Typography } from '../typography'
import { Avatar, Dropdown } from '@/components/ui'
import { DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/DropdownItems'
import { AvatarInfo } from '@/components/ui/avatar/avatarInfo'
import ProfileIcon from '@/common/icons/ProfileIcon.tsx'
import Logout from '@/common/icons/Logout.tsx'

export type HeaderProps = {
  isLoggedIn?: boolean
  userPhoto?: string
  userName?: string
  userEmail?: string
  shortName?: string
  navigateToLogin?: () => void
  logout: () => void
} & ComponentPropsWithoutRef<'header'>
export const Header = ({
  isLoggedIn,
  shortName,
  navigateToLogin,
  userName,
  userPhoto,
  userEmail,
  logout,
  ...rest
}: HeaderProps) => {
  return (
    <header className={s.headerWrapper} {...rest}>
      <div className={s.content}>
        <Logo className={s.logo} onClick={navigateToLogin} />
        {!isLoggedIn ? (
          <Button variant={'secondary'} as={'a'}>
            <Typography as={'p'} variant={'Subtitle2'}>
              Sign In
            </Typography>
          </Button>
        ) : (
          <Dropdown
            align={'end'}
            trigger={<Avatar src={userPhoto} userName={userName} shortName={shortName} />}
          >
            <>
              <DropdownItem>
                <Avatar src={userPhoto} userName={userName} />
                <AvatarInfo name={userName} caption={userEmail} />
              </DropdownItem>
              <DropdownItemWithIcon icon={<ProfileIcon />} caption={'My Profile'} />
              <DropdownItemWithIcon icon={<Logout />} caption={'Sign Out'} onClick={logout} />
            </>
          </Dropdown>
        )}
      </div>
    </header>
  )
}
