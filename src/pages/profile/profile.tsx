import { Page } from '@/components/ui/page'
import { EditProfile } from '@/components/auth/editProfile'
import { useLogoutMutation, useMeQuery } from '@/services/auth/auth.service.ts'

export const Profile = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()
  const onLogout = () => {
    logout({})
  }

  return (
    <Page>
      <EditProfile name={data?.name} email={data?.email} src={data?.avatar} logout={onLogout} />
    </Page>
  )
}
