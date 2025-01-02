import { Page } from '@/components/ui/page'
import { CreateNewPassword } from '@/components/auth/createNewPassword'
import { useResetPasswordMutation } from '@/services/auth/auth.service.ts'
import { useParams } from 'react-router-dom'
import { createNewPasswordForm } from '@/components/auth/createNewPassword/useCreateNewPassword.ts'

export const CreateNewPasswordPage = () => {
  const { token } = useParams()
  const [resetPassword] = useResetPasswordMutation()
  const onSubmitHandler = (data: createNewPasswordForm) => {
    resetPassword({ password: data.password, token: token ?? '' })
  }
  return (
    <Page>
      <CreateNewPassword onSubmit={onSubmitHandler} />
    </Page>
  )
}
