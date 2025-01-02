import { Card, Typography } from '@/components/ui'
import { useParams } from 'react-router-dom'
import s from './learn-page.module.scss'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service.ts'

export const LearnPage = () => {
  const { deckId } = useParams()
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })
  return (
    <Card className={s.card}>
      <Typography variant={'H1'}>Learn "{deckData?.name}"</Typography>
    </Card>
  )
}
