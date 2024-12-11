import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox.tsx'
import { useState } from 'react'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultCheckbox: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox checked={checked} onCheckedChange={() => setChecked(prevState => !prevState)} />
    )
  },
}
export const CheckboxWithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChecked(prevState => !prevState)}
        label={'Some text'}
      />
    )
  },
}
export const DisabledCheckbox: Story = {
  render: () => {
    return <Checkbox checked={true} disabled={true} />
  },
}
