import { useState } from 'react'
import s from './cards-table.module.scss'
import { Column, SortType } from '@/components/ui/table/types.ts'
import { Table, TableHeader, TBody, TCell, TRow } from '@/components/ui/table'
import { Typography } from '@/components/ui'
import { Card } from '@/services/decks/decks.types.ts'
import { Rating } from '@/components/ui/rating/rating.tsx'
import { CardModal } from '@/components/card/card-modal/card-modal.tsx'
import { DeleteCardModal } from '@/components/card/card-form/delete-card-modal.tsx'

type Props = {
  cards?: Card[]
  currentUserId?: string
}
export const CardsTable = ({ cards, currentUserId }: Props) => {
  const [sort, setSort] = useState<SortType>({ key: '3', direction: 'asc' })
  const columns: Column[] = [
    { key: '1', title: 'Question' },
    { key: '2', title: 'Answer' },
    { key: '3', title: 'Last Updated' },
    { key: '4', title: 'Grade' },
    { key: '5', title: '' },
  ]
  return (
    <Table className={s.table}>
      <TableHeader columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {cards?.map(card => {
          return (
            <TRow key={card.id}>
              <TCell>
                <Typography variant={'Body2'}>{card.question}</Typography>
              </TCell>
              <TCell>
                <Typography variant={'Body2'}>{card.answer}</Typography>
              </TCell>
              <TCell>
                <Typography variant={'Body2'}>
                  {new Date(card.updated).toLocaleDateString('ru-RU')}
                </Typography>
              </TCell>
              <TCell>
                <Rating itemsNumber={5} gradeNumber={card.grade ?? 0} changeRatingOnClick={false} />
              </TCell>
              {card.userId === currentUserId && (
                <TCell>
                  <div className={s.iconsContainer}>
                    <CardModal title={'Update card'} card={card} />
                    <DeleteCardModal card={card} />
                  </div>
                </TCell>
              )}
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
