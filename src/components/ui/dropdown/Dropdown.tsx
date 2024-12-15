import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styles from './Dropdown.module.scss'
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  forwardRef,
  ReactNode,
  useState,
} from 'react'

export type DropdownProps = {
  children?: ReactNode
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
  align?: 'start' | 'center' | 'end'
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>
export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Trigger>, DropdownProps>(
  ({ style, defaultOpen, className, trigger, children, align = 'start', ...rest }, ref) => {
    const [open, setOpen] = useState(false)
    return (
      <DropdownMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={setOpen} {...rest}>
        <DropdownMenu.Trigger asChild className={styles.Trigger} ref={ref}>
          {trigger}
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align={align}
            style={style}
            className={styles.Content}
            sideOffset={5}
          >
            <DropdownMenu.Arrow className={styles.Arrow} />
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)
