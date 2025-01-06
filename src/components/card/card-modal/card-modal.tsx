import { Button, Modal } from '@/components/ui'
import { useState } from 'react'
import { CardForm, CardFormValues } from '@/components/card/card-form/card-form.tsx'
import { Card } from '@/services/decks/decks.types.ts'
import Pencil from '@/common/icons/Pencil.tsx'
import { useCreateCardMutation, useUpdateCardMutation } from '@/services/cards/cards.service.ts'

type Props = {
  title: string
  deckId?: string
  card?: Card
}
export const CardModal = ({ card, deckId, title }: Props) => {
  const [open, setOpen] = useState(false)
  const [createCard] = useCreateCardMutation()
  const [updateCard] = useUpdateCardMutation()
  const createCardHandler = (data: CardFormValues) => {
    if (card) {
      updateCard({ id: card.id, ...data })
      setOpen(false)
    } else if (!card && deckId) {
      createCard({ id: deckId, ...data })
      setOpen(false)
    }
  }
  return (
    <>
      {card ? (
        <Pencil onClick={() => setOpen(true)} />
      ) : (
        <Button onClick={() => setOpen(true)}>{title}</Button>
      )}
      <Modal
        open={open}
        title={card ? 'Update Card' : 'Add New Card'}
        onClose={() => setOpen(false)}
      >
        <CardForm
          values={{
            answer: card?.answer,
            question: card?.question,
            questionImg: card?.questionImg,
            answerImg: card?.answerImg,
          }}
          onConfirm={createCardHandler}
          title={card ? 'Update Card' : 'Add New Card'}
          onCancel={() => setOpen(false)}
        />
      </Modal>
    </>
  )
}
