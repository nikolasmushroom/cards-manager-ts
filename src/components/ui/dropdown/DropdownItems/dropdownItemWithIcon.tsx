import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { DropdownItem } from './dropdownItem.tsx'
import clsx from 'clsx'
import styles from '../dropdown.module.scss'
import { Typography } from '../../typography'

export type DropdownItemWithIconProps = {
  caption: string
  icon: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownItem>
export const DropdownItemWithIcon = ({
  itemID,
  onSelect,
  disabled,
  className,
  icon,
  caption,
  ...rest
}: DropdownItemWithIconProps) => {
  const classNames = {
    item: clsx(styles.Item, className),
  }
  return (
    <DropdownItem
      itemID={itemID}
      onSelect={onSelect}
      disabled={disabled}
      {...rest}
      className={classNames.item}
    >
      {icon}
      <Typography as={'p'} variant={'Caption'}>
        {caption}
      </Typography>
    </DropdownItem>
  )
}
