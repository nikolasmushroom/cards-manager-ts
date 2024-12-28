import { useState } from 'react'
import s from './cards-table.module.scss'
import { Column, SortType } from '@/components/ui/table/types.ts'
import { Table, TableHeader, TBody, TCell, TRow } from '@/components/ui/table'
import { Typography } from '@/components/ui'
import Pencil from '@/common/icons/Pencil.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { Card } from '@/services/decks/decks.types.ts'

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
              <TCell>*****</TCell>
              {card.userId === currentUserId && (
                <TCell>
                  <div className={s.iconsContainer}>
                    <div className={s.iconsContainer}>
                      <Pencil />
                      <TrashCan />
                    </div>
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
