import * as RadixCheckbox from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Typography } from '../typography'
import CheckedIcon from '../../../common/icons/CheckedIcon.tsx'

export type CheckboxProps = {
  label?: string
  onCheckedChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    {
      onCheckedChange,
      checked,
      defaultChecked,
      id = 'c1',
      disabled,
      label,
      className,
      required,
      ...rest
    },
    ref
  ) => {
    const classNames = {
      container: clsx(s.container, className),
      checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
      checkedIcon: clsx(s.checkedIcon, disabled && s.disabled),
      label: clsx(s.Label, disabled && s.disabled),
      indicator: clsx(s.Indicator),
    }
    return (
      <div className={classNames.container}>
        <div className={classNames.checkboxWrapper}>
          <RadixCheckbox.Root
            ref={ref}
            className={s.Root}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            checked={checked}
            disabled={disabled}
            id={id}
            {...rest}
          >
            <RadixCheckbox.Indicator className={classNames.indicator}>
              {checked && <CheckedIcon className={classNames.checkedIcon} />}
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </div>

        {label && (
          <Typography as={'label'} variant={'Body2'} className={classNames.label} htmlFor={id}>
            {label}
          </Typography>
        )}
      </div>
    )
  }
)
