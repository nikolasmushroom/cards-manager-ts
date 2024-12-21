import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  password: z.string().min(3),
})
export type createNewPasswordForm = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createNewPasswordForm>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: { password: '' },
  })
  return {
    handleSubmit,
    control,
    errors,
  }
}
