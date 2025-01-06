import { Page } from '@/components/ui/page'
import { ForgotPassword, ForgotPasswordForm } from '@/components/auth/forgotPassword'
import { useRecoveryPasswordMutation } from '@/services/auth/auth.service.ts'
import { useNavigate } from 'react-router-dom'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const navigate = useNavigate()
  const currentBaseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const onSubmitHandler = (data: ForgotPasswordForm) => {
    const recoveryLink = `${currentBaseUrl}/reset-password/##token##`
    recoveryPassword({
      email: data.email,
      html: `<h1>Hi, ##name##</h1><p>Click <a href="${recoveryLink}">here</a> to recover your password</p>`,
    })
      .unwrap()
      .then(() => {
        navigate(`/check-email/${data.email}`)
      })
  }
  return (
    <Page>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}
