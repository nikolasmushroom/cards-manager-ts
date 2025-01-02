import { Page } from '@/components/ui/page'
import { ForgotPassword } from '@/components/auth/forgotPassword'
import { useRecoveryPasswordMutation } from '@/services/auth/auth.service.ts'
import { ForgotPasswordForm } from '@/components/auth/forgotPassword/useForgotPassword.ts'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const onSubmitHandler = (data: ForgotPasswordForm) => {
    recoveryPassword({ email: data.email })
  }
  return (
    <Page>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}
