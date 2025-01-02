import { ComponentPropsWithRef, useRef } from 'react'
import { Button, Typography } from '@/components/ui'
import FilePickerIcon from '@/common/icons/FilePickerIcon.tsx'
import s from './FilePicker.module.scss'

type Props = { cover: File | null; title: string } & ComponentPropsWithRef<'input'>
export const FilePicker = ({ src, onChange, cover, title, className }: Props) => {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const pickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  return (
    <div className={className}>
      {src && <img src={src.toString()} alt={''} />}
      <Button onClick={pickHandler} variant={'secondary'} className={s.coverButton}>
        <FilePickerIcon />
        <Typography variant={'Subtitle2'}>{cover ? cover.name : title}</Typography>
      </Button>
      <input
        ref={fileRef}
        type={'file'}
        className={s.hidden}
        accept={'image/*,'}
        onChange={onChange}
      />
    </div>
  )
}
