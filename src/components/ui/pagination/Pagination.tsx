import { usePagination, UsePaginationProps } from './usePagination.tsx'
import s from './Pagination.module.scss'
import { Typography } from '../typography'
import clsx from 'clsx'
import SelectIcon from '../../../common/assets/icons/SelectIcon.tsx'
import { Option, SelectCustom } from '../select'

export type PaginationProps = {
  options?: number[]
} & UsePaginationProps
export const Pagination = ({
  initialPage,
  initialItemsPerPage,
  options = [10, 20, 30, 50, 100],
  totalItemsCount,
}: PaginationProps) => {
  const {
    arrayOfPages,
    switchItemsPerPage,
    switchToNextPage,
    switchToPrevPage,
    totalPageCount,
    currentPage,
    itemsPerPage,
    switchPage,
  } = usePagination({ initialPage, initialItemsPerPage, totalItemsCount })

  const itemsPerPageOptions: Option[] = options.map((size: number) => ({
    value: size.toString(),
    children: size.toString(),
  }))

  const classNames = {
    switchToPrevPageButton: clsx(s.arrowKey, s.left, currentPage === 1 && s.disabled),
    switchToNextPageButton: clsx(s.arrowKey, s.right, currentPage === totalPageCount && s.disabled),
  }
  return (
    <div className={s.wrapper}>
      <Typography
        variant={'Body2'}
        className={classNames.switchToPrevPageButton}
        onClick={switchToPrevPage}
      >
        <SelectIcon />
      </Typography>
      {arrayOfPages?.map((page, i) => {
        return (
          <Typography
            key={i}
            variant={'Body2'}
            className={clsx(
              s.pageButton,
              currentPage === page && s.current,
              typeof page === 'string' && s.passive
            )}
            onClick={() => switchPage(page)}
          >
            {page}
          </Typography>
        )
      })}
      <div className={classNames.switchToNextPageButton} onClick={switchToNextPage}>
        <SelectIcon />
      </div>
      <div className={s.pageSelectorContainer}>
        <Typography as={'p'} variant={'Body2'}>
          Показать
        </Typography>
        <SelectCustom
          options={itemsPerPageOptions}
          placeholder={itemsPerPage.toString()}
          onValueChange={switchItemsPerPage}
          className={s.select}
          style={{ height: '24px' }}
        />
        <Typography as={'p'} variant={'Body2'}>
          на странице
        </Typography>
      </div>
    </div>
  )
}
