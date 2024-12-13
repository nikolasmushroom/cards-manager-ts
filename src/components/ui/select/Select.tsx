import { ComponentPropsWithoutRef, CSSProperties, ElementRef, forwardRef } from 'react'
import * as Select from '@radix-ui/react-select'
import s from './Select.module.scss'
import clsx from 'clsx'
import { Typography } from '../typography'
import SelectIcon from '../../../common/assets/icons/SelectIcon.tsx'

export type Option = {
  value: string
  children: string
}
export type SelectProps = {
  options: Option[]
  label?: string
  placeholder?: string
  className?: string
  id?: string
  style?: CSSProperties
  selectHeight?: string
} & ComponentPropsWithoutRef<typeof Select.Root>

export const SelectCustom = ({
  options,
  disabled,
  value,
  className,
  defaultValue,
  placeholder,
  style,
  defaultOpen = false,
  onValueChange,
  onOpenChange,
  label,
  ...rest
}: SelectProps) => {
  const id = 'select-id'
  const classNames = {
    trigger: clsx(s.Trigger, s.ItemText, disabled && s.disabled),
    selectWrapper: clsx(s.selectWrapper, className),
  }
  const mappedSelectOptions = options.map(option => {
    return (
      <SelectItem value={option.value} style={style}>
        {option.children}
      </SelectItem>
    )
  })
  return (
    <Select.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      onOpenChange={onOpenChange}
      disabled={disabled}
      id={id}
      {...rest}
    >
      <div className={classNames.selectWrapper}>
        {label && (
          <Typography variant={'Body2'} as={'label'} htmlFor={id} className={s.Label}>
            {label}
          </Typography>
        )}
        <Select.Trigger disabled={disabled} style={style} className={classNames.trigger} id={id}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.icon}>
            <SelectIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.Content} position={'popper'}>
            <Select.Viewport className={s.Viewport}>
              <Select.Group>{mappedSelectOptions}</Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  )
}

type ItemProps = {
  style?: CSSProperties
} & ComponentPropsWithoutRef<typeof Select.Item>

const SelectItem = forwardRef<ElementRef<typeof Select.Item>, ItemProps>(
  ({ children, className, style, ...restProps }, ref) => {
    return (
      <Select.Item className={clsx(s.Item, className)} style={style} {...restProps} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
