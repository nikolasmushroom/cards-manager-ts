import type { Meta, StoryObj } from '@storybook/react'
import { SliderCustom } from './Slider.tsx'
import { useState } from 'react'

const meta = {
  component: SliderCustom,
  tags: ['autodocs'],
  title: 'Components/UI/SliderCustom',
  argTypes: {},
} satisfies Meta<typeof SliderCustom>

export default meta

type Story = StoryObj<typeof meta>
export const DefaultSlider: Story = {
  args: {
    value: [1, 10],
    max: 100,
    min: 0,
    step: 1,
    disabled: false,
  },
  render: () => {
    const [values, setValues] = useState([1, 10])
    return <SliderCustom value={[values[0], values[1]]} onValueChange={setValues} />
  },
}
