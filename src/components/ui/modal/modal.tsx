import s from './modal.module.scss'
import { ComponentPropsWithRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { Card } from '../card'
import CrossIcon from '../../../common/icons/CrossIcon.tsx'
import { Typography } from '../typography'

type Props = {
  open: boolean
  onClose?: () => void
  title?: string
  className?: string
} & ComponentPropsWithRef<typeof Dialog.Root>

export const Modal = ({ title, onClose, children, className, open, ...rest }: Props) => {
  const classNames = {
    overlay: clsx(s.Overlay),
    content: clsx(s.Content),
  }
  return (
    <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.overlay} />
        <Dialog.Content className={classNames.content}>
          <div className={s.Content}>
            <Card>
              {title && (
                <header className={s.Title}>
                  <Typography as={'h3'} variant={'H3'}>
                    {title}
                  </Typography>
                  <CrossIcon className={s.icon} onClick={onClose} />
                </header>
              )}
              <div>{children}</div>
            </Card>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
