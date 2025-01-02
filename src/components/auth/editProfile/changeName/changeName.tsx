import s from './ChangeName.module.scss'
import { FormTextField } from '@/components/form/form-textfield.tsx'
import {
  changeNameForm,
  useChangeName,
} from '@/components/auth/editProfile/changeName/useChangeName.ts'
import { Button } from '@/components/ui/button'
import { useEditProfileInfoMutation } from '@/services/auth/auth.service.ts'

type Props = {
  src?: string
  name?: string
  setEditMode: (value: boolean) => void
}

export const ChangeName = ({ src, name, setEditMode }: Props) => {
  const { handleSubmit, control, setError } = useChangeName()
  const [editProfileInfo] = useEditProfileInfoMutation()
  const onSubmit = (values: changeNameForm) => {
    if (values.name !== name && name && src) {
      editProfileInfo({ name: values.name, avatar: src })
      setEditMode(false)
    } else {
      setError('name', { message: 'Name should be different' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <FormTextField control={control} name={'name'} label={'Name'} />
      <Button type={'submit'} className={s.submitButton}>
        Save Changes
      </Button>
    </form>
  )
}
