import type { Meta, StoryObj } from '@storybook/react'
import { ImagePicker } from './image-picker.tsx'
import { Avatar } from '@/components/ui'

const meta = {
  component: ImagePicker,
  tags: ['autodocs'],
  title: 'Components/ImagePicker',
} satisfies Meta<typeof ImagePicker>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultImagePicker: Story = {
  render: () => {
    return (
      <ImagePicker>
        <Avatar />
      </ImagePicker>
    )
  },
}
