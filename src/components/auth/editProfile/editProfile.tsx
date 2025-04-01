import { Card, Typography } from '@/components/ui'
import s from './editProfile.module.scss'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { ProfileInfo } from '@/components/auth/editProfile/profileInfo/profileInfo.tsx'
import { useState } from 'react'
import { ChangeName, changeNameForm } from '@/components/auth/editProfile/changeName/changeName.tsx'
import { useUpdateUserDataMutation } from '@/services/auth/auth.service.ts'
import { ImagePicker } from '@/components/ui/image-picker/image-picker.tsx'

type Props = {
  name?: string
  email?: string
  src?: string
  logout?: () => void
  onLogOut?: () => void
}
export const EditProfile = ({ name, email, src, onLogOut, logout }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editProfileInfo] = useUpdateUserDataMutation()
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()

      formData.append('avatar', e.target.files[0])
      editProfileInfo(formData)
    }
  }
  const onSubmitHandler = (values: changeNameForm) => {
    if (values.name !== name) {
      const formData = new FormData()

      formData.append('name', values.name)
      editProfileInfo(formData)
      setEditMode(false)
      setError(null)
    } else {
      setError('New name should be different')
    }
  }
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Personal Information</Typography>
      <ImagePicker onChange={handleImageChange}>
        <Avatar src={src} userName={name} size={'96px'} className={s.avatar} />
      </ImagePicker>

      {!editMode && (
        <ProfileInfo
          name={name}
          email={email}
          setEditeMode={setEditMode}
          onLogOut={onLogOut}
          logout={logout}
        />
      )}
      {editMode && <ChangeName onSubmitHandler={onSubmitHandler} name={name} error={error} />}
    </Card>
  )
}
