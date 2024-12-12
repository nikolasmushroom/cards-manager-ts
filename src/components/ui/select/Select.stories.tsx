import type { Meta, StoryObj } from '@storybook/react'
import { SelectCustom } from './Select.tsx'

const meta = {
  component: SelectCustom,
  tags: ['autodocs'],
  title: 'Components/UI/SelectCustom',
} satisfies Meta<typeof SelectCustom>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    label: 'Some text',
    options: [
      { value: '1', children: 'Zebra' },
      { value: '2', children: 'Monkey' },
      { value: '3', children: 'Lyon' },
    ],
    placeholder: 'choose options...',
  },
}
