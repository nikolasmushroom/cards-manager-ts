import { usePagination, UsePaginatonProps } from './usePagination.tsx'
import s from './Pagination.module.scss'
import { Typography } from '../typography'
import clsx from 'clsx'
import SelectIcon from '../../../common/assets/icons/SelectIcon.tsx'
import { Option, SelectCustom } from '../select'

export type PaginationProps = {
  setCurrentPage: (page: number | string) => void
  setPageSize: (pageSize: number) => void
  options?: number[]
} & UsePaginatonProps
export const Pagination = ({
  currentPage,
  pageSize,
  setCurrentPage,
  options = [10, 20, 30, 50, 100],
  setPageSize,
  totalCount,
  siblingCount,
}: PaginationProps) => {
  debugger
  const paginationRange = usePagination({ currentPage, pageSize, totalCount, siblingCount })
  const lastPage = paginationRange?.[paginationRange.length - 1]
  const firstPage = paginationRange?.[0]
  const pageSizeOptions: Option[] = options.map(size => ({
    value: size.toString(),
    children: size.toString(),
  }))

  const switchToNextPage = () => {
    if (lastPage !== undefined && currentPage < lastPage) {
      setCurrentPage(Number(currentPage) + 1)
    }
  }
  const setPageSizeHandler = (pageSize: string) => {
    setPageSize(Number(pageSize))
  }
  const switchToPrevPage = () => {
    if (firstPage !== undefined && currentPage > firstPage) {
      setCurrentPage(Number(currentPage) - 1)
    }
  }
  return (
    <div className={s.wrapper}>
      <div className={clsx(s.arrowKey, s.left)} onClick={switchToPrevPage}>
        <SelectIcon />
      </div>
      {paginationRange?.map((page, i) => {
        return (
          <Typography
            key={i}
            variant={'Body2'}
            className={clsx(
              s.pageButton,
              currentPage === page && s.current,
              typeof page === 'string' && s.passive
            )}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Typography>
        )
      })}
      <div className={clsx(s.arrowKey, s.right)} onClick={switchToNextPage}>
        <SelectIcon />
      </div>
      <div className={s.pageSelectorContainer}>
        <Typography as={'p'} variant={'Body2'}>
          Показать
        </Typography>
        <SelectCustom
          options={pageSizeOptions}
          placeholder={pageSize.toString()}
          onValueChange={setPageSizeHandler}
          className={s.select}
          selectHeight={'24px'}
        />
        <Typography as={'p'} variant={'Body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
