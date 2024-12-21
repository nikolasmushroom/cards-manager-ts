import { ComponentPropsWithoutRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from '../dropdown.module.scss'

export type DropdownItemProps = {} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropdownItem = ({
  itemID,
  onSelect,
  disabled,
  children,
  ...rest
}: DropdownItemProps) => {
  return (
    <DropdownMenu.Item className={styles.Item} {...rest} itemID={itemID} onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  )
}
