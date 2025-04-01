import { Typography } from '@/components/ui'
import { Table, TRow, TBody, TCell } from '@/components/ui/table'
import { TableHeader } from '@/components/ui/table'
import { Column, SortType } from '@/components/ui/table/types.ts'
import { useState } from 'react'
import s from './decks-table.module.scss'
import { Deck } from '@/services/decks/decks.types.ts'
import StartIcon from '@/common/icons/StartIcon.tsx'
import { useNavigate } from 'react-router-dom'
import { UpdateDeckModal } from '@/components/deck/deck-modal/update-deck-modal.tsx'
import { DeleteDeckModal } from '@/components/deck/deck-modal/delete-deck-modal.tsx'
import Pencil from '@/common/icons/Pencil.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'

type Props = {
  currentUserId?: string
  decks?: Deck[]
}
const columns: Column[] = [
  { key: '1', title: 'Name' },
  { key: '2', title: 'Cards' },
  { key: '3', title: 'Last Updated' },
  { key: '4', title: 'Created by' },
  { key: '5', title: '' },
]
export const DecksTable = ({ currentUserId, decks }: Props) => {
  const [sort, setSort] = useState<SortType>({ key: '3', direction: 'asc' })
  const navigate = useNavigate()
  const onNavigateTo = (id: string) => {
    navigate(`/decks/${id}`)
  }
  return (
    <Table className={s.table}>
      <TableHeader columns={columns} sort={sort} setSort={setSort} />
      <TBody>
        {decks?.map(deck => {
          return (
            <TRow key={deck.id}>
              <TCell className={s.deckName}>
                <Typography variant={'Body2'}>{deck.name}</Typography>
              </TCell>
              <TCell className={s.cardsCount}>
                <Typography variant={'Body2'}>{deck.cardsCount}</Typography>
              </TCell>
              <TCell className={s.lastUpdated}>
                <Typography variant={'Body2'}>
                  {new Date(deck.updated).toLocaleDateString('ru-RU')}
                </Typography>
              </TCell>
              <TCell className={s.createdBy}>
                <Typography variant={'Body2'}>{deck.author.name}</Typography>
              </TCell>
              <TCell className={s.icons}>
                <div className={s.iconsContainer}>
                  <StartIcon onClick={() => onNavigateTo(deck.id)} />
                  {deck.userId === currentUserId && (
                    <>
                      <UpdateDeckModal title={'Update Deck'} deck={deck}>
                        <Pencil />
                      </UpdateDeckModal>
                      <DeleteDeckModal deck={deck}>
                        <TrashCan />
                      </DeleteDeckModal>
                    </>
                  )}
                </div>
              </TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
