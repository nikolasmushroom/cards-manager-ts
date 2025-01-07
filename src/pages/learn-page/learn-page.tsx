import { Button, Card, RadioGroup, RadioType, Typography } from '@/components/ui'
import { Link, useParams } from 'react-router-dom'
import s from './learn-page.module.scss'
import {
  useGetDeckByIdQuery,
  useLearnDeckQuery,
  useSaveGradeMutation,
} from '@/services/decks/decks.service.ts'
import { useState } from 'react'
import ArrowBack from '@/common/icons/ArrowBack.tsx'

const ratingOptions: RadioType[] = [
  { value: 1, label: 'Did not know' },
  { value: 2, label: 'Forgot' },
  { value: 3, label: 'A lot of thought' },
  { value: 4, label: 'Confused' },
  { value: 5, label: 'Knew the answer' },
]
export const LearnPage = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [gradeValue, setGradeValue] = useState<number>(0)
  const { deckId } = useParams()
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cardData } = useLearnDeckQuery({ id: deckId || '' })
  const [saveGrade] = useSaveGradeMutation()
  const showAnswerHandler = () => {
    saveGrade({ cardId: cardData?.id ?? '', id: deckId ?? '', grade: gradeValue })
    setShowAnswer(false)
  }
  return (
    <div style={{ width: '100%' }}>
      <div className={s.linkBack}>
        <ArrowBack />
        <Typography variant={'Body2'} as={Link} to={`/`}>
          Back to Decks List
        </Typography>
      </div>
      <Card className={s.card}>
        <Typography variant={'H1'}>Learn "{deckData?.name}"</Typography>
        {cardData?.question && (
          <div className={s.questionContainer}>
            <Typography variant={'Body1'}>Question: {cardData.question}</Typography>
          </div>
        )}
        {cardData?.questionImg && (
          <img src={cardData?.questionImg} className={s.questionImage} alt={'cardImage'} />
        )}
        {showAnswer && (
          <>
            <div className={s.answerContainer}>
              <Typography variant={'Body1'}>Answer: {cardData?.answer}</Typography>
              {cardData?.answerImg && (
                <img src={cardData.answerImg} className={s.questionImage} alt={'cardImage'} />
              )}
              <Typography variant={'Subtitle1'}>Rate yourself</Typography>
              <div className={s.radioGroup}>
                <RadioGroup
                  radios={ratingOptions}
                  onValueChange={(value: string) => setGradeValue(Number(value))}
                />
              </div>
            </div>
            <Button onClick={showAnswerHandler} className={s.button}>
              Next Question
            </Button>
          </>
        )}

        <Button onClick={() => setShowAnswer(true)} className={s.button}>
          Show Answer
        </Button>
      </Card>
    </div>
  )
}
