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
import TrashCan from '@/common/icons/TrashCan.tsx'
import { DecksTable } from '@/pages/decks-page/ui/decks-table'
import { CreateDeckModal } from '@/components/deck/deck-modal'
import { useDecksPage } from '@/common/hooks/useDecksPage.ts'

export const DecksPage = () => {
  const {
    data,
    decks,
    search,
    authorId,
    currentPage,
    isLoading,
    minMaxData,
    itemsPerPage,
    sliderData,
    sliderValue,
    setCurrentPage,
    setSliderValue,
    handleTabValueChange,
    handleSearchParams,
    setItemsPerPage,
    clearFilterHandler,
    setSliderCommit,
  } = useDecksPage()

  if (isLoading) {
    return <div>loader</div>
  }
  console.log(sliderValue)
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
            label={'Show decks'}
            value={authorId ? 'my' : 'all'}
            tabs={[
              { value: 'my', children: 'My Cards' },
              { value: 'all', children: 'All Cards' },
            ]}
            onValueChange={handleTabValueChange}
          />
        </div>

        <SliderCustom
          defaultValue={sliderData}
          value={[sliderValue[0], sliderValue[1]]}
          min={minMaxData?.min}
          max={minMaxData?.max}
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
