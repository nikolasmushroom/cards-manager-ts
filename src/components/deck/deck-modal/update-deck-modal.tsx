import { Modal } from '@/components/ui'
import { DeckForm, FormValues } from '@/components/deck/deck-form/deck-form.tsx'
import { useUpdateDeckMutation } from '@/services/decks/decks.service.ts'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import { Deck } from '@/services/decks/decks.types.ts'

type Props = {
  title: string
  children?: ReactNode
  openModal?: boolean
  onOpenModal?: (openModal?: boolean) => void
  style?: CSSProperties
  deck: Deck
}
export const UpdateDeckModal = ({ deck, children, openModal, onOpenModal, style }: Props) => {
  const { id, cover, name, isPrivate } = deck
  const [open, setOpen] = useState<boolean>(false)
  const [updateDeck] = useUpdateDeckMutation()
  useEffect(() => {
    if (openModal) {
      setOpen(openModal)
    }
  }, [openModal, onOpenModal])
  const updateDeckHandler = (data: FormValues & { cover?: File | null }) => {
    const { cover, name, isPrivate } = data
    console.log(data.cover)
    updateDeck({ id, name, isPrivate, cover })
    setOpen(false)
    if (onOpenModal) {
      onOpenModal(false)
    }
  }
  const cancelUpdateHandler = () => {
    setOpen(false)
    if (onOpenModal) {
      onOpenModal(false)
    }
  }
  return (
    <>
      {children && (
        <div onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </div>
      )}
      <Modal open={open} title={'Update Deck'} onClose={cancelUpdateHandler} style={style}>
        <DeckForm
          values={{ name, cover, isPrivate }}
          onConfirm={updateDeckHandler}
          title={'Update Deck'}
        />
      </Modal>
    </>
  )
}
