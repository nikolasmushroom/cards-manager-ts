import { TCell, THead, TRow } from './table.tsx'
import { Column, SortType } from './types.ts'
import Arrow from '@/common/icons/Arrow.tsx'
import s from './table.module.scss'
import { Typography } from '../typography'

export type TableHeadProps = {
  columns: Column[]
  sort?: SortType
  setSort?: (sort: SortType) => void
}
export const TableHeader = ({ columns, sort, setSort }: TableHeadProps) => {
  const changeSortHandler = (key: string) => {
    if (setSort && sort && sort.key === key) {
      switch (sort.direction) {
        case 'asc':
          setSort({ key, direction: 'desc' })
          break
        case 'desc':
          setSort({ key, direction: 'asc' })
          break
        default:
          setSort({ key, direction: 'asc' })
      }
    } else {
      setSort && setSort({ key, direction: 'asc' })
    }
  }
  return (
    <THead>
      <TRow>
        {columns.map((column: Column) => (
          <TCell key={column.key} onClick={() => changeSortHandler(column.key)}>
            <div className={s.THeadCeil}>
              <Typography variant={'Subtitle2'}>{column.title}</Typography>
              {sort && sort.key === column.key && (
                <div>
                  {sort.direction === 'asc' ? (
                    <Arrow className={s.arrowUp} />
                  ) : (
                    <Arrow className={s.arrowDown} />
                  )}
                </div>
              )}
            </div>
          </TCell>
        ))}
      </TRow>
    </THead>
  )
}
