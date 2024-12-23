import { Page } from '@/components/ui/page'
import { SignIn } from '@/components/auth/signIn'
import { useLoginMutation } from '@/services/auth/authService.ts'
import { CreateNewAccount } from '@/services/auth/authServiceTypes.ts'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const onSubmitHandler = ({ password, email }: CreateNewAccount) => {
    login({ password, email })
  }
  return (
    <Page>
      <SignIn onSubmit={onSubmitHandler} />
    </Page>
  )
}
