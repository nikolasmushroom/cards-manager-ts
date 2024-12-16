import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './Dropdown.module.scss'
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  forwardRef,
  ReactNode,
  useState,
} from 'react'
import clsx from 'clsx'

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
    const classNames = {
      trigger: clsx(s.Trigger),
      content: clsx(s.Content, className),
      arrow: clsx(s.Arrow),
    }
    return (
      <DropdownMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={setOpen} {...rest}>
        <DropdownMenu.Trigger asChild className={classNames.trigger} ref={ref}>
          {trigger}
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align={align}
            style={style}
            className={classNames.content}
            sideOffset={5}
          >
            <DropdownMenu.Arrow className={classNames.arrow} />
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    )
  }
)
