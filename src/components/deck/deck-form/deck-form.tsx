import { FormTextField } from '@/components/form/form-textfield.tsx'
import { useForm } from 'react-hook-form'
import { FilePicker } from '@/components/ui/file-picker'
import { Button } from '@/components/ui'
import s from './deck-form.module.scss'
import { FormCheckbox } from '@/components/form/form-checkbox.tsx'
import { useEffect, useState } from 'react'
import z from 'zod'

const newDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(5000),
})
export type FormValues = z.infer<typeof newDeckSchema>
type Props = {
  values?: {
    name: string
    isPrivate?: boolean
    cover?: string | null
  }
  defaultValues?: FormValues & { cover?: null | string }
  onConfirm: (data: FormValues & { cover?: File | null }) => void
  title: string
}
export const DeckForm = ({ values, onConfirm, title }: Props) => {
  const [cover, setCover] = useState<File | null>(null)
  const defaultCover = 'https://placehold.co/484x119'
  const [preview, setPreview] = useState<string>(values?.cover || defaultCover)
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: values?.name || '',
      isPrivate: values?.isPrivate || false,
    },
  })
  useEffect(() => {
    if (cover) {
      setPreview(URL.createObjectURL(cover))
    } else {
      setPreview(values?.cover || defaultCover)
    }
    return () => {
      URL.revokeObjectURL(preview)
    }
  }, [values?.cover, cover])
  const onSubmit = (data: FormValues) => {
    onConfirm({ ...data, cover })
    reset()
  }
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {preview && (
        <img
          className={s.cover}
          src={preview}
          alt={'cover'}
          style={{
            maxWidth: '100%',
            maxHeight: '200px',
            objectFit: 'contain',
          }}
        />
      )}
      {!preview && (
        <img
          className={s.cover}
          src={defaultCover}
          alt={'cover'}
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
          }}
        />
      )}

      <FormTextField name={'name'} control={control} label={'Name deck'} />
      <FilePicker
        cover={cover}
        title={'Upload Image'}
        className={s.filePicker}
        onChange={e => setCover(e.currentTarget.files?.[0] ?? null)}
      />
      <FormCheckbox
        control={control}
        name={'isPrivate'}
        label={'Private deck'}
        className={s.checkBox}
      />
      <div className={s.buttonsContainer}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button type={'submit'}>{title}</Button>
      </div>
    </form>
  )
}
