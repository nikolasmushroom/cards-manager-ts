import { useState } from 'react'
import s from './cards-table.module.scss'
import { Column, SortType } from '@/components/ui/table/types.ts'
import { Table, TableHeader, TBody, TCell, TRow } from '@/components/ui/table'
import { Typography } from '@/components/ui'
import { Card } from '@/services/decks/decks.types.ts'
import { Rating } from '@/components/ui/rating/rating.tsx'
import { CardModal } from '@/components/card/card-modal/card-modal.tsx'
import { DeleteCardModal } from '@/components/card/card-modal/delete-card-modal.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'

type Props = {
  cards?: Card[]
  isMyDeck: boolean
}
export const CardsTable = ({ cards, isMyDeck }: Props) => {
  const [sort, setSort] = useState<SortType>({ key: '3', direction: 'asc' })
  const columns: Column[] = isMyDeck
    ? [
        { key: '1', title: 'Question' },
        { key: '2', title: 'Answer' },
        { key: '3', title: 'Last Updated' },
        { key: '4', title: 'Grade' },
        { key: '5', title: '' },
      ]
    : [
        { key: '1', title: 'Question' },
        { key: '2', title: 'Answer' },
        { key: '3', title: 'Last Updated' },
        { key: '4', title: 'Grade' },
      ]
  return (
    <Table className={s.table}>
      <TableHeader columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {cards?.map(card => {
          return (
            <TRow key={card.id}>
              <TCell className={s.question}>
                <Typography variant={'Body2'}>{card.question}</Typography>
              </TCell>
              <TCell className={s.answer}>
                <Typography variant={'Body2'}>{card.answer}</Typography>
              </TCell>
              <TCell className={isMyDeck ? s.lastUpdatedWidth : s.lastUpdated}>
                <Typography variant={'Body2'}>
                  {new Date(card.updated).toLocaleDateString('ru-RU')}
                </Typography>
              </TCell>
              <TCell className={isMyDeck ? s.gradeWidth : s.grade}>
                <Rating itemsNumber={5} gradeNumber={card.grade ?? 0} changeRatingOnClick={false} />
              </TCell>
              {isMyDeck && (
                <TCell className={s.icons}>
                  <div className={s.iconsContainer}>
                    <CardModal title={'Update card'} card={card} />
                    <DeleteCardModal card={card}>
                      <TrashCan />
                    </DeleteCardModal>
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
