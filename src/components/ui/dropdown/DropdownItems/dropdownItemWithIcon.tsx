import { ComponentPropsWithoutRef, ReactNode } from 'react'
import clsx from 'clsx'
import styles from '../dropdown.module.scss'
import { Typography } from '@/components/ui'
import { DropdownItem } from '@/components/ui/dropdown/DropdownItems/dropdownItem.tsx'

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
