import { Page } from '@/components/ui/page'
import {
  Button,
  Pagination,
  SliderCustom,
  TabSwitcher,
  TextField,
  Typography,
} from '@/components/ui'
import s from './decksList.module.scss'
import { useState } from 'react'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { TableDecks } from '@/pages/cards/decks/tableDecks/table-decks.tsx'
import { useGetDecksQuery } from '@/services/cards/flashCards-api.ts'
import { useDebounce } from '@/components/hooks/useDebounce.ts'
import { useSearchParams } from 'react-router-dom'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const [sliderValue, setSliderValue] = useState<number[]>([1, 10])
  const [sliderCommit, setSliderCommit] = useState<number[]>(sliderValue)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const debouncedValue = useDebounce(search, 1000)
  const { data, isLoading, error } = useGetDecksQuery({
    name: debouncedValue,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    minCardsCount: sliderCommit[0],
    maxCardsCount: sliderCommit[1],
  })
  const handleSearchParams = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }
  return (
    <Page>
      <div className={s.header}>
        <Typography variant={'H1'} as={'h1'}>
          Decks list
        </Typography>
        <Button className={s.buttons}>Add New Deck</Button>
      </div>
      <div className={s.filters}>
        <TextField
          search={true}
          value={search}
          // onChange={e => setSearchByName(e.currentTarget.value)}
          onValueChange={handleSearchParams}
          placeholder={'Search decks'}
        />
        <div className={s.tabs}>
          <TabSwitcher
            label={'Show decks decks'}
            tabs={[
              { value: 'My Cards', children: 'My Cards' },
              { value: 'All Cards', children: 'All Cards' },
            ]}
          ></TabSwitcher>
        </div>

        <SliderCustom
          value={sliderValue}
          onValueChange={setSliderValue}
          onValueCommit={setSliderCommit}
        />
        <Button variant={'secondary'} className={s.buttons}>
          <TrashCan />
          Clear filter
        </Button>
      </div>
      <TableDecks decks={data?.items} />
      <div className={s.paginationContainer}>
        {data && (
          <Pagination
            initialPage={currentPage}
            onCurrenPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            totalItemsCount={data.pagination.totalItems}
            initialItemsPerPage={itemsPerPage}
            className={s.pagination}
          />
        )}
      </div>
    </Page>
  )
}
