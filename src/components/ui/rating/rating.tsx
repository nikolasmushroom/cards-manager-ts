import s from './rating.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import StarOutline from '@/common/icons/StarOutline.tsx'
import StarIcon from '@/common/icons/StarIcon.tsx'

type Props = {
  item?: ReactNode
  itemsNumber: number
  gradeNumber?: number
  changeRatingOnClick?: boolean
}
export const Rating = ({ gradeNumber, itemsNumber, changeRatingOnClick }: Props) => {
  const [rating, setRating] = useState<number>(0)
  const arr = []
  for (let i = 1; i <= itemsNumber; i++) {
    arr.push(i)
  }
  useEffect(() => {
    if (gradeNumber) {
      setRating(gradeNumber)
    }
  }, [gradeNumber])
  return (
    <div className={s.ratingContainer}>
      {arr.map(i => {
        if (i <= rating) {
          return (
            <StarIcon
              key={i}
              onClick={() => setRating(i)}
              pointerEvents={changeRatingOnClick ? '' : 'none'}
            />
          )
        } else {
          return (
            <StarOutline
              key={i}
              onClick={() => setRating(i)}
              pointerEvents={changeRatingOnClick ? '' : 'none'}
            />
          )
        }
      })}
    </div>
  )
}
