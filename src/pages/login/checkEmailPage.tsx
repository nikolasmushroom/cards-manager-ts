import { Page } from '@/components/ui/page'
import { CheckEmail } from '@/components/auth/checkEmail'
import { useParams } from 'react-router-dom'

export const CheckEmailPage = () => {
  const { email } = useParams()
  return (
    <Page>
      <CheckEmail email={email} link={'/login'} />
    </Page>
  )
}
