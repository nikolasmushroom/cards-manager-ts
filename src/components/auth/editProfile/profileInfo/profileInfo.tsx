import s from './profileInfo.module.scss'

import { Typography } from '@/components/ui/typography'
import Edit from '@/common/icons/Edit.tsx'
import Logout from '@/common/icons/Logout.tsx'
import { Button } from '@/components/ui'

type Props = {
  name?: string
  email?: string
  logout?: () => void
  setEditeMode: (value: boolean) => void
  onLogOut?: () => void
}

export const ProfileInfo = ({ name, email, setEditeMode, logout }: Props) => {
  const onEditModHandler = () => setEditeMode(true)

  return (
    <>
      <Typography variant="H3" as="h3" className={s.nameContainer}>
        <Typography variant={'H2'}>{name}</Typography>
        <Edit onClick={onEditModHandler} />
      </Typography>

      <Typography variant="Body2" className={s.email}>
        {email}
      </Typography>
      <Button type="submit" variant={'secondary'} className={s.button} onClick={logout}>
        <Logout />
        <Typography variant={'Subtitle2'} as={'p'}>
          Logout
        </Typography>
      </Button>
    </>
  )
}
