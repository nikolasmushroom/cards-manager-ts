import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from '@/components/ui/rating/rating.tsx'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultRating: Story = {
  args: {
    itemsNumber: 5,
  },
}
