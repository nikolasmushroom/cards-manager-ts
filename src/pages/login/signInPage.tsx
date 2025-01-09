import { Page } from '@/components/ui/page'
import { SignIn } from '@/components/auth/signIn'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.service.ts'
import { CreateNewAccount } from '@/services/auth/auth.serviceTypes.ts'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SignInPage = () => {
  const [login] = useLoginMutation()
  const [error, setError] = useState<string | null>(null)
  const { data } = useMeQuery()
  const navigate = useNavigate()
  const onSubmitHandler = async ({ password, email }: CreateNewAccount) => {
    await login({ password, email })
      .unwrap()
      .catch(e => {
        if (e.status === 401 && e.data.message === 'Invalid credentials') {
          setError('Not valid email or password')
        }
      })
  }
  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])
  return (
    <Page>
      <SignIn onSubmit={onSubmitHandler} setValidationError={setError} error={error} />
    </Page>
  )
}
