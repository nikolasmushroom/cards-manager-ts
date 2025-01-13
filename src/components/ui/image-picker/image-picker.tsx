import { ComponentPropsWithoutRef, ReactNode, useRef } from 'react'
import s from './image-picker.module.scss'

type Props = {
  children?: ReactNode
  onChange?: () => void
} & ComponentPropsWithoutRef<'input'>
export const ImagePicker = ({ children, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handlePick = () => {
    inputRef.current?.click()
  }
  return (
    <>
      <input type="file" ref={inputRef} accept="image/*" onChange={onChange} className={s.hidden} />
      <div className={s.imagePickerContainer} onClick={handlePick}>
        {children}
      </div>
    </>
  )
}
