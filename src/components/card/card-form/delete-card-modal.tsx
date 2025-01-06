import { useState } from 'react'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { Button, Modal, Typography } from '@/components/ui'
import s from './delete-card-modal.module.scss'
import { Card } from '@/services/decks/decks.types.ts'
import { useDeleteCardMutation } from '@/services/cards/cards.service.ts'

type Props = {
  card: Card
}
export const DeleteCardModal = ({ card }: Props) => {
  const [open, setOpen] = useState(false)
  const { id, question } = card
  const [deleteCard] = useDeleteCardMutation()
  return (
    <>
      <TrashCan onClick={() => setOpen(true)}></TrashCan>
      <Modal open={open} title={'Delete Card'} onClose={() => setOpen(false)}>
        <div className={s.container}>
          <div className={s.textContainer}>
            <Typography variant={'Body1'}>
              Do you really want to remove {<Typography as={'span'}>{question}</Typography>}?
            </Typography>
            <Typography variant={'Body1'}>Card will be deleted irretrievable.</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button variant={'secondary'} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type={'submit'} onClick={() => deleteCard({ id })}>
              Delete Card
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
