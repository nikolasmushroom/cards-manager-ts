import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const signUpSchema = z.object({
  email: z.string().trim().email('Not a valid email address'),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
  confirmPassword: z.string().min(3),
})
export type SignUpForm = z.infer<typeof signUpSchema>
export const useSignUp = () => {
  const { handleSubmit, control } = useForm<SignUpForm>({ resolver: zodResolver(signUpSchema) })
  return {
    handleSubmit,
    control,
  }
}
