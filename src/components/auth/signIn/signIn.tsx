import { FormTextField } from '@/components/form/form-textfield.tsx'
import { FormCheckbox } from '@/components/form/form-checkbox.tsx'
import s from './signIn.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { SignInForm, useSignIn } from '@/components/auth/signIn/useSignIn.ts'

type Props = {
  onSubmit: (values: SignInForm) => void
  error: string | null
  setValidationError: (error: string | null) => void
}

export const SignIn = ({ onSubmit, error, setValidationError }: Props) => {
  const navigate = useNavigate()
  const { setError, control, handleSubmit } = useSignIn()
  useEffect(() => {
    setValidationError(null)
    if (error) {
      setError('email', { message: error })
      setError('password', { message: error })
    }
  }, [error])

  const navigateToForgotPassword = () => {
    navigate('/forgot-password')
  }
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Sign In</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <FormTextField control={control} name={'email'} label={'Email'} />
        <FormTextField type={'password'} control={control} name={'password'} label={'Password'} />
        <FormCheckbox
          control={control}
          name="rememberMe"
          label={'Remember me'}
          className={s.checkbox}
        />
        <Typography
          variant={'Body2'}
          onClick={navigateToForgotPassword}
          className={s.forgotPassword}
        >
          Forgot Password?
        </Typography>
        <Button type="submit" variant={'primary'} className={s.buttonSubmit}>
          Sign In
        </Button>
        <div className={s.footerContainer}>
          <Typography variant={'Body2'} as={'p'}>
            Don't have an account?
          </Typography>
          <Typography variant={'Link2'} as={Link} to={'/sign-up'} className={s.signUp}>
            Sign Up
          </Typography>
        </div>
      </form>
    </Card>
  )
}
