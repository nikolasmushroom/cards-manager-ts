import { useCallback, useMemo, useState } from 'react'
import { getPagesArray } from './getPagesArray.ts'

export type UsePaginationProps = {
  totalItemsCount: number
  initialItemsPerPage: number
  siblingCount?: number
  initialPage?: number
}
export const usePagination = ({
  totalItemsCount,
  initialItemsPerPage,
  siblingCount = 1,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage)

  const totalPagesCount = siblingCount + 5
  const totalPageCount = Math.ceil(totalItemsCount / itemsPerPage)
  const switchItemsPerPage = useCallback(
    (itemsPerPage: number | string) => {
      setItemsPerPage(Number(itemsPerPage))
      setCurrentPage(1)
      return
    },
    [setItemsPerPage, setCurrentPage]
  )

  const switchPage = useCallback(
    (page: number | '...') => {
      if (page !== '...') {
        setCurrentPage(page)
      }
      return
    },
    [setCurrentPage]
  )
  const switchToNextPage = useCallback(() => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1)
    }
  }, [setCurrentPage, currentPage])
  const switchToPrevPage = useCallback(() => {
    if (currentPage > initialPage) {
      setCurrentPage(currentPage - 1)
    }
  }, [setCurrentPage, currentPage])
  const pages: Array<number | '...'> | undefined = useMemo(
    getPagesArray({ currentPage, totalPagesCount, totalPageCount, siblingCount }),
    [siblingCount, currentPage, totalPageCount]
  )
  return {
    switchPage,
    switchToPrevPage,
    switchToNextPage,
    switchItemsPerPage,
    totalPageCount,
    currentPage,
    itemsPerPage,
    pages,
  }
}
