import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField.tsx'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
  argTypes: { onChange: { action: 'text changes' } },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'Input',
    disabled: true,
  },
}
export const TextFieldWithError: Story = {
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'Input',
    errorMessage: 'Error message will be here',
    disabled: true,
  },
}

export const TextFieldPassword: Story = {
  args: {
    type: 'password',
    label: 'Input',
    value: '1234567890',
    disabled: true,
  },
}

export const TextFieldPasswordWithError: Story = {
  args: {
    type: 'password',
    label: 'Input',
    placeholder: 'Password',
    errorMessage: 'Error message will be here',
    disabled: true,
  },
}

export const TextFieldSearch: Story = {
  args: {
    type: 'search',
    placeholder: 'Input search',
    search: true,
    disabled: true,
  },
}

export const TextfieldSearchWithError: Story = {
  args: {
    type: 'search',
    placeholder: 'Input search',
    errorMessage: 'Error message will be here',
    search: true,
    disabled: true,
  },
}
