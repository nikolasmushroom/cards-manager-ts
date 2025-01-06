import s from './card-modal.module.scss'
import { Button, Typography } from '@/components/ui'
import { FormTextField } from '@/components/form/form-textfield.tsx'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { FilePicker } from '@/components/ui/file-picker'
import { z } from 'zod'

const CreateDeckSchema = z.object({
  question: z.string().min(3).max(500),
  answer: z.string().min(3).max(500),
  questionImg: z.string().optional(),
  answerImg: z.string().optional(),
})
export type CardFormValues = z.infer<typeof CreateDeckSchema>
type Props = {
  values?: {
    question?: string
    answer?: string
    questionImg?: string
    answerImg?: string
  }
  title: string
  onCancel: () => void
  onConfirm: (data: CardFormValues) => void
}

export const CardForm = ({ values, title, onConfirm, onCancel }: Props) => {
  const { control, handleSubmit, reset } = useForm<CardFormValues>({
    defaultValues: values,
  })
  const [coverForQuestion, setCoverForQuestion] = useState<File | null>(null)
  const [coverForAnswer, setCoverForAnswer] = useState<File | null>(null)
  const defaultCover = 'https://placehold.co/484x119'
  const onSubmit = (data: CardFormValues) => {
    onConfirm(data)
    reset()
  }
  const previewForQuestion = coverForQuestion
    ? URL.createObjectURL(coverForQuestion)
    : values?.questionImg
  const previewForAnswer = coverForAnswer ? URL.createObjectURL(coverForAnswer) : values?.answerImg
  useEffect(() => {
    if (values?.questionImg) {
      setCoverForQuestion(null)
    }
    if (values?.answerImg) {
      setCoverForAnswer(null)
    }
  }, [values?.questionImg, values?.answerImg])
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <Typography className={s.formText}>Question:</Typography>
        <FormTextField control={control} name={'question'} label={'Question'} />
        {previewForQuestion ? (
          <img src={previewForQuestion} alt="cover" />
        ) : (
          <img src={defaultCover} alt="cover" />
        )}
        <FilePicker
          cover={coverForQuestion}
          title="Change question image"
          className={s.filePicker}
        />
      </div>
      <div className={s.container}>
        <Typography className={s.formText}>Answer:</Typography>
        <FormTextField control={control} name={'answer'} label={'Answer'} />
        {previewForAnswer ? (
          <img src={previewForAnswer} alt="cover" />
        ) : (
          <img src={defaultCover} alt="cover" />
        )}
        <FilePicker cover={coverForAnswer} title="Change answer image" className={s.filePicker} />
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
