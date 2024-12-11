import * as Radio from '@radix-ui/react-radio-group'
import s from './RadioGroup.module.scss'
import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

export type RadioType = {
  value: string
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
  radios,
  value,
  ...rest
}: RadioGroupProps) => {
  const classNames = {
    radioWrapper: clsx(s.radioWrapper, disabled && s.disabled),
    label: clsx(s.Label, disabled && s.disabled),
    item: clsx(s.Item, disabled && s.disabled),
    indicator: clsx(s.Indicator, disabled && s.disabled),
  }
  const mappedRadios = radios.map((r, i) => {
    const id = r.id ? r.id : i.toString()
    return (
      <div className={s.radioContainer}>
        <div key={id} className={classNames.radioWrapper}>
          <Radio.Item className={classNames.item} value={r.value} id={id}>
            <Radio.Indicator className={classNames.indicator} />
          </Radio.Item>
        </div>
        <label className={classNames.label} htmlFor={id}>
          {r.label}
        </label>
      </div>
    )
  })
  return (
    <Radio.Root
      value={value}
      className={s.Root}
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
