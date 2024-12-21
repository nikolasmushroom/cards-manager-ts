import { getRange } from './getRange.ts'

export type getPagesArrayProps = {
  currentPage: number
  totalPagesCount: number
  totalPageCount: number
  siblingCount: number
}
type DotsType = '...'
export const getPagesArray = ({
  currentPage,
  totalPagesCount,
  totalPageCount,
  siblingCount,
}: getPagesArrayProps) => {
  return () => {
    if (totalPagesCount >= totalPageCount) {
      return getRange(1, totalPageCount)
    }
    const DOTS: DotsType = '...'
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
  }
}
