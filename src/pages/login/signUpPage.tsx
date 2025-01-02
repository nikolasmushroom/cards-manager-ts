import { Page } from '@/components/ui/page'
import { SignUp } from '@/components/auth/signUp'
import { useSignUpMutation } from '@/services/auth/auth.service.ts'
import { CreateNewAccount } from '@/services/auth/auth.serviceTypes.ts'
import { useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()
  const onSubmitHandler = async ({ password, email }: CreateNewAccount) => {
    let res = await signUp({ password, email })
    if (res.data) {
      navigate('/login')
    }
  }
  return (
    <Page>
      <SignUp onSubmit={onSubmitHandler} />
    </Page>
  )
}
