import { Card, Typography } from '@/components/ui'
import s from './editProfile.module.scss'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { ProfileInfo } from '@/components/auth/editProfile/profileInfo/profileInfo.tsx'
import { useState } from 'react'
import { ChangeName } from '@/components/auth/editProfile/changeName/changeName.tsx'

type Props = {
  name?: string
  email?: string
  src?: string
  onLogOut?: () => void
}
export const EditProfile = ({ name, email, src, onLogOut }: Props) => {
  const [editMode, setEditMode] = useState(false)
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Personal Information</Typography>
      <Avatar src={src} userName={name} size={'96px'} className={s.avatar} />
      {!editMode ? (
        <ProfileInfo name={name} email={email} setEditeMode={setEditMode} onLogOut={onLogOut} />
      ) : (
        <ChangeName src={src} name={name} setEditMode={setEditMode} />
      )}
    </Card>
  )
}
