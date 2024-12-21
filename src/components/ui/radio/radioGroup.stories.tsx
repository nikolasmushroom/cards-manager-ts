import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './radioGroup.tsx'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {
  args: {
    radios: [
      { label: 'Some text 1', value: 'Some text 1' },
      { label: 'Some text 2', value: 'Some text 2' },
      { label: 'Some text 3', value: 'Some text 3' },
    ],
    defaultValue: '1',
  },
}
export const disabledRadioGroup: Story = {
  args: {
    radios: [
      { label: 'Some text 1', value: 'Some text 1' },
      { label: 'Some text 2', value: 'Some text 2' },
      { label: 'Some text 3', value: 'Some text 3' },
    ],
    defaultValue: '1',
    disabled: true,
  },
}
