import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Typography } from '../typography'
import Logout from '../../../common/assets/icons/Logout.tsx'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
    disabled: false,
    as: 'a',
  },
}
export const FullWidthButton: Story = {
  args: {
    children: 'FullWidthButton',
    disabled: false,
    fullWidth: true,
  },
}
export const ButtonWithIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Logout /> <Typography variant={'Subtitle2'}>With Icon</Typography>
      </>
    ),
  },
}
