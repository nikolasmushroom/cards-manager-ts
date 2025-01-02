import { Page } from '@/components/ui/page'
import { EditProfile } from '@/components/auth/editProfile'
import { useMeQuery } from '@/services/auth/auth.service.ts'

export const Profile = () => {
  const { data } = useMeQuery()
  return (
    <Page>
      <EditProfile name={data?.name} email={data?.email} src={data?.avatar} />
    </Page>
  )
}
