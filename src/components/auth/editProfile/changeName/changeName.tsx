import s from './ChangeName.module.scss'
import { FormTextField } from '@/components/form/form-textfield.tsx'
import {
  changeNameForm,
  useChangeName,
} from '@/components/auth/editProfile/changeName/useChangeName.ts'
import { Button } from '@/components/ui/button/Button.tsx'

type Props = {
  name?: string
  setEditMode: (value: boolean) => void
}

export const ChangeName = ({ name, setEditMode }: Props) => {
  const { handleSubmit, control, setError } = useChangeName()
  const onSubmit = (values: changeNameForm) => {
    if (values.name !== name) {
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
