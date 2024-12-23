import StartIcon from '@/common/icons/StartIcon.tsx'
import Pencil from '@/common/icons/Pencil.tsx'
import TrashCan from '@/common/icons/TrashCan.tsx'
import s from './tableIcons.module.scss'

export const TableIcons = () => {
  return (
    <div className={s.iconsContainer}>
      <StartIcon />
      <Pencil />
      <TrashCan />
    </div>
  )
}
