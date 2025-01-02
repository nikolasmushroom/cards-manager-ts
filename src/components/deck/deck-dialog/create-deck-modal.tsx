import { Button, Modal } from '@/components/ui'
import { DeckForm } from '@/components/deck/deck-form/deck-form.tsx'
import { useCreateDeckMutation } from '@/services/decks/decks.service.ts'
import { useState } from 'react'
import { CreateDecksArgs } from '@/services/decks/decks.types.ts'

type Props = {
  title: string
  clearFilterHandler: () => void
}
export const CreateDeckModal = ({ clearFilterHandler, title }: Props) => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDeckMutation()
  const createDeckHandler = (data: CreateDecksArgs) => {
    createDeck(data)
    clearFilterHandler()
    setOpen(false)
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>{title}</Button>
      <Modal open={open} title={'Add New Deck'} onClose={() => setOpen(false)}>
        <DeckForm onConfirm={createDeckHandler} title={'Add New Card'} />
      </Modal>
    </>
  )
}
