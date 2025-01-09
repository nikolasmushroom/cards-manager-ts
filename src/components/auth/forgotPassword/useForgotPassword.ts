import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Not a valid email address'),
})

export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>
export const useForgotPassword = () => {
  const { handleSubmit, control, formState, setError, clearErrors } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onBlur',
  })
  return {
    handleSubmit,
    control,
    formState,
    setError,
    clearErrors,
  }
}
