import type { Meta, StoryObj } from '@storybook/react'
import { FilePicker } from '@/components/ui/file-picker/FilePicker.tsx'

const meta = {
  component: FilePicker,
  tags: ['autodocs'],
  title: 'Components/FilePicker',
} satisfies Meta<typeof FilePicker>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultFilePicker: Story = {
  args: { title: 'Change image', cover: null },
}
