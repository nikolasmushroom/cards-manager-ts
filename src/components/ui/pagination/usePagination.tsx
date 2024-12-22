import { useCallback, useMemo, useState } from 'react'
import { getPagesArray } from './getPagesArray.ts'

export type UsePaginationProps = {
  totalItemsCount: number
  initialItemsPerPage: number
  siblingCount?: number
  initialPage?: number
  onCurrenPageChange?: (page: number) => void
}
export const usePagination = ({
  totalItemsCount,
  initialItemsPerPage,
  siblingCount = 1,
  initialPage = 1,
  onCurrenPageChange,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage)

  const changePageHandler = (page: number) => {
    setCurrentPage(page)
    onCurrenPageChange && onCurrenPageChange(page)
  }
  const totalPagesCount = siblingCount + 5
  const totalPageCount = Math.ceil(totalItemsCount / itemsPerPage)
  const switchItemsPerPage = useCallback(
    (itemsPerPage: number | string) => {
      setItemsPerPage(Number(itemsPerPage))
      changePageHandler(1)
      return
    },
    [setItemsPerPage, changePageHandler]
  )

  const switchPage = useCallback(
    (page: number | '...') => {
      if (page !== '...') {
        changePageHandler(page)
      }
      return
    },
    [setCurrentPage]
  )
  const switchToNextPage = useCallback(() => {
    if (currentPage < totalPageCount) {
      changePageHandler(currentPage + 1)
    }
  }, [setCurrentPage, currentPage])
  const switchToPrevPage = useCallback(() => {
    if (currentPage > 1) {
      changePageHandler(currentPage - 1)
    }
  }, [setCurrentPage, currentPage])
  const pages: Array<number | '...'> | undefined = useMemo(
    getPagesArray({ currentPage, totalPagesCount, totalPageCount, siblingCount }),
    [siblingCount, currentPage, totalPageCount]
  )
  return {
    switchPage,
    switchToPrevPage,
    onCurrenPageChange,
    switchToNextPage,
    switchItemsPerPage,
    totalPageCount,
    currentPage,
    itemsPerPage,
    pages,
  }
}
