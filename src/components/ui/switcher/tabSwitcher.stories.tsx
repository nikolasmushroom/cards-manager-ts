import type { Meta, StoryObj } from '@storybook/react'
import { TabSwitcher } from './tabSwitcher.tsx'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/UI/TabSwitcher',
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof TabSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { value: '1', children: 'TestSwitch1' },
      { value: '2', children: 'TestSwitch2' },
    ],
    disabled: false,
    defaultValue: '1',
  },
}
