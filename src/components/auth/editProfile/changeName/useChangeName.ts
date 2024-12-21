import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const changeNameSchema = z.object({
  name: z.string().trim(),
})
export type changeNameForm = z.infer<typeof changeNameSchema>
export const useChangeName = () => {
  const { handleSubmit, control, setError } = useForm<changeNameForm>({
    resolver: zodResolver(changeNameSchema),
  })
  return {
    handleSubmit,
    control,
    setError,
  }
}
