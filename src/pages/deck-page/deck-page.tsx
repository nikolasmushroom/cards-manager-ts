import s from './deck-page.module.scss'
import { Button, Dropdown, Pagination, TextField, Typography } from '@/components/ui'
import { Page } from '@/components/ui/page'
import MenuIcon from '@/common/icons/MenuIcon.tsx'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service.ts'
import { CardsTable } from '@/pages/deck-page/cards-table/cardsTable.tsx'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMeQuery } from '@/services/auth/auth.service.ts'
import ArrowBack from '@/common/icons/ArrowBack.tsx'
import { useDebounce } from '@/components/hooks/useDebounce.ts'
import { DropdownItemWithIcon } from '@/components/ui/dropdown/DropdownItems'
import StartIcon from '@/common/icons/StartIcon.tsx'
import Edit from '@/common/icons/Edit.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { CardModal } from '@/components/card/card-modal/card-modal.tsx'
import { useGetDeckCardsQuery } from '@/services/cards/cards.service.ts'

type Props = {}
export const DeckPage = ({}: Props) => {
  const { deckId } = useParams()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPrtPage] = useState<number>(10)
  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()
  const searchByuQuestion = useDebounce(search, 1000)
  const { data } = useMeQuery()
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cardsData } = useGetDeckCardsQuery({
    id: deckId || '',
    currentPage,
    itemsPerPage,
    question: searchByuQuestion,
  })
  const navigateToLearnPageHandler = () => {
    navigate(`/decks/${deckId}/learn`)
  }
  return (
    <Page marginTop={'24px'} style={{ gap: '24px' }}>
      <div className={s.linkBack}>
        <ArrowBack />
        <Typography variant={'Body2'} as={Link} to={`/`}>
          Back to Decks List
        </Typography>
      </div>

      <div className={s.header}>
        <div className={s.menuContainer}>
          <Typography variant={'H1'} as={'h1'}>
            {deckData?.name}
          </Typography>
          {deckData?.userId === data?.id && (
            <Dropdown trigger={<MenuIcon />}>
              <DropdownItemWithIcon
                caption={'Learn'}
                icon={<StartIcon />}
                onClick={navigateToLearnPageHandler}
              />
              <DropdownItemWithIcon caption={'Edit'} icon={<Edit />} />
              <DropdownItemWithIcon caption={'Delete'} icon={<TrashCan />} />
            </Dropdown>
          )}
        </div>
        {cardsData?.items.length &&
          (deckData?.userId === data?.id ? (
            <CardModal deckId={deckId ?? ''} title={'Add New Card'} />
          ) : (
            <Button onClick={navigateToLearnPageHandler}>Learn deck</Button>
          ))}
      </div>
      {cardsData?.items.length ? (
        <>
          <div className={s.textField}>
            <TextField
              search={true}
              placeholder={'Search cards'}
              onChange={e => setSearch(e.currentTarget.value)}
            />
          </div>
          <CardsTable cards={cardsData?.items} currentUserId={data?.id} />
          <div className={s.paginationContainer}>
            <Pagination
              initialPage={currentPage}
              onCurrenPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPrtPage}
              totalItemsCount={cardsData.pagination.totalItems}
              initialItemsPerPage={itemsPerPage}
              className={s.pagination}
            />
          </div>
        </>
      ) : (
        <div className={s.emptyDeckMessage}>
          <Typography variant={'Body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          {deckData?.userId === data?.id ? (
            <CardModal deckId={deckId ?? ''} title={'Create New Card'} />
          ) : (
            <Button onClick={navigateToLearnPageHandler}>Learn deck</Button>
          )}
        </div>
      )}
    </Page>
  )
}
