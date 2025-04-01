import s from './card-form.module.scss'
import { Button, Typography } from '@/components/ui'
import { FormTextField } from '@/components/form/form-textfield.tsx'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FilePicker } from '@/components/ui/file-picker'
import { z } from 'zod'

const CreateCardSchema = z.object({
  question: z.string().min(3).max(500),
  answer: z.string().min(3).max(500),
})
export type CardFormValues = z.infer<typeof CreateCardSchema>
type Props = {
  values?: {
    question?: string
    answer?: string
    questionImg?: string
    answerImg?: string
  }
  title: string
  onCancel: () => void
  onConfirm: (data: CardFormValues & { answerImg: File | null; questionImg: File | null }) => void
}

export const CardForm = ({ values, title, onConfirm, onCancel }: Props) => {
  const { control, handleSubmit, reset } = useForm<CardFormValues>({
    defaultValues: values,
  })
  const [coverForQuestion, setCoverForQuestion] = useState<File | null>(null)
  const [coverForAnswer, setCoverForAnswer] = useState<File | null>(null)
  const defaultCover = 'https://placehold.co/484x119'
  const [previewForQuestion, setPreviewForQuestion] = useState(values?.questionImg || defaultCover)
  const [previewForAnswer, setPreviewForAnswer] = useState(values?.answerImg || defaultCover)
  const onSubmit = (data: CardFormValues) => {
    onConfirm({ ...data, answerImg: coverForAnswer, questionImg: coverForQuestion })
    reset()
  }
  useEffect(() => {
    if (coverForQuestion) {
      setPreviewForQuestion(URL.createObjectURL(coverForQuestion))
    } else {
      setPreviewForQuestion(values?.questionImg || defaultCover)
    }
    if (coverForAnswer) {
      setPreviewForAnswer(URL.createObjectURL(coverForAnswer))
    } else {
      setPreviewForAnswer(values?.answerImg || defaultCover)
    }
  }, [values?.questionImg, values?.answerImg, coverForQuestion, coverForAnswer])
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container} style={{ width: '100%' }}>
        <Typography className={s.formText}>Question:</Typography>
        <FormTextField control={control} name={'question'} label={'Question'} />
        {previewForQuestion ? (
          <img
            src={previewForQuestion}
            alt="cover"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <img
            src={defaultCover}
            alt="cover"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
          />
        )}
        <FilePicker
          cover={coverForQuestion}
          title="Change question image"
          className={s.filePicker}
          onChange={e => setCoverForQuestion(e.currentTarget.files?.[0] ?? null)}
        />
      </div>
      <div className={s.container} style={{ width: '100%' }}>
        <Typography className={s.formText}>Answer:</Typography>
        <FormTextField control={control} name={'answer'} label={'Answer'} />
        {previewForAnswer ? (
          <img
            src={previewForAnswer}
            alt="cover"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <img
            src={defaultCover}
            alt="cover"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
          />
        )}
        <FilePicker
          cover={coverForAnswer}
          title="Change answer image"
          className={s.filePicker}
          onChange={e => setCoverForAnswer(e.currentTarget.files?.[0] ?? null)}
        />
        <div className={s.buttonsContainer}>
          <Button variant={'secondary'} onClick={onCancel}>
            Cancel
          </Button>
          <Button type={'submit'}>{title}</Button>
        </div>
      </div>
    </form>
  )
}
