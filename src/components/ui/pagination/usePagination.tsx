import { useMemo } from 'react'
import { getRange } from './getRange.ts'

export type UsePaginatonProps = {
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number | string
}
export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: UsePaginatonProps) => {
  return useMemo(() => {
    const totalPageNumbers = siblingCount + 5
    const totalPageCount = Math.ceil(totalCount / pageSize)
    if (totalPageNumbers >= totalPageCount) {
      return getRange(1, totalPageCount)
    }
    const DOTS = '...'
    debugger
    const leftSiblingIndex = Math.max(Number(currentPage) - siblingCount, 1)
    const rightSiblingIndex = Math.min(Number(currentPage) + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = getRange(1, leftItemCount)
      return [...leftRange, DOTS, totalPageCount]
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = getRange(totalPageCount - rightItemCount + 1, totalPageCount)
      return [1, DOTS, ...rightRange]
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = getRange(leftSiblingIndex, rightSiblingIndex)
      return [1, DOTS, ...middleRange, DOTS, totalPageCount]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])
}
