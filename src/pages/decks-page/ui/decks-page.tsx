import { Page } from '@/components/ui/page'
import {
  Button,
  Pagination,
  SliderCustom,
  TabSwitcher,
  TextField,
  Typography,
} from '@/components/ui'
import s from './decks-page.module.scss'
import { useEffect, useState } from 'react'
import TrashCan from '@/common/icons/TrashCan.tsx'
import { useGetDecksQuery, useGetMinMaxCardsQuery } from '@/services/decks/decks.service.ts'
import { useDebounce } from '@/components/hooks/useDebounce.ts'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMeQuery } from '@/services/auth/auth.service.ts'
import { DecksTable } from '@/pages/decks-page/ui/decks-table'
import { CreateDeckModal } from '@/components/deck/deck-dialog'

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const navigate = useNavigate()
  const { data } = useMeQuery()
  const { data: minMaxData } = useGetMinMaxCardsQuery()
  const [userId, setUserId] = useState<string | undefined>('')
  const [sliderValue, setSliderValue] = useState<number[]>([
    minMaxData?.min ?? 0,
    minMaxData?.max ?? 10,
  ])
  const [sliderCommit, setSliderCommit] = useState<number[]>(sliderValue)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const debouncedValue = useDebounce(search, 1000)
  const {
    data: decks,
    isLoading,
    error,
  } = useGetDecksQuery({
    authorId: userId,
    name: debouncedValue,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    minCardsCount: sliderCommit[0],
    maxCardsCount: sliderCommit[1],
  })
  useEffect(() => {
    if (minMaxData) {
      setSliderValue([minMaxData.min, minMaxData.max])
      setSliderCommit([minMaxData.min, minMaxData.max])
    }
    if (!data) {
      navigate('/login')
    }
  }, [minMaxData, data])

  const handleSearchParams = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }
  const handleSwitcherValue = (value: string) => {
    value === 'My' ? setUserId(data?.id) : setUserId('')
  }
  const clearFilterHandler = () => {
    setUserId('')
    handleSwitcherValue('All')
    setSliderValue([minMaxData?.min ?? 0, minMaxData?.max ?? 10])
    handleSearchParams('')
    setCurrentPage(1)
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
        <CreateDeckModal clearFilterHandler={clearFilterHandler} title={'Add New Deck'} />
      </div>
      <div className={s.filters}>
        <TextField
          search={true}
          value={search}
          onValueChange={handleSearchParams}
          placeholder={'Search decks'}
        />
        <div className={s.tabs}>
          <TabSwitcher
            label={'Show decks decks'}
            tabs={[
              { value: 'My', children: 'My Cards' },
              { value: 'All', children: 'All Cards' },
            ]}
            onValueChange={handleSwitcherValue}
          ></TabSwitcher>
        </div>

        <SliderCustom
          value={sliderValue}
          min={minMaxData?.min ?? 0}
          max={minMaxData?.max ?? 10}
          onValueChange={setSliderValue}
          onValueCommit={setSliderCommit}
        />
        <Button variant={'secondary'} className={s.buttons} onClick={clearFilterHandler}>
          <TrashCan />
          Clear filter
        </Button>
      </div>
      <DecksTable decks={decks?.items} currentUserId={data?.id} />
      <div className={s.paginationContainer}>
        {decks && (
          <Pagination
            initialPage={currentPage}
            onCurrenPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            totalItemsCount={decks.pagination.totalItems}
            initialItemsPerPage={itemsPerPage}
            className={s.pagination}
          />
        )}
      </div>
    </Page>
  )
}
