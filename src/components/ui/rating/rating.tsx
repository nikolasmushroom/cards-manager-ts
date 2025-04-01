import s from './rating.module.scss'
import { ReactNode, useState } from 'react'
import StarOutline from '@/common/icons/StarOutline.tsx'
import StarIcon from '@/common/icons/StarIcon.tsx'

type Props = {
  item?: ReactNode
  itemsNumber: number
  gradeNumber?: number
  changeRatingOnClick?: boolean
}
export const Rating = ({ gradeNumber = 0, itemsNumber, changeRatingOnClick }: Props) => {
  const [localRating, setLocalRating] = useState(gradeNumber)
  const rating = gradeNumber !== undefined ? gradeNumber : localRating

  const handleClick = (i: number) => {
    if (changeRatingOnClick) {
      setLocalRating(i)
    }
  }
  return (
    <div className={s.ratingContainer}>
      {Array.from({ length: itemsNumber }, (_, i) => {
        const starValue = i + 1
        const StarComponent = starValue <= rating ? StarIcon : StarOutline

        return (
          <StarComponent
            key={starValue}
            onClick={() => handleClick(starValue)}
            pointerEvents={changeRatingOnClick ? '' : 'none'}
          />
        )
      })}
    </div>
  )
}
