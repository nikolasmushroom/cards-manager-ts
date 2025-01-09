import * as Radio from '@radix-ui/react-radio-group'
import s from './radioGroup.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Typography } from '../typography'

export type RadioType = {
  value: string | number
  label: string
  id?: string
}
export type RadioGroupProps = {
  radios: RadioType[]
} & ComponentPropsWithoutRef<typeof Radio.Root>
export const RadioGroup = ({
  disabled,
  onValueChange,
  defaultValue,
  className,
  radios,
  value,
  ...rest
}: RadioGroupProps) => {
  const classNames = {
    radioWrapper: clsx(s.radioWrapper, disabled && s.disabled),
    label: clsx(s.Label, disabled && s.disabled),
    item: clsx(s.Item, disabled && s.disabled),
    indicator: clsx(s.Indicator, disabled && s.disabled),
    root: clsx(s.Root, className),
  }
  const mappedRadios = radios.map((r, i) => {
    const id = r.id ? r.id : i.toString()
    return (
      <div className={s.radioContainer}>
        <div key={id} className={classNames.radioWrapper}>
          <Radio.Item className={classNames.item} value={r.value.toString()} id={id}>
            <Radio.Indicator className={classNames.indicator} />
          </Radio.Item>
        </div>
        <Typography variant={'Body2'} className={classNames.label} as={'label'} htmlFor={id}>
          {r.label}
        </Typography>
      </div>
    )
  })
  return (
    <Radio.Root
      value={value}
      className={classNames.root}
      disabled={disabled}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      aria-label="View density"
      {...rest}
    >
      {mappedRadios}
    </Radio.Root>
  )
}
