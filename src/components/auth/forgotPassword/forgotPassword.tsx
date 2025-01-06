import { FormTextField } from '@/components/form/form-textfield.tsx'
import { Button, Card, Typography } from '@/components/ui'
import s from './forgotPassword.module.scss'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Not a valid email address'),
})
export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

type Props = {
  onSubmit: (values: ForgotPasswordForm) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const { handleSubmit, control, formState, setError, clearErrors, watch } =
    useForm<ForgotPasswordForm>({
      resolver: zodResolver(forgotPasswordSchema),
      mode: 'onBlur',
    })
  const email = watch('email')

  useEffect(() => {
    if (formState.errors.email) {
      setError('email', { message: 'error' })
    }
    if (!formState.errors.email) {
      clearErrors('email')
    }
  }, [email])
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Forgot your password?</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <FormTextField control={control} name={'email'} label={'Email'} />

        <Typography variant={'Body2'} as={'p'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type="submit" variant={'primary'} className={s.buttonSubmit}>
          Send Instructions
        </Button>
        <div className={s.footerContainer}>
          <Typography variant={'Body2'} as={'p'}>
            Did you remember your password?
          </Typography>
          <Typography variant={'Link2'} as={Link} to={'/sign-up'} className={s.tryLoggingIn}>
            Try logging in
          </Typography>
        </div>
      </form>
    </Card>
  )
}
