import { FormTextField } from '@/components/form/form-textfield.tsx'
import { Button, Card, Typography } from '@/components/ui'
import s from './createNewPassword.module.scss'
import {
  createNewPasswordForm,
  useCreateNewPassword,
} from '@/components/auth/createNewPassword/useCreateNewPassword.ts'

type Props = {
  onSubmit: (values: createNewPasswordForm) => void
}
export const CreateNewPassword = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useCreateNewPassword()
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Forgot your password?</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <FormTextField control={control} type={'password'} name={'password'} label={'Password'} />

        <Typography variant={'Body2'} as={'p'} className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type="submit" variant={'primary'} className={s.button}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
