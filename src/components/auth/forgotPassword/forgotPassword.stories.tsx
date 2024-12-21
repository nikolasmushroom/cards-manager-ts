import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { ForgotPassword } from '@/components/auth/forgotPassword/forgotPassword.tsx'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const forgotPasswordDef: Story = {
  args: { onSubmit: () => {} },
}
