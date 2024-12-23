import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { SignUp } from '@/components/auth/signUp/signUp.tsx'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [Story => <Story />],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignInDef: Story = {
  args: { onSubmit: () => {} },
}
