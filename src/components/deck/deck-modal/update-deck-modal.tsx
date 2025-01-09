import { Modal } from '@/components/ui'
import { DeckForm, FormValues } from '@/components/deck/deck-form/deck-form.tsx'
import { useUpdateDeckMutation } from '@/services/decks/decks.service.ts'
import { useState } from 'react'
import Pencil from '@/common/icons/Pencil.tsx'
import { Deck } from '@/services/decks/decks.types.ts'

type Props = {
  title: string
  deck: Deck
}
export const UpdateDeckModal = ({ deck }: Props) => {
  const { id, cover, name, isPrivate } = deck
  const [open, setOpen] = useState<boolean>(false)
  const [updateDeck] = useUpdateDeckMutation()
  const updateDeckHandler = (data: FormValues & { cover?: File | null }) => {
    const { cover, name, isPrivate } = data
    updateDeck({ id, name, isPrivate, cover })
    setOpen(false)
  }

  return (
    <>
      <Pencil onClick={() => setOpen(true)} />
      <Modal open={open} title={'Update Deck'} onClose={() => setOpen(false)}>
        <DeckForm
          values={{ name, cover, isPrivate }}
          onConfirm={updateDeckHandler}
          title={'Update Deck'}
        />
      </Modal>
    </>
  )
}
