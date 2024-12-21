import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const SignInSchema = z.object({
  email: z.string().trim().email('Not a valid email address'),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})
export type SignInForm = z.infer<typeof SignInSchema>
export const useSignIn = () => {
  const { handleSubmit, control } = useForm<SignInForm>({ resolver: zodResolver(SignInSchema) })
  return {
    handleSubmit,
    control,
  }
}
