import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './card.tsx'
import { Typography } from '../typography'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const CheckEmailCard: Story = {
  args: {
    children: (
      <div>
        <Typography variant={'H1'} style={{ color: 'white' }}>
          Check Email
        </Typography>
      </div>
    ),
  },
}
