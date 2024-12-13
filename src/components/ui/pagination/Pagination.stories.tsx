import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination.tsx'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    totalItemsCount: 100,
    initialItemsPerPage: 10,
  },
}
