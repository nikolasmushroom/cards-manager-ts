import { Typography } from '@/components/ui'
import { Table, TRow, TBody, TCell } from '@/components/ui/table'
import { TableHeader } from '@/components/ui/table'
import { Column, SortType } from '@/components/ui/table/types.ts'
import { useState } from 'react'
import s from './table-decks.module.scss'
import { TableIcons } from '@/components/ui/table/tableIcons/tableIcons.tsx'
import { Deck } from '@/pages/cards/decks/decks.types.ts'

type Props = {
  decks?: Deck[]
}
export const TableDecks = ({ decks }: Props) => {
  const [sort, setSort] = useState<SortType>({ key: '3', direction: 'asc' })
  const columns: Column[] = [
    { key: '1', title: 'Name' },
    { key: '2', title: 'Cards' },
    { key: '3', title: 'Last Updated' },
    { key: '4', title: 'Created by' },
    { key: '5', title: '' },
  ]
  return (
    <Table className={s.table}>
      <TableHeader columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {decks?.map(deck => {
          return (
            <TRow key={deck.id}>
              <TCell>
                <Typography variant={'Body2'}>{deck.name}</Typography>
              </TCell>
              <TCell>
                <Typography variant={'Body2'}>{deck.cardsCount}</Typography>
              </TCell>
              <TCell>
                <Typography variant={'Body2'}>
                  {new Date(deck.updated).toLocaleDateString('ru-RU')}
                </Typography>
              </TCell>
              <TCell>
                <Typography variant={'Body2'}>{deck.author.name}</Typography>
              </TCell>
              <TCell>
                <TableIcons />
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
