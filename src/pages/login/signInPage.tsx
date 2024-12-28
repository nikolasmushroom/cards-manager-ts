import { Page } from '@/components/ui/page'
import { SignIn } from '@/components/auth/signIn'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.service.ts'
import { CreateNewAccount } from '@/services/auth/auth.serviceTypes.ts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const { data } = useMeQuery()
  const navigate = useNavigate()

  const onSubmitHandler = async ({ password, email }: CreateNewAccount) => {
    await login({ password, email })
  }
  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  return (
    <Page>
      <SignIn onSubmit={onSubmitHandler} />
    </Page>
  )
}
