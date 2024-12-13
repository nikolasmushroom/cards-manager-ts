import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './Dropdown.module.scss'
import { ComponentPropsWithoutRef, CSSProperties, ReactNode, useState } from 'react'

export type DropdownProps = {
  children?: ReactNode
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
  align?: 'start' | 'center' | 'end'
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>
export const Dropdown = ({
  style,
  defaultOpen,
  className,
  trigger,
  children,
  align = 'end',
  ...rest
}: DropdownProps) => {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={setOpen} {...rest}>
      <DropdownMenu.Trigger asChild className={styles.Trigger}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align={align} style={style} className={styles.Content} sideOffset={5}>
          {children}
          <DropdownMenu.Arrow className={styles.Arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
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
