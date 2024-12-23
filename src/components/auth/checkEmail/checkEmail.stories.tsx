import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { CheckEmail } from '@/components/auth/checkEmail/checkEmail.tsx'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [Story => <Story />],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const checkEmailDef: Story = {
  args: {
    link: '#',
  },
}
