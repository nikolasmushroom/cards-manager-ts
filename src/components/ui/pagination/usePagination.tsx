import { useMemo, useState } from 'react'
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
  const switchItemsPerPage = (itemsPerPage: number | string) => {
    setItemsPerPage(Number(itemsPerPage))
    setCurrentPage(1)
  }
  const switchPage = (page: number | string) => {
    setCurrentPage(Number(page))
  }
  const switchToNextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(Number(currentPage) + 1)
    }
  }
  const switchToPrevPage = () => {
    if (currentPage > initialPage) {
      setCurrentPage(Number(currentPage) - 1)
    }
  }
  const arrayOfPages = useMemo(
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
    arrayOfPages,
  }
}
