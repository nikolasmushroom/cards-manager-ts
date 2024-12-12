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
  selectHeight?: string
} & ComponentPropsWithoutRef<typeof Select.Root>

export const SelectCustom = ({
  options,
  disabled,
  value,
  className,
  defaultValue,
  placeholder,
  defaultOpen = false,
  onValueChange,
  onOpenChange,
  selectHeight = '36px',
  label,
  ...rest
}: SelectProps) => {
  const id = 'select-id'
  const classNames = {
    trigger: clsx(s.Trigger, disabled && s.disabled),
    selectWrapper: clsx(s.selectWrapper, className),
  }
  const style = {
    '--select-height': selectHeight, // Прокидываем высоту через CSS-переменную
  } as CSSProperties
  const mappedSelectOptions = options.map(option => {
    return (
      <SelectItem value={option.value} selectHeight={selectHeight}>
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
      <div className={classNames.selectWrapper} style={style}>
        {label && (
          <Typography variant={'Body2'} as={'label'} htmlFor={id} className={s.Label}>
            {label}
          </Typography>
        )}
        <Select.Trigger
          disabled={disabled}
          className={classNames.trigger}
          id={id}
          aria-label="Food"
        >
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
  selectHeight?: string
} & ComponentPropsWithoutRef<typeof Select.Item>
const SelectItem = forwardRef<ElementRef<typeof Select.Item>, ItemProps>(
  ({ children, className, selectHeight, ...restProps }, ref) => {
    return (
      <Select.Item
        className={clsx(s.Item, className)}
        style={{ height: selectHeight }}
        {...restProps}
        ref={ref}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
