import { ReactNode, useState, useEffect } from 'react'
import { Button, Modal, Typography } from '@/components/ui'
import s from './delete-deck-modal.module.scss'
import { useDeleteDeckMutation } from '@/services/decks/decks.service.ts'
import { Deck } from '@/services/decks/decks.types.ts'
import { useNavigate } from 'react-router-dom'
type Props = {
  deck: Deck
  children?: ReactNode
  openModal?: boolean
  onOpenModal?: (openModal?: boolean) => void
}
export const DeleteDeckModal = ({ deck, children, openModal, onOpenModal }: Props) => {
  const [open, setOpen] = useState(false)
  const { id, name } = deck
  const navigate = useNavigate()
  const [deleteDeck] = useDeleteDeckMutation()
  useEffect(() => {
    if (openModal) {
      setOpen(openModal)
    }
  }, [openModal, onOpenModal])
  const handleCloseModal = () => {
    deleteDeck({ id })
    setOpen(false)
    if (onOpenModal) {
      onOpenModal(false)
    }
    navigate('/')
  }
  const handleCancelClick = () => {
    setOpen(false)
    if (onOpenModal) {
      onOpenModal(false)
    }
  }
  const handleChildrenClick = () => {
    setOpen(true)
  }
  return (
    <>
      <div onClick={handleChildrenClick} style={{ display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
      <Modal open={open} title={'Delete Deck'} onClose={handleCancelClick}>
        <div className={s.container}>
          <div className={s.textContainer}>
            <Typography variant={'Body1'}>
              Do you really want to remove{' '}
              {
                <Typography variant={'Subtitle1'} as={'span'}>
                  {name}
                </Typography>
              }
            </Typography>
            <Typography variant={'Body1'}>All cards will be deleted.</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button variant={'secondary'} onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button type={'submit'} onClick={handleCloseModal}>
              Delete Deck
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
