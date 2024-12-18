import type { Meta, StoryObj } from '@storybook/react'
import { SelectCustom } from './select.tsx'

const meta = {
  component: SelectCustom,
  tags: ['autodocs'],
  title: 'Components/SelectCustom',
} satisfies Meta<typeof SelectCustom>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    style: { minWidth: '210px' },
    label: 'Some text',
    options: [
      { value: '1', children: 'Zebra' },
      { value: '2', children: 'Monkey' },
      { value: '3', children: 'Lyon' },
    ],
    placeholder: 'choose options...',
  },
}
