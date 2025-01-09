import { Button, Card, Typography } from '@/components/ui'
import s from './checkEmail.module.scss'
import EmailMessageIcon from '@/common/icons/EmailMessageIcon.tsx'
import { Link } from 'react-router-dom'

type Props = {
  link: string
  email?: string
}
export const CheckEmail = ({ link, email }: Props) => {
  return (
    <Card className={s.formWrapper}>
      <Typography variant={'H1'}>Check Email</Typography>
      <div>
        <EmailMessageIcon />
      </div>
      <Typography variant={'Body2'} as={'p'} className={s.description}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button as={Link} fullWidth to={link} variant={'primary'} className={s.button}>
        Back to Sign In
      </Button>
    </Card>
  )
}
