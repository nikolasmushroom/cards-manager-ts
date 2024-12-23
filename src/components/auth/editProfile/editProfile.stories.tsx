import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { EditProfile } from '@/components/auth/editProfile/editProfile.tsx'

const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [Story => <Story />],
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const editProfileDef: Story = {
  args: { name: 'Ivan', email: 'j&johnson@gmail.com' },
}
