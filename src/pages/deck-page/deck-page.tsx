import s from './deck-page.module.scss'
import { Button, Dropdown, Pagination, TextField, Typography } from '@/components/ui'
import { Page } from '@/components/ui/page'
import MenuIcon from '@/common/icons/MenuIcon.tsx'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks/decks.service.ts'
import { CardsTable } from '@/pages/deck-page/cards-table/cardsTable.tsx'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMeQuery } from '@/services/auth/auth.service.ts'
import ArrowBack from '@/common/icons/ArrowBack.tsx'
import { useDebounce } from '@/components/hooks/useDebounce.ts'

type Props = {}
export const DeckPage = ({}: Props) => {
  const { deckId } = useParams()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPrtPage] = useState<number>(10)
  const [search, setSearch] = useState<string>('')
  const searchByuQuestion = useDebounce(search, 1000)
  const { data } = useMeQuery()
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cardsData } = useGetDeckCardsQuery({
    id: deckId || '',
    currentPage,
    itemsPerPage,
    question: searchByuQuestion,
  })

  return (
    <Page marginTop={'24px'} style={{ gap: '24px' }}>
      <div className={s.linkBack}>
        <ArrowBack />
        <Typography variant={'Body2'} as={Link} to={`/`}>
          Back to Decks List
        </Typography>
      </div>

      <div className={s.header}>
        <Typography variant={'H1'} as={'h1'}>
          {deckData?.name}
        </Typography>
        {deckData?.userId === data?.id && <Dropdown trigger={<MenuIcon />} />}
        <Button className={s.buttons}>
          {deckData?.userId === data?.id ? <>Add New Card</> : <>Learn deck</>}
        </Button>
      </div>
      <div className={s.textField}>
        <TextField
          search={true}
          placeholder={'Search cards'}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </div>
      <CardsTable cards={cardsData?.items} currentUserId={data?.id} />
      <div className={s.paginationContainer}>
        {cardsData && (
          <Pagination
            initialPage={currentPage}
            onCurrenPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPrtPage}
            totalItemsCount={cardsData.pagination.totalItems}
            initialItemsPerPage={itemsPerPage}
            className={s.pagination}
          />
        )}
      </div>
    </Page>
  )
}