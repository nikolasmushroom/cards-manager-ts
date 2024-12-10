import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, useState } from 'react'
import s from './TextField.module.scss'
import clsx from 'clsx'
import { Typography } from '../typography'
import ClosedEye from '../../../common/assets/icons/ClosedEye.tsx'
import OpenEye from '../../../common/assets/icons/OpenEye.tsx'
import Search from '../../../common/assets/icons/Search.tsx'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  containerProps?: ComponentPropsWithoutRef<'div'>
  labelProps?: ComponentPropsWithoutRef<'label'>
  label?: string
  search?: boolean
  errorMessage?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = ({
  containerProps,
  label,
  labelProps,
  onChange,
  onValueChange,
  placeholder,
  search,
  type,
  className,
  errorMessage,
  ...rest
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const classNames = {
    root: clsx(s.root, containerProps?.className),
    label: clsx(s.label, labelProps?.className),
    textFieldContainer: clsx(s.textFieldContainer),
    field: clsx(s.field, errorMessage && s.error, search && s.hasFieldIcon, className),
    error: clsx(s.error),
    fieldIcon: clsx(s.fieldIcon),
  }
  const finalType = getFinalType(type, showPassword)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.currentTarget.value)
  }
  return (
    <div className={classNames.root}>
      {label && (
        <Typography as={'label'} variant={'Body2'} className={classNames.label}>
          {label}
        </Typography>
      )}
      <div className={classNames.textFieldContainer}>
        {search && <Search className={classNames.fieldIcon} />}
        <input
          className={classNames.field}
          onChange={handleChange}
          placeholder={placeholder}
          type={finalType}
          {...rest}
        />
        {type === 'password' && (
          <button
            className={s.showPassword}
            type={'button'}
            onClick={() => setShowPassword(prevState => !prevState)}
          >
            {showPassword ? <ClosedEye /> : <OpenEye />}
          </button>
        )}
        {errorMessage && (
          <Typography variant={'Caption'} className={s.error}>
            {errorMessage}
          </Typography>
        )}
      </div>
    </div>
  )
}
export const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
