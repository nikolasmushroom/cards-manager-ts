import s from './ChangeName.module.scss'
import { FormTextField } from '@/components/form/form-textfield.tsx'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect } from 'react'

type Props = {
  error?: string | null
  name?: string
  onSubmitHandler: (values: changeNameForm) => void
}
const changeNameSchema = z.object({
  name: z.string().trim(),
  avatar: z.string().trim(),
})
export type changeNameForm = z.infer<typeof changeNameSchema>
export const ChangeName = ({ name, onSubmitHandler, error }: Props) => {
  const { handleSubmit, control, setError, clearErrors } = useForm<changeNameForm>({
    defaultValues: { name: name, avatar: '' },
    resolver: zodResolver(changeNameSchema),
  })
  useEffect(() => {
    if (error) {
      setError(`name`, { type: 'custom', message: error })
    }
    if (!error) {
      clearErrors()
    }
  }, [error])

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
      <FormTextField control={control} name={'name'} label={'Name'} />
      <Button type={'submit'} className={s.submitButton}>
        Save Changes
      </Button>
    </form>
  )
}
