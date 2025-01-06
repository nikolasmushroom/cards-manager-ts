import { useState } from 'react'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { Button, Modal, Typography } from '@/components/ui'
import s from './delete-deck-modal.module.scss'
import { useDeleteDeckMutation } from '@/services/decks/decks.service.ts'
import { Deck } from '@/services/decks/decks.types.ts'

type Props = {
  deck: Deck
}
export const DeleteDeckModal = ({ deck }: Props) => {
  const [open, setOpen] = useState(false)
  const { id, name } = deck
  const [deleteDeck] = useDeleteDeckMutation()
  return (
    <>
      <TrashCan onClick={() => setOpen(true)}></TrashCan>
      <Modal open={open} title={'Delete Deck'} onClose={() => setOpen(false)}>
        <div className={s.container}>
          <div className={s.textContainer}>
            <Typography variant={'Body1'}>
              Do you really want to remove{' '}
              {
                <Typography variant={'Subtitle1'} as={'span'}>
                  {name}
                </Typography>
              }
              ?
            </Typography>
            <Typography variant={'Body1'}>All cards will be deleted.</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button variant={'secondary'} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type={'submit'} onClick={() => deleteDeck({ id })}>
              Delete Deck
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
