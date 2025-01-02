import { FormTextField } from '@/components/form/form-textfield.tsx'
import { Button, Card, Typography } from '@/components/ui'
import s from './signUp.module.scss'
import { Link } from 'react-router-dom'
import { SignUpForm, useSignUp } from '@/components/auth/signUp/useSignUp.ts'

type Props = {
  onSubmit: (values: SignUpForm) => void
}

export const SignUp = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useSignUp()
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Sign Up</Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <FormTextField control={control} name={'email'} label={'Email'} />
        <FormTextField type={'password'} control={control} name={'password'} label={'Password'} />
        <FormTextField
          type={'password'}
          control={control}
          name={'confirmPassword'}
          label={'Confirm Password'}
        />

        <Button type="submit" variant={'primary'} className={s.button}>
          Sign Up
        </Button>
        <div className={s.footerContainer}>
          <Typography variant={'Body2'} as={'p'}>
            Already have an account??
          </Typography>
          <Typography variant={'Link2'} as={Link} to={'/login'} className={s.signIn}>
            Sign In
          </Typography>
        </div>
      </form>
    </Card>
  )
}
